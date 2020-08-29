(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Commissions.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Commissions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _services_commission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/commission_service */ "./resources/js/services/commission_service.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "commission",
  data: function data() {
    return {
      users: [],
      commissions: [],
      moreExists: false,
      nextPage: 0
    };
  },
  mounted: function mounted() {
    this.loadCommissions();
    this.loadUsers();
  },
  methods: {
    loadUsers: function () {
      var _loadUsers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["UsersAll"]();

              case 3:
                response = _context.sent;
                console.log(response);
                this.users = response.data; //console.log(this.achats);   

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Erreur de chargements des users ...',
                  time: 5000
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function loadUsers() {
        return _loadUsers.apply(this, arguments);
      }

      return loadUsers;
    }(),
    loadCommissions: function () {
      var _loadCommissions = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_commission_service__WEBPACK_IMPORTED_MODULE_2__["getCommissionsAll"]();

              case 3:
                response = _context2.sent;
                console.log(response);
                this.commissions = response.data.data; //console.log(this.achats);

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Erreur de chargements des achats ...',
                  time: 5000
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function loadCommissions() {
        return _loadCommissions.apply(this, arguments);
      }

      return loadCommissions;
    }(),
    findUser: function findUser(id) {
      //console.log(this.users);
      var userName = '';
      this.users.forEach(function (user) {
        if (user.id == id) {
          userName = user.name;
        }
      });
      return userName;
    },
    findGain: function findGain(id) {
      var commissionName = '';
      this.commissions.forEach(function (commission) {
        if (commission.id == id) {
          if (commission.type == "Parrainage") {
            commissionName = commission.prix + " DTT ";
          } else {
            commissionName = commission.prix + " Pts";
          }
        }
      });
      return commissionName;
    },
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this = this;

        var res, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["getProfile"]();

              case 3:
                res = _context3.sent;
                _context3.next = 6;
                return _services_commission_service__WEBPACK_IMPORTED_MODULE_2__["loadMore"](this.nextPage);

              case 6:
                response = _context3.sent;
                console.log(response);

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.commissions.push(data);
                });
                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: "erreur de chargement des achats",
                  time: 5000
                });

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 12]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Commissions.vue?vue&type=template&id=50dee6ce&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Commissions.vue?vue&type=template&id=50dee6ce& ***!
  \*********************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row p-3" }, [
        _c("table", { staticClass: "table" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.commissions, function(commission, index) {
              return _c("tr", { key: index }, [
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(index + 1))
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(_vm.findUser(commission.idbeneficiaire)))
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(commission.type))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.findGain(commission.id)) + " ")]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("moment")(
                        commission.created_at,
                        "dddd, MMMM Do YYYY"
                      )
                    )
                  )
                ])
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.moreExists,
                expression: "moreExists"
              }
            ],
            staticClass: "text-center col-md-12"
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-sm",
                on: { click: _vm.loadMore }
              },
              [
                _c("i", { staticClass: "fa fa-arrow-down" }),
                _vm._v("Afficher la suite")
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb mb-4" }, [
      _c("li", { staticClass: "breadcrumb-item active" }, [
        _vm._v("Liste des Commissions")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Client")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Commission")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Gain ")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date de reception")])
      ])
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

/***/ "./resources/js/views/Commissions.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Commissions.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Commissions_vue_vue_type_template_id_50dee6ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Commissions.vue?vue&type=template&id=50dee6ce& */ "./resources/js/views/Commissions.vue?vue&type=template&id=50dee6ce&");
/* harmony import */ var _Commissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Commissions.vue?vue&type=script&lang=js& */ "./resources/js/views/Commissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Commissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Commissions_vue_vue_type_template_id_50dee6ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Commissions_vue_vue_type_template_id_50dee6ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Commissions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Commissions.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Commissions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Commissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Commissions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Commissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Commissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Commissions.vue?vue&type=template&id=50dee6ce&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Commissions.vue?vue&type=template&id=50dee6ce& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Commissions_vue_vue_type_template_id_50dee6ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Commissions.vue?vue&type=template&id=50dee6ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Commissions.vue?vue&type=template&id=50dee6ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Commissions_vue_vue_type_template_id_50dee6ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Commissions_vue_vue_type_template_id_50dee6ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);