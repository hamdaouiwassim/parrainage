(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Produits.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Produits.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_produit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/produit_service */ "./resources/js/services/produit_service.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      produitData: {
        categorie_id: "",
        name: "",
        image: "",
        price: " "
      },
      editproduitData: {},
      errors: {},
      moreExists: false,
      nextPage: 0
    };
  },
  mounted: function mounted() {
    this.loadCategories();
    this.loadProduits();
  },
  methods: {
    deleteProduit: function () {
      var _deleteProduit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(produit) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!window.confirm("Voulez-vous vraiment supprimer  produit ".concat(produit.name, " ?"))) {
                  _context.next = 12;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return _services_produit_service__WEBPACK_IMPORTED_MODULE_1__["deleteProduit"](produit.id);

              case 4:
                response = _context.sent;
                //console.log(response);
                this.produits = this.produits.filter(function (obj) {
                  return obj.id != produit.id;
                });
                this.flashMessage.success({
                  message: 'Produit supprimer avec succes ...',
                  time: 5000
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function deleteProduit(_x) {
        return _deleteProduit.apply(this, arguments);
      }

      return deleteProduit;
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
    loadProduits: function () {
      var _loadProduits = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_produit_service__WEBPACK_IMPORTED_MODULE_1__["getAllproduits"]();

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
                  message: 'Erreur de chargements des produits ...',
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
    attachImage: function attachImage() {
      // to use file reader
      this.produitData.image = this.$refs.newProduitImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.newProduitImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.produitData.image);
    },
    hideNewProduitModal: function hideNewProduitModal() {
      this.$refs.ProduitModal.hide();
    },
    NewProduitModal: function NewProduitModal() {
      this.$refs.ProduitModal.show();
    },
    createProduit: function () {
      var _createProduit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                //console.log("form submitted");
                formData = new FormData();
                formData.append('categorie_id', this.produitData.categorie_id);
                formData.append('name', this.produitData.name);
                formData.append('image', this.produitData.image);
                formData.append('price', this.produitData.price);
                _context4.prev = 5;
                _context4.next = 8;
                return _services_produit_service__WEBPACK_IMPORTED_MODULE_1__["createProduit"](formData);

              case 8:
                response = _context4.sent;
                //console.log(response);
                this.produits.unshift(response.data);
                this.hideNewProduitModal();
                this.flashMessage.success({
                  message: 'Produit Ajouter avec succes ...',
                  time: 5000
                });
                this.produitData = {
                  categorie_id: "",
                  name: "",
                  image: "",
                  price: " "
                };
                _context4.next = 25;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](5);
                _context4.t1 = _context4.t0.response.status;
                _context4.next = _context4.t1 === 422 ? 20 : 22;
                break;

              case 20:
                this.errors = _context4.t0.response.data.errors;
                return _context4.abrupt("break", 25);

              case 22:
                //alert('somme error');
                this.hideNewProduitModal();
                this.flashMessage.error({
                  message: 'un probleme d\'ajout ...',
                  time: 5000
                });
                return _context4.abrupt("break", 25);

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 15]]);
      }));

      function createProduit() {
        return _createProduit.apply(this, arguments);
      }

      return createProduit;
    }(),
    hideEditProduitModal: function hideEditProduitModal() {
      this.$refs.editProduitModal.hide();
    },
    showEditProduitModal: function showEditProduitModal() {
      this.$refs.editProduitModal.show();
    },
    editProduit: function editProduit(produit) {
      this.editproduitData = _objectSpread({}, produit);
      this.showEditProduitModal();
    },
    editAttachImage: function editAttachImage() {
      // to use file reader
      this.editproduitData.image = this.$refs.editProduitImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editProduitImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editproduitData.image);
    },
    updateProduit: function () {
      var _updateProduit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log("update");
                formData = new FormData();
                formData.append('categorie_id', this.editproduitData.categorie_id);
                formData.append('name', this.editproduitData.name);
                formData.append('image', this.editproduitData.image);
                formData.append('price', this.editproduitData.price);
                formData.append('_method', "put");
                _context5.prev = 7;
                _context5.next = 10;
                return _services_produit_service__WEBPACK_IMPORTED_MODULE_1__["updateProduit"](this.editproduitData.id, formData);

              case 10:
                response = _context5.sent;
                //console.log(response);
                this.produits.map(function (produit) {
                  if (produit.id == response.data.id) {
                    for (var key in response.data) {
                      produit[key] = response.data[key];
                    } // produit = response.data;

                  }
                });
                this.hideEditProduitModal();
                this.flashMessage.success({
                  message: "produit modifiee avec succes",
                  time: 5000
                });
                _context5.next = 20;
                break;

              case 16:
                _context5.prev = 16;
                _context5.t0 = _context5["catch"](7);
                this.flashMessage.error({
                  message: _context5.t0.response.data.message,
                  time: 5000
                });
                console.log(_context5.t0);

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[7, 16]]);
      }));

      function updateProduit() {
        return _updateProduit.apply(this, arguments);
      }

      return updateProduit;
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
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _services_produit_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context6.sent;
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
                _context6.next = 12;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                this.flashMessage.error({
                  message: "erreur de chargement des produits",
                  time: 5000
                });

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 9]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Produits.vue?vue&type=template&id=73fc31ee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Produits.vue?vue&type=template&id=73fc31ee& ***!
  \******************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "container-fluid" },
      [
        _c("h1", { staticClass: "mt-4" }, [_vm._v("Dashboard")]),
        _vm._v(" "),
        _c("ol", { staticClass: "breadcrumb mb-4" }, [
          _c("li", { staticClass: "breadcrumb-item active" }, [
            _vm._v("Liste des produits")
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary ml-auto",
              on: { click: _vm.NewProduitModal }
            },
            [
              _c("i", { staticClass: "fa fa-plus" }),
              _vm._v(" Ajouter un produit\n            ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row p-3" }, [
          _c("table", { staticClass: "table" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.produits, function(produit, index) {
                return _c("tr", { key: index }, [
                  _c("th", { attrs: { scope: "row" } }, [
                    _vm._v(_vm._s(index + 1))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(produit.name))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(_vm.findCategorie(produit.idcategorie)))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("img", {
                      staticClass: "w100",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          produit.image
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(produit.price) + " DT")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        on: {
                          click: function($event) {
                            return _vm.editProduit(produit)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-edit" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        on: {
                          click: function($event) {
                            return _vm.deleteProduit(produit)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-trash" })]
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
        ]),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "ProduitModal",
            attrs: {
              id: "modal-1",
              "hide-footer": "",
              title: "Ajouter un produit"
            }
          },
          [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createProduit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "categorie_id" } }, [
                    _vm._v("Categorie")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.produitData.categorie_id,
                          expression: "produitData.categorie_id"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "idcategorie", id: "categorie_id" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.produitData,
                            "categorie_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", [_vm._v(" Choisir une categorie ")]),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(categorie, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: categorie.id } },
                          [_vm._v(_vm._s(categorie.name))]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errors.categorie_id
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.categorie_id[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Nom produit")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.produitData.name,
                        expression: "produitData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "name" },
                    domProps: { value: _vm.produitData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.produitData, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [_vm._v("Image")]),
                  _vm._v(" "),
                  _vm.produitData.image.name
                    ? _c("div", { staticClass: "imageInForm" }, [
                        _c("img", {
                          ref: "newProduitImageDisplay",
                          attrs: { src: "" }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    ref: "newProduitImage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.attachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "price" } }, [
                    _vm._v("Prix produit")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.produitData.price,
                        expression: "produitData.price"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", id: "price" },
                    domProps: { value: _vm.produitData.price },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.produitData, "price", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.price
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.price[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-right" },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.hideNewProduitModal }
                      },
                      [_vm._v("Reset")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" },
                        on: { click: _vm.NewProduitModal }
                      },
                      [
                        _c("span", { staticClass: "fa fa-check" }),
                        _vm._v(" Enregistrer\n                        ")
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "editProduitModal",
            attrs: {
              id: "modal-2",
              "hide-footer": "",
              title: "Modifier produit"
            }
          },
          [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateProduit($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "categorie_id" } }, [
                    _vm._v("Categorie")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editproduitData.categorie_id,
                          expression: "editproduitData.categorie_id"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "idcategorie", id: "categorie_id" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.editproduitData,
                            "categorie_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", [_vm._v(" Choisir une categorie ")]),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(categorie, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: categorie.id } },
                          [_vm._v(_vm._s(categorie.name))]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errors.categorie_id
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.categorie_id[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Nom produit")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editproduitData.name,
                        expression: "editproduitData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "name" },
                    domProps: { value: _vm.editproduitData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editproduitData,
                          "name",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [_vm._v("Image")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "imageInForm" }, [
                    _c("img", {
                      ref: "editProduitImageDisplay",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          _vm.editproduitData.image
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "editProduitImage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.editAttachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "price" } }, [
                    _vm._v("Prix produit")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editproduitData.price,
                        expression: "editproduitData.price"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", id: "price" },
                    domProps: { value: _vm.editproduitData.price },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editproduitData,
                          "price",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.price
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.price[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-right" },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.hideEditProduitModal }
                      },
                      [_vm._v("Reset")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [
                        _c("span", { staticClass: "fa fa-check" }),
                        _vm._v(" Modifier\n                        ")
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nom produit")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Categorie")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Prix ")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions ")])
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/views/Produits.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Produits.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Produits_vue_vue_type_template_id_73fc31ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Produits.vue?vue&type=template&id=73fc31ee& */ "./resources/js/views/Produits.vue?vue&type=template&id=73fc31ee&");
/* harmony import */ var _Produits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Produits.vue?vue&type=script&lang=js& */ "./resources/js/views/Produits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Produits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Produits_vue_vue_type_template_id_73fc31ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Produits_vue_vue_type_template_id_73fc31ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Produits.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Produits.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Produits.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Produits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Produits.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Produits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Produits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Produits.vue?vue&type=template&id=73fc31ee&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Produits.vue?vue&type=template&id=73fc31ee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Produits_vue_vue_type_template_id_73fc31ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Produits.vue?vue&type=template&id=73fc31ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Produits.vue?vue&type=template&id=73fc31ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Produits_vue_vue_type_template_id_73fc31ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Produits_vue_vue_type_template_id_73fc31ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);