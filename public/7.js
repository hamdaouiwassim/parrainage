(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Achats.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Achats.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _services_achat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/achat_service */ "./resources/js/services/achat_service.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "achat",
  data: function data() {
    return {
      achats: [],
      categories: [],
      produits: [],
      moreExists: false,
      nextPage: 0
    };
  },
  mounted: function mounted() {
    this.loadClients();
    this.loadProduits();
    this.loadAchats();
  },
  methods: {
    loadAchats: function () {
      var _loadAchats = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, response;
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
                return _services_achat_service__WEBPACK_IMPORTED_MODULE_2__["getAchatsUser"](res.data.id);

              case 6:
                response = _context.sent;
                //console.log("response");
                this.achats = response.data.data; //console.log(this.achats);

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Erreur de chargements des achats ...',
                  time: 5000
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function loadAchats() {
        return _loadAchats.apply(this, arguments);
      }

      return loadAchats;
    }(),
    loadClients: function () {
      var _loadClients = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_achat_service__WEBPACK_IMPORTED_MODULE_2__["getAllclients"]();

              case 3:
                response = _context2.sent;
                //console.log(response);
                this.clients = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Erreur de chargements des achats ...',
                  time: 5000
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function loadClients() {
        return _loadClients.apply(this, arguments);
      }

      return loadClients;
    }(),
    loadProduits: function () {
      var _loadProduits = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_achat_service__WEBPACK_IMPORTED_MODULE_2__["getAllproduits"]();

              case 3:
                response = _context3.sent;
                //console.log(response);
                this.produits = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: 'Erreur de chargements des achats ...',
                  time: 5000
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function loadProduits() {
        return _loadProduits.apply(this, arguments);
      }

      return loadProduits;
    }(),
    findClient: function findClient(id) {
      var clientName = '';
      this.clients.forEach(function (client) {
        if (client.id == id) {
          clientName = client.name;
        }
      });
      return clientName;
    },
    findProduit: function findProduit(id) {
      var produitName = '';
      this.produits.forEach(function (produit) {
        if (produit.id == id) {
          produitName = produit.name;
        }
      });
      return produitName;
    },
    findProduitPrice: function findProduitPrice(id) {
      var produitName = '';
      this.produits.forEach(function (produit) {
        if (produit.id == id) {
          produitName = produit.price;
        }
      });
      return produitName;
    },
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_achat_service__WEBPACK_IMPORTED_MODULE_2__["loadMore"](this.nextPage);

              case 3:
                response = _context4.sent;
                console.log(response);

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.achats.push(data);
                });
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: "erreur de chargement des achats",
                  time: 5000
                });

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Achats.vue?vue&type=template&id=b4d0c7e2&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Achats.vue?vue&type=template&id=b4d0c7e2& ***!
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
            _vm._l(_vm.achats, function(achat, index) {
              return _c("tr", { key: index }, [
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(index + 1))
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.findProduit(achat.idproduit)))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(_vm.findProduitPrice(achat.idproduit)) + " DTT "
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("moment")(achat.created_at, "dddd, MMMM Do YYYY")
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
        _vm._v("Liste des Achats")
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Produit")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Prix ")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date d'achat")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/achat_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/achat_service.js ***!
  \************************************************/
/*! exports provided: getAllachats, getAchatsUser, getAllclients, getAllproduits, BuyProduct, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllachats", function() { return getAllachats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAchatsUser", function() { return getAchatsUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllclients", function() { return getAllclients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllproduits", function() { return getAllproduits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyProduct", function() { return BuyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getAllachats() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get('/achats');
}
function getAchatsUser(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get("achats/user/".concat(id));
}
function getAllclients() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get('/clients');
}
function getAllproduits() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get('/produits');
}
function BuyProduct(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/achats', data);
}
function loadMore(page) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("api/achats?page=".concat(page));
}

/***/ }),

/***/ "./resources/js/views/user/Achats.vue":
/*!********************************************!*\
  !*** ./resources/js/views/user/Achats.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Achats_vue_vue_type_template_id_b4d0c7e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Achats.vue?vue&type=template&id=b4d0c7e2& */ "./resources/js/views/user/Achats.vue?vue&type=template&id=b4d0c7e2&");
/* harmony import */ var _Achats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Achats.vue?vue&type=script&lang=js& */ "./resources/js/views/user/Achats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Achats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Achats_vue_vue_type_template_id_b4d0c7e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Achats_vue_vue_type_template_id_b4d0c7e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/Achats.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/Achats.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/user/Achats.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Achats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Achats.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Achats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Achats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/Achats.vue?vue&type=template&id=b4d0c7e2&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/user/Achats.vue?vue&type=template&id=b4d0c7e2& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Achats_vue_vue_type_template_id_b4d0c7e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Achats.vue?vue&type=template&id=b4d0c7e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Achats.vue?vue&type=template&id=b4d0c7e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Achats_vue_vue_type_template_id_b4d0c7e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Achats_vue_vue_type_template_id_b4d0c7e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);