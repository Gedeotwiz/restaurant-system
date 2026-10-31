/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --primary: #df7200;\n    --primary-light: #f5a342;\n    --background: #fff0df;\n    --text: #292523;\n    --muted: #716a65;\n    --white: #ffffff;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    scroll-behavior: smooth;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    background: #fff;\n    color: var(--text);\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\nbutton {\n    font: inherit;\n    cursor: pointer;\n}\n\n.home-page {\n    width: 100%;\n    min-height: 100vh;\n    min-height: 100svh;\n    position: relative;\n    overflow: hidden;\n    background:\n        radial-gradient(circle at 85% 15%,\n            #ffdfbd 0,\n            transparent 35%),\n        linear-gradient(110deg,\n            #fff5e9,\n            #ffebd7);\n    border: 1px solid #f4c69e;\n    border-radius: 18px;\n    padding: 0 clamp(20px, 4.2vw, 65px);\n}\n\n\n.navbar {\n    min-height: 75px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: relative;\n    z-index: 5;\n}\n\n.logo {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: var(--primary);\n    font-weight: 700;\n    font-size: 15px;\n    line-height: 1;\n}\n\n.logo-icon {\n    font-size: 24px;\n}\n\n.logo small {\n    font-size: 10px;\n}\n\n.nav-links {\n    display: flex;\n    align-items: center;\n    gap: clamp(20px, 3.5vw, 48px);\n}\n\n.nav-links a {\n    font-size: 12px;\n    font-weight: 500;\n    transition: color 0.3s;\n}\n\n.nav-links a:hover {\n    color: var(--primary);\n}\n\n.cart-button {\n    position: relative;\n    width: 43px;\n    height: 43px;\n    border: 1px solid var(--primary);\n    background: transparent;\n    border-radius: 12px;\n    font-size: 19px;\n}\n\n.cart-count {\n    position: absolute;\n    top: -7px;\n    right: -5px;\n    width: 17px;\n    height: 17px;\n    background: var(--text);\n    color: white;\n    font-size: 9px;\n    border-radius: 50%;\n    display: grid;\n    place-items: center;\n}\n\n\n.hero {\n    min-height: calc(100vh - 76px);\n    min-height: calc(100svh - 76px);\n    display: grid;\n    grid-template-columns: 1.15fr 1fr;\n    align-items: center;\n    gap: 35px;\n    position: relative;\n    padding-bottom: 55px;\n}\n\n.hero-content {\n    position: relative;\n    z-index: 2;\n}\n\n.hero-content h1 {\n    font-size: clamp(30px, 4.1vw, 54px);\n    line-height: 1.22;\n    font-weight: 800;\n    letter-spacing: -1.8px;\n    margin-bottom: 14px;\n}\n\n.hero-description {\n    max-width: 440px;\n    color: var(--muted);\n    font-size: clamp(12px, 1.1vw, 14px);\n    line-height: 1.8;\n    margin-bottom: 27px;\n}\n\n\n\n.hero-buttons {\n    display: flex;\n    align-items: center;\n    gap: 13px;\n    flex-wrap: wrap;\n}\n\n.btn {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 45px;\n    padding: 0 22px;\n    border-radius: 12px;\n    font-size: 13px;\n    font-weight: 600;\n    transition: 0.3s ease;\n}\n\n.btn-primary {\n    background: var(--primary);\n    color: white;\n    border: 1px solid var(--primary);\n}\n\n.btn-primary:hover {\n    background: #b95d00;\n    transform: translateY(-3px);\n}\n\n.btn-outline {\n    border: 1px solid var(--primary);\n    color: var(--primary);\n    background: transparent;\n}\n\n.btn-outline:hover {\n    background: var(--primary);\n    color: white;\n}\n\n\n\n.social-contact {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    margin-top: clamp(55px, 12vh, 110px);\n}\n\n.social-icons {\n    display: flex;\n    gap: 8px;\n}\n\n.social-icons a {\n    width: 20px;\n    height: 20px;\n    display: grid;\n    place-items: center;\n    background: #f8c18e;\n    color: #a95000;\n    border-radius: 50%;\n    font-size: 12px;\n    font-weight: 700;\n    transition: 0.3s;\n}\n\n.social-icons a:hover {\n    background: var(--primary);\n    color: white;\n    transform: translateY(-3px);\n}\n\n.contact-divider {\n    height: 24px;\n    width: 1px;\n    background: var(--primary);\n}\n\n.phone-number {\n    font-size: 11px;\n    font-weight: 500;\n}\n\n\n\n.hero-visual {\n    min-height: 430px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.food-circle {\n    width: clamp(250px, 35vw, 390px);\n    aspect-ratio: 1;\n    position: relative;\n    display: grid;\n    place-items: center;\n}\n\n.circle-border {\n    position: absolute;\n    inset: 0;\n    border: 1px solid var(--primary-light);\n    border-radius: 50%;\n    animation: rotate-circle 25s linear infinite;\n}\n\n@keyframes rotate-circle {\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n.food-image {\n    width: 88%;\n    height: 88%;\n    border-radius: 50%;\n    object-fit: cover;\n    border: 5px solid rgba(255, 255, 255, 0.8);\n    box-shadow: 0 8px 30px rgba(111, 67, 25, 0.12);\n    z-index: 1;\n}\n\n.circle-dot {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: var(--primary);\n}\n\n.dot-top {\n    top: -5px;\n    left: 50%;\n}\n\n.dot-bottom {\n    bottom: -5px;\n    left: 50%;\n}\n\n.dot-left {\n    left: -5px;\n    top: 50%;\n}\n\n.dot-right {\n    right: -5px;\n    top: 50%;\n}\n\n\n.food-categories {\n    position: absolute;\n    right: -10px;\n    top: 50%;\n    transform: translateY(-50%);\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    z-index: 3;\n}\n\n.category {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 7px 12px;\n    border: 1px solid #e9a45c;\n    color: var(--primary);\n    background: rgba(255, 241, 224, 0.85);\n    border-radius: 30px;\n    font-size: 11px;\n    transition: 0.3s;\n}\n\n.category span {\n    font-size: 14px;\n}\n\n.category:hover,\n.category.active {\n    background: #ffd5a9;\n    transform: translateX(-5px);\n}\n\n\n\n.delivery-card {\n    position: absolute;\n    left: -8%;\n    bottom: 8%;\n    z-index: 4;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px 14px;\n    min-width: 168px;\n    background: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);\n}\n\n.delivery-icon {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    background: #65ae85;\n    display: grid;\n    place-items: center;\n    font-size: 20px;\n}\n\n.delivery-card h4 {\n    font-size: 11px;\n    font-weight: 600;\n}\n\n.delivery-card p {\n    font-size: 9px;\n    color: var(--muted);\n    margin-top: 3px;\n}\n\n\n\n.decoration {\n    position: absolute;\n    color: #e8b88c;\n    opacity: 0.45;\n    font-size: 45px;\n    pointer-events: none;\n}\n\n.decoration-one {\n    top: -100px;\n    left: 20px;\n    transform: rotate(-30deg);\n}\n\n.decoration-two {\n    top: 120px;\n    right: 20px;\n    transform: rotate(40deg);\n}\n\n.decoration-three {\n    bottom: 28%;\n    left: 10%;\n    font-size: 55px;\n    transform: rotate(20deg);\n}\n\n.decoration-four {\n    bottom: 15%;\n    right: 10%;\n    font-size: 60px;\n}\n\n\n@media (max-width: 900px) {\n\n    .home-page {\n        padding: 0 30px;\n    }\n\n    .hero {\n        grid-template-columns: 1fr 1fr;\n        gap: 15px;\n    }\n\n    .hero-content h1 {\n        font-size: clamp(28px, 4.5vw, 42px);\n    }\n\n    .food-circle {\n        width: clamp(230px, 36vw, 320px);\n    }\n\n    .food-categories {\n        right: -15px;\n    }\n\n    .delivery-card {\n        left: -5%;\n    }\n\n}\n\n\n\n@media (max-width: 650px) {\n\n    .home-page {\n        padding: 0 20px;\n        border-radius: 12px;\n    }\n\n    .navbar {\n        min-height: 70px;\n    }\n\n    .nav-links {\n        position: absolute;\n        top: 65px;\n        left: 0;\n        right: 0;\n        background: #fff8ef;\n        border: 1px solid #f1c79f;\n        border-radius: 12px;\n        padding: 15px;\n        justify-content: center;\n        flex-wrap: wrap;\n        gap: 15px 22px;\n    }\n\n    .nav-links a {\n        font-size: 11px;\n    }\n\n    .hero {\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n        padding-top: 85px;\n        gap: 30px;\n    }\n\n    .hero-content h1 {\n        font-size: clamp(30px, 8vw, 42px);\n        letter-spacing: -1px;\n    }\n\n    .hero-description {\n        font-size: 13px;\n    }\n\n    .social-contact {\n        margin-top: 35px;\n    }\n\n    .hero-visual {\n        min-height: 350px;\n        margin: 0 auto;\n        width: 100%;\n    }\n\n    .food-circle {\n        width: min(75vw, 310px);\n    }\n\n    .food-categories {\n        right: 0;\n        gap: 8px;\n    }\n\n    .category {\n        font-size: 10px;\n        padding: 6px 9px;\n    }\n\n    .delivery-card {\n        left: 0;\n        bottom: 0;\n    }\n\n    .decoration {\n        display: none;\n    }\n\n}\n\n\n@media (max-width: 380px) {\n\n    .home-page {\n        padding: 0 14px;\n    }\n\n    .nav-links {\n        gap: 12px;\n    }\n\n    .nav-links a {\n        font-size: 10px;\n    }\n\n    .hero-buttons {\n        gap: 8px;\n    }\n\n    .btn {\n        padding: 0 14px;\n        font-size: 11px;\n    }\n\n    .food-circle {\n        width: 230px;\n    }\n\n    .category {\n        padding: 5px 7px;\n        font-size: 9px;\n    }\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-system/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-system/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-system/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-system/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-system/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-system/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-system/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-system/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-system/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-system/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n\n\n\nconst content = document.querySelector(\"#content\")\n\ncontent.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n\n//# sourceURL=webpack://restaurant-system/./src/index.js?\n}");

