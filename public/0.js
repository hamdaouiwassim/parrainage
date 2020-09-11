(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user_service */ "./resources/js/services/user_service.js");
/* harmony import */ var _services_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard */ "./resources/js/services/dashboard.js");
/* harmony import */ var _services_commission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commission_service */ "./resources/js/services/commission_service.js");


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
  name: "dashboard",
  data: function data() {
    return {
      stats: {}
    };
  },
  mounted: function mounted() {
    this.GetStat();
  },
  methods: {
    GetStat: function () {
      var _GetStat = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_dashboard__WEBPACK_IMPORTED_MODULE_2__["GetStat"]();

              case 3:
                response = _context.sent;
                this.stats = response.data;
                console.log(this.stats);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(' ' + _context.t0, _context.t0.response.status);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function GetStat() {
        return _GetStat.apply(this, arguments);
      }

      return GetStat;
    }(),
    Mensuelle: function () {
      var _Mensuelle = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_commission_service__WEBPACK_IMPORTED_MODULE_3__["getCommissionsMensuelle"]();

              case 3:
                response = _context2.sent;
                //this.stats = response.data;
                //console.log(this.stats);
                this.flashMessage.success({
                  message: 'Mis a jour des commessions Mensuelle',
                  time: 5000
                });
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(' ' + _context2.t0, _context2.t0.response.status);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function Mensuelle() {
        return _Mensuelle.apply(this, arguments);
      }

      return Mensuelle;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*******************************************************************************************************************************************************************************************************/
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
      _c("h1", { staticClass: "mt-4" }, [_vm._v("Dashboard")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-3 col-md-6" }, [
          _c("div", { staticClass: "card bg-primary text-white mb-4" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm._v("Nombre des achats")
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "card-footer d-flex align-items-center justify-content-between"
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "small text-white stretched-link",
                    attrs: { href: "#" }
                  },
                  [_vm._v(_vm._s(_vm.stats[0]) + " Achats")]
                ),
                _vm._v(" "),
                _vm._m(1)
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6" }, [
          _c("div", { staticClass: "card bg-warning text-white mb-4" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm._v("Nombres des clients")
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "card-footer d-flex align-items-center justify-content-between"
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "small text-white stretched-link",
                    attrs: { href: "#" }
                  },
                  [_vm._v(_vm._s(_vm.stats[1]) + " Clients")]
                ),
                _vm._v(" "),
                _vm._m(2)
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6" }, [
          _c("div", { staticClass: "card bg-success text-white mb-4" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm._v("Nombres des comissions")
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "card-footer d-flex align-items-center justify-content-between"
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "small text-white stretched-link",
                    attrs: { href: "#" }
                  },
                  [_vm._v(_vm._s(_vm.stats[2]) + " Comissions")]
                ),
                _vm._v(" "),
                _vm._m(3)
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6" }, [
          _c("div", { staticClass: "card bg-danger text-white mb-4" }, [
            _c("div", { staticClass: "card-body" }, [
              _vm._v("Nombres des produits")
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "card-footer d-flex align-items-center justify-content-between"
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "small text-white stretched-link",
                    attrs: { href: "#" }
                  },
                  [_vm._v(_vm._s(_vm.stats[3]) + " Produits")]
                ),
                _vm._v(" "),
                _vm._m(4)
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-secondary", on: { click: _vm.Mensuelle } },
        [_vm._v("Calculer commission mensuelle")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb mb-4" }, [
      _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Dashboard")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "small text-white" }, [
      _c("i", { staticClass: "fas fa-angle-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "small text-white" }, [
      _c("i", { staticClass: "fas fa-angle-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "small text-white" }, [
      _c("i", { staticClass: "fas fa-angle-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "small text-white" }, [
      _c("i", { staticClass: "fas fa-angle-right" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/commission_service.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/commission_service.js ***!
  \*****************************************************/
/*! exports provided: getUserCommissions, loadMoreUserCommission, loadMore, getUserCommissionsAll, getCommissionsAll, getCommissionsMensuelle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCommissions", function() { return getUserCommissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreUserCommission", function() { return loadMoreUserCommission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCommissionsAll", function() { return getUserCommissionsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommissionsAll", function() { return getCommissionsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommissionsMensuelle", function() { return getCommissionsMensuelle; });
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
function getCommissionsMensuelle() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get('/cm');
}

/***/ }),

/***/ "./resources/js/services/dashboard.js":
/*!********************************************!*\
  !*** ./resources/js/services/dashboard.js ***!
  \********************************************/
/*! exports provided: GetStat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStat", function() { return GetStat; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function GetStat() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get('/getstat');
}

/***/ }),

/***/ "./resources/js/services/user_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/user_service.js ***!
  \***********************************************/
/*! exports provided: userScope, adminScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userScope", function() { return userScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminScope", function() { return adminScope; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function userScope() {
  //console.log(data);
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get('/user/user-scope');
}
function adminScope() {
  //console.log(data);
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get('/user/admin-scope');
}

/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);