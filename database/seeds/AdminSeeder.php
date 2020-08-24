<?php

use Illuminate\Database\Seeder;
use App\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'name' => 'Admin',
            'email' => 'hamdaouiwassim@gmail.com',
            'password' => bcrypt("123456789"),
            'role' => 'admin',
            'parrainage_link'=> md5(uniqid(rand(), true)),
            ]);
    }
}