/***/ },

/***/ "./src/pages/home.js"
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePage() {\n    const home = document.createElement(\"main\");\n\n    home.classList.add(\"home-page\");\n\n    home.innerHTML = `\n        \n        <header class=\"navbar\">\n\n            <a href=\"#\" class=\"logo\">\n                <span class=\"logo-icon\">🍴</span>\n                <span>\n                    Velora\n                    <small>Dining</small>\n                </span>\n            </a>\n\n            <nav class=\"nav-links\">\n                <a href=\"#about\">About Us</a>\n                <a href=\"#menu\">Menu</a>\n                <a href=\"#reviews\">Reviews</a>\n                <a href=\"#contacts\">Contacts</a>\n                <a href=\"#shop\">Shop</a>\n            </nav>\n\n            <button class=\"cart-button\" aria-label=\"Shopping cart\">\n                🛒\n                <span class=\"cart-count\">02</span>\n            </button>\n\n        </header>\n\n\n        \n        <section class=\"hero\">\n\n            \n            <div class=\"hero-content\">\n\n                <div class=\"decoration decoration-one\">♧</div>\n\n                <h1>\n                    Taste the Tradition,<br>\n                    Served Fresh Daily\n                </h1>\n\n                <p class=\"hero-description\">\n                    Where authentic taste meets modern dining —\n                    experience freshness, tradition, and a touch\n                    of luxury in every meal.\n                </p>\n\n                <div class=\"hero-buttons\">\n\n                    <a href=\"#menu\" class=\"btn btn-primary\">\n                        Order Now\n                    </a>\n\n                    <a href=\"#menu\" class=\"btn btn-outline\">\n                        Book A Menu\n                    </a>\n\n                </div>\n\n                <div class=\"decoration decoration-two\">♧</div>\n\n                \n                <div class=\"social-contact\" id=\"contacts\">\n\n                    <div class=\"social-icons\">\n                        <a href=\"#\" aria-label=\"Twitter\">♥</a>\n                        <a href=\"#\" aria-label=\"Facebook\">f</a>\n                        <a href=\"#\" aria-label=\"TikTok\">♪</a>\n                        <a href=\"#\" aria-label=\"Instagram\">◎</a>\n                    </div>\n\n                    <span class=\"contact-divider\"></span>\n\n                    <a href=\"tel:+20783801966\" class=\"phone-number\">\n                        +20 783801966\n                    </a>\n\n                </div>\n\n            </div>\n\n\n            \n            <div class=\"hero-visual\">\n\n                <div class=\"food-circle\">\n\n                    <div class=\"circle-border\">\n                        <span class=\"circle-dot dot-top\"></span>\n                        <span class=\"circle-dot dot-bottom\"></span>\n                        <span class=\"circle-dot dot-left\"></span>\n                        <span class=\"circle-dot dot-right\"></span>\n                    </div>\n\n                    <img\n                        class=\"food-image\"\n                        src=\"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&auto=format&fit=crop&q=85\"\n                        alt=\"Freshly prepared salmon meal\"\n                    >\n\n                </div>\n\n\n        \n                <div class=\"food-categories\">\n\n                    <a href=\"#menu\" class=\"category active\">\n                        <span>♧</span> Dishes\n                    </a>\n\n                    <a href=\"#menu\" class=\"category\">\n                        <span>🍰</span> Dessert\n                    </a>\n\n                    <a href=\"#menu\" class=\"category\">\n                        <span>🥤</span> Drinks\n                    </a>\n\n                    <a href=\"#menu\" class=\"category\">\n                        <span>♨</span> Platter\n                    </a>\n\n                </div>\n\n\n                \n                <div class=\"delivery-card\">\n\n                    <div class=\"delivery-icon\">\n                        📍\n                    </div>\n\n                    <div>\n                        <h4>Fast Delivery</h4>\n                        <p>Free of cost any delivery</p>\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class=\"decoration decoration-three\">♧</div>\n            <div class=\"decoration decoration-four\">◉</div>\n\n        </section>\n\n    `;\n\n    return home;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-system/./src/pages/home.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;