(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Produits.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Produits.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_produit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/produit_service */ "./resources/js/services/produit_service.js");
/* harmony import */ var _services_achat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/achat_service */ "./resources/js/services/achat_service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "produit",
  data: function data() {
    return {
      categories: [],
      produits: [],
      moreExists: false,
      nextPage: 0
    };
  },
  mounted: function mounted() {
    this.loadCategories();
    this.loadProduits();
  },
  methods: {
    loadProduits: function () {
      var _loadProduits = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_produit_service__WEBPACK_IMPORTED_MODULE_1__["getAllproduits"]();

              case 3:
                response = _context.sent;
                console.log(response);
                this.produits = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Erreur de chargements des produits ...',
                  time: 5000
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function loadProduits() {
        return _loadProduits.apply(this, arguments);
      }

      return loadProduits;
    }(),
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_produit_service__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]();

              case 3:
                response = _context2.sent;
                //console.log(response);
                this.categories = response.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Erreur de chargements des categories ...',
                  time: 5000
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    findCategorie: function findCategorie(id) {
      var categorieName = '';
      this.categories.forEach(function (categorie) {
        if (categorie.id == id) {
          categorieName = categorie.name;
        }
      });
      return categorieName;
    },
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_produit_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context3.sent;
                console.log(response);

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.produits.push(data);
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: "erreur de chargement des produits",
                  time: 5000
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }(),
    // end loadmore
    buyProduct: function () {
      var _buyProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(produit) {
        var res, formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["getProfile"]();

              case 3:
                res = _context4.sent;
                console.log("Achat du produit");
                console.log(res.data.id);
                console.log(produit);
                formData = new FormData();
                formData.append('idproduit', produit.id);
                formData.append('iduser', res.data.id);
                _context4.next = 12;
                return _services_achat_service__WEBPACK_IMPORTED_MODULE_2__["BuyProduct"](formData);

              case 12:
                response = _context4.sent;
                this.flashMessage.success({
                  message: 'Achat avec succes ...',
                  time: 5000
                });
                _context4.next = 19;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: "erreur d'achat du produit",
                  time: 5000
                });

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 16]]);
      }));

      function buyProduct(_x) {
        return _buyProduct.apply(this, arguments);
      }

      return buyProduct;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Produits.vue?vue&type=template&id=03cb3c5f&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Produits.vue?vue&type=template&id=03cb3c5f& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      _c("h2", { staticClass: "mt-4" }, [_vm._v("Liste des produits")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row col-md-12" },
        _vm._l(_vm.produits, function(produit, index) {
          return _c("div", { key: index, staticClass: "col-md-4" }, [
            _c(
              "div",
              { staticClass: "card", staticStyle: { width: "18rem" } },
              [
                _c("img", {
                  staticClass: "card-img-top",
                  staticStyle: { "max-height": "200px !important" },
                  attrs: {
                    src:
                      _vm.$store.state.serverPath + "/storage/" + produit.image,
                    alt: "Card image cap"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(produit.name))
                  ]),
                  _vm._v(" "),
                  _c("h6", [_vm._v(_vm._s(produit.price) + " DTT")]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-success",
                      on: {
                        click: function($event) {
                          return _vm.buyProduct(produit)
                        }
                      }
                    },
                    [_vm._v("Acheter")]
                  )
                ])
              ]
            )
          ])
        }),
        0
      ),
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
}
var staticRenderFns = []
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

/***/ "./resources/js/services/produit_service.js":
/*!**************************************************!*\
  !*** ./resources/js/services/produit_service.js ***!
  \**************************************************/
/*! exports provided: createProduit, loadCategories, getAllproduits, deleteProduit, updateProduit, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProduit", function() { return createProduit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllproduits", function() { return getAllproduits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduit", function() { return deleteProduit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduit", function() { return updateProduit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function createProduit(data) {
  //console.log(data);
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/produits', data);
}
function loadCategories() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get("/get-categories");
}
function getAllproduits() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().get("/produits");
}
function deleteProduit(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])()["delete"]("produits/".concat(id));
}
function updateProduit(id, data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("produits/".concat(id), data);
}
function loadMore(page) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("api/produits?page=".concat(page));
}

/***/ }),

/***/ "./resources/js/views/user/Produits.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/user/Produits.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Produits_vue_vue_type_template_id_03cb3c5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Produits.vue?vue&type=template&id=03cb3c5f& */ "./resources/js/views/user/Produits.vue?vue&type=template&id=03cb3c5f&");
/* harmony import */ var _Produits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Produits.vue?vue&type=script&lang=js& */ "./resources/js/views/user/Produits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Produits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Produits_vue_vue_type_template_id_03cb3c5f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Produits_vue_vue_type_template_id_03cb3c5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/Produits.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/Produits.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/user/Produits.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Produits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Produits.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Produits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Produits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/Produits.vue?vue&type=template&id=03cb3c5f&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/user/Produits.vue?vue&type=template&id=03cb3c5f& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Produits_vue_vue_type_template_id_03cb3c5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Produits.vue?vue&type=template&id=03cb3c5f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Produits.vue?vue&type=template&id=03cb3c5f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Produits_vue_vue_type_template_id_03cb3c5f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Produits_vue_vue_type_template_id_03cb3c5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);