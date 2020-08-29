(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _services_commission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/commission_service */ "./resources/js/services/commission_service.js");
/* harmony import */ var _services_parrainage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/parrainage_service */ "./resources/js/services/parrainage_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "commission",
  data: function data() {
    return {
      commissions: [],
      parrainage: [],
      users: {}
    };
  },
  mounted: function mounted() {
    this.loadCommissions();
  },
  methods: {
    loadCommissions: function () {
      var _loadCommissions = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, response, response1, response2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["getProfile"]();

              case 3:
                res = _context.sent;
                _context.next = 6;
                return _services_commission_service__WEBPACK_IMPORTED_MODULE_2__["getUserCommissionsAll"](res.data.id);

              case 6:
                response = _context.sent;
                _context.next = 9;
                return _services_parrainage_service__WEBPACK_IMPORTED_MODULE_3__["getParrainage"](res.data.id);

              case 9:
                response1 = _context.sent;
                _context.next = 12;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["UsersAll"]();

              case 12:
                response2 = _context.sent;
                this.users = response2.data;
                console.log("users");
                console.log(this.users);
                this.commissions = response.data;
                this.parrainage = response1.data;
                console.log(this.parrainage);
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Erreur de chargements des commissions ...',
                  time: 5000
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 21]]);
      }));

      function loadCommissions() {
        return _loadCommissions.apply(this, arguments);
      }

      return loadCommissions;
    }(),
    calculSoldePts: function calculSoldePts() {
      var solde = 0;
      this.commissions.forEach(function (commission) {
        if (commission.type == "Reseau") {
          solde += commission.prix;
        }
      });
      return solde;
    },
    calculSoldeArgents: function calculSoldeArgents() {
      var solde = 0;
      this.commissions.forEach(function (commission) {
        if (commission.type == "Parrainage") {
          solde += commission.prix;
        }
      });
      return solde;
    },
    findPere: function findPere(id) {
      var userName = '';
      this.users.forEach(function (user) {
        if (user.id == id) {
          userName = user.name;
        }
      });
      return userName;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Profile.vue?vue&type=template&id=45366d78&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Profile.vue?vue&type=template&id=45366d78& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "m-5" }, [
        _c("h5", [_vm._v(" Solde des points :  ")]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-warning" }, [
          _vm._v(" " + _vm._s(_vm.calculSoldePts()) + " Pts ")
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("h5", [_vm._v(" Solde d'argents :  ")]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-warning" }, [
          _vm._v(" " + _vm._s(_vm.calculSoldeArgents()) + " DTT ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card m-5" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("h4", [
            _vm._v("Nom :  "),
            _c("span", { staticClass: "text-primary" }, [
              _vm._v(_vm._s(_vm.$store.state.profile.name))
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Email :  "),
            _c("span", { staticClass: "text-primary" }, [
              _vm._v(_vm._s(_vm.$store.state.profile.email))
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Lien le parrainage :  "),
            _c("span", { staticClass: "text-primary" }, [
              _vm._v(_vm._s(_vm.$store.state.profile.parrainage_link))
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Date d'inscription :  "),
            _c("span", { staticClass: "text-primary" }, [
              _vm._v(
                _vm._s(
                  _vm._f("moment")(
                    _vm.$store.state.profile.created_at,
                    "YYYY-MM-DD"
                  )
                )
              )
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("h4", [
            _vm._v(" Mon Parrain : "),
            _c("span", { staticClass: "text-primary" }, [
              _vm._v(_vm._s(_vm.findPere(_vm.parrainage[0].parrain)) + " ")
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("h4", [
            _vm._v(" Mon Pere :  "),
            _c("span", { staticClass: "text-primary" }, [
              _vm._v(_vm._s(_vm.findPere(_vm.parrainage[0].pere)) + " ")
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [_vm._v(" Informations du compte ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/commission_service.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/commission_service.js ***!
  \*****************************************************/
/*! exports provided: getUserCommissions, loadMoreUserCommission, loadMore, getUserCommissionsAll, getCommissionsAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCommissions", function() { return getUserCommissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreUserCommission", function() { return loadMoreUserCommission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCommissionsAll", function() { return getUserCommissionsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommissionsAll", function() { return getCommissionsAll; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getUserCommissions(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get("commissions/user/".concat(id));
}
function loadMoreUserCommission(id, page) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get("commissions/user/".concat(id, "?page=").concat(page));
}
function loadMore(page) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("api/commissions?page=".concat(page));
}
function getUserCommissionsAll(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get("commissions/user/all/".concat(id));
}
function getCommissionsAll() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get('/commissions');
}

/***/ }),

/***/ "./resources/js/services/parrainage_service.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/parrainage_service.js ***!
  \*****************************************************/
/*! exports provided: getParrainageDirectes, getusers, getarbre, getParrainage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParrainageDirectes", function() { return getParrainageDirectes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getusers", function() { return getusers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getarbre", function() { return getarbre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParrainage", function() { return getParrainage; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getParrainageDirectes(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get("parrainage/directe/".concat(id));
}
function getusers() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get('parrainage/users');
}
function getarbre(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get("parrainage/arbre/".concat(id));
}
function getParrainage(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get("parrainage/user/".concat(id));
}

/***/ }),

/***/ "./resources/js/views/user/Profile.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/user/Profile.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_45366d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=45366d78& */ "./resources/js/views/user/Profile.vue?vue&type=template&id=45366d78&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/user/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_45366d78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_45366d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/user/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/Profile.vue?vue&type=template&id=45366d78&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/user/Profile.vue?vue&type=template&id=45366d78& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_45366d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=45366d78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Profile.vue?vue&type=template&id=45366d78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_45366d78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_45366d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);