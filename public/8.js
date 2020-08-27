(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Arbre.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Arbre.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _services_parrainage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/parrainage_service */ "./resources/js/services/parrainage_service.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "arbre",
  data: function data() {
    return {
      clients: {},
      arbres: [],
      niveau1: [],
      niveau2: [],
      niveau3: [],
      niveau4: []
    };
  },
  mounted: function mounted() {
    this.loadusers();
    this.loadarbre();
  },
  methods: {
    findUser: function findUser(id) {
      //console.log(this.users);
      var userName = '';
      this.clients.forEach(function (user) {
        if (user.id == id) {
          userName = user.name;
        }
      });
      return userName;
    },
    loadusers: function () {
      var _loadusers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_parrainage_service__WEBPACK_IMPORTED_MODULE_2__["getusers"]();

              case 3:
                response = _context.sent;
                this.clients = response.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Erreur de chargements des users ...',
                  time: 5000
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadusers() {
        return _loadusers.apply(this, arguments);
      }

      return loadusers;
    }(),
    loadarbre: function () {
      var _loadarbre = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["getProfile"]();

              case 3:
                res = _context2.sent;
                _context2.next = 6;
                return _services_parrainage_service__WEBPACK_IMPORTED_MODULE_2__["getarbre"](res.data.id);

              case 6:
                response = _context2.sent;
                this.arbres = response.data;

                if (this.arbres.length == 4) {
                  this.niveau4 = this.arbres[3];
                  this.niveau3 = this.arbres[2];
                  this.niveau2 = this.arbres[1];
                  this.niveau1 = this.arbres[0]; //console.log(this.niveau3);
                } else if (this.arbres.length == 3) {
                  this.niveau3 = this.arbres[2];
                  this.niveau2 = this.arbres[1];
                  this.niveau1 = this.arbres[0]; //console.log(this.arbres);
                } else if (this.arbres.length == 2) {
                  this.niveau2 = this.arbres[1];
                  this.niveau1 = this.arbres[0]; //console.log(this.arbres);
                } else if (this.arbres.length == 1) {
                  this.niveau1 = this.arbres[0]; //console.log(this.niveau1);
                }

                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Erreur de chargements des arbres ...',
                  time: 5000
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function loadarbre() {
        return _loadarbre.apply(this, arguments);
      }

      return loadarbre;
    }() // end load arbre

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Arbre.vue?vue&type=template&id=3d2391c2&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Arbre.vue?vue&type=template&id=3d2391c2& ***!
  \********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-md-12" }, [
      _c("h2", { staticClass: "m-4" }, [_vm._v("Votre Arbre de parrainage")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12 text-center mt-4" }, [
        _c("button", { staticClass: "btn btn-primary" }, [
          _vm._v(" " + _vm._s(_vm.$store.state.profile.name) + " ")
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("h6", [_vm._v("Niveau 1")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm.niveau1.length > 0
        ? _c(
            "div",
            { staticClass: "row col-md-12 text-center" },
            _vm._l(_vm.niveau1, function(nv, index) {
              return _c("div", { key: index, staticClass: "col-md-6" }, [
                _c("button", { staticClass: "btn btn-secondary" }, [
                  _vm._v(" " + _vm._s(_vm.findUser(nv)) + " ")
                ])
              ])
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("h6", [_vm._v("Niveau 2")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm.niveau2.length > 0
        ? _c(
            "div",
            { staticClass: "row col-md-12 text-center" },
            _vm._l(_vm.niveau2, function(nv, index) {
              return _c("div", { key: index, staticClass: "col-md-3" }, [
                _c("button", { staticClass: "btn btn-success" }, [
                  _vm._v(" " + _vm._s(_vm.findUser(nv)) + " ")
                ])
              ])
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("h6", [_vm._v("Niveau 3")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm.niveau3.length > 0
        ? _c(
            "div",
            { staticClass: "row col-md-8 offset-2 text-center" },
            _vm._l(_vm.niveau1, function(nv, index) {
              return _c("div", { key: index, staticClass: "col-md-1" }, [
                _c("button", { staticClass: "btn btn-danger" }, [
                  _vm._v(" " + _vm._s(_vm.findUser(nv)) + " ")
                ])
              ])
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("h6", [_vm._v("Niveau 4")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm.niveau4.length > 0
        ? _c(
            "div",
            { staticClass: "row col-md-12 text-center" },
            _vm._l(_vm.niveau4, function(nv, index) {
              return _c("div", { key: index, staticClass: "col-md-1" }, [
                _c("button", { staticClass: "btn btn-danger" }, [
                  _vm._v(" " + _vm._s(_vm.findUser(nv)) + " ")
                ])
              ])
            }),
            0
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/views/user/Arbre.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/user/Arbre.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Arbre_vue_vue_type_template_id_3d2391c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Arbre.vue?vue&type=template&id=3d2391c2& */ "./resources/js/views/user/Arbre.vue?vue&type=template&id=3d2391c2&");
/* harmony import */ var _Arbre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Arbre.vue?vue&type=script&lang=js& */ "./resources/js/views/user/Arbre.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Arbre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Arbre_vue_vue_type_template_id_3d2391c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Arbre_vue_vue_type_template_id_3d2391c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/Arbre.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/Arbre.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/user/Arbre.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Arbre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Arbre.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Arbre.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Arbre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/Arbre.vue?vue&type=template&id=3d2391c2&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/user/Arbre.vue?vue&type=template&id=3d2391c2& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Arbre_vue_vue_type_template_id_3d2391c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Arbre.vue?vue&type=template&id=3d2391c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Arbre.vue?vue&type=template&id=3d2391c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Arbre_vue_vue_type_template_id_3d2391c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Arbre_vue_vue_type_template_id_3d2391c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);