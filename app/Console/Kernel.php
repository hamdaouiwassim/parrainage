<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
        $schedule->call(function () {
           // tester if la date d'aujourdhui egal a 1 

           $courrent_date = date('d');
           $courrent_month = date('m');
           if ( $courrent_date == 1 ){

                // lister tt les utilisateurs sauf les utilisateurs de dernier niveau 
                $last_level = Parrainge::max('niveau');
                $users = User::all();
                
                
                foreach($users as $user){
                    // chercher fils
                    $fils = Parrainge::where('pere',$user->id)->get();

                    if (  count($fils) == 2 ){
                        // pour chaque fils
                        $pts = array();
                        foreach($fils as $f){
                            // chercher le nombre du pts pour chaque fils
                            $from = date('Y')."-".($courrent_month-1)."-01" ;
                            $to = date('Y')."-".($courrent_month-1)."-31" ;
                            $commissions = Commission::where('idbeneficiaire',$f->client)
                                            ->where('type','Reseau')
                                            ->where('created_at', [$from, $to])->get();
                            $sc = 0;
                            foreach($commissions as $c){
                                $sc += $c->prix;
                                
                            }
                            $pts[] = $sc;
                        }

                        if ( $pts[0] == $pts[1] ){
                            $commission = new Commission();
                            $commission->idclient = $fils[0]->client ;
                            $commission->idbeneficiaire = $user->id;
                            $commission->type = "Mensuelle";
                            $commission->prix = $pts[0];
                            $commission->save();
                        }elseif ($pts[0] > $pts[1]){    
                            $commission = new Commission();
                            $commission->idclient = $fils[0]->client ;
                            $commission->idbeneficiaire = $user->id;
                            $commission->type = "Mensuelle";
                            $commission->prix = $pts[0] - $pts[1];
                            $commission->save();

                        }else{
                            $commission = new Commission();
                            $commission->idclient = $fils[0]->client ;
                            $commission->idbeneficiaire = $user->id;
                            $commission->type = "Mensuelle";
                            $commission->prix = $pts[1] - $pts[0];
                            $commission->save();
                        }

                    }


                }




                
                

           }
           
           






        })->daily();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
