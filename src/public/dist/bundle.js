/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/js/app.js":
/*!******************************!*\
  !*** ./src/public/js/app.js ***!
  \******************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var skills = document.querySelector('.lista-conocimientos');\n\n  if (typeof skills != 'undefined' && skills != null) {\n    skills.addEventListener('click', agregarSkills);\n    skillsSeleccionados();\n  }\n});\nvar skills = new Set();\n\nvar agregarSkills = function agregarSkills(e) {\n  e.preventDefault();\n\n  if (e.target.tagName == 'LI') {\n    if (e.target.classList.contains('activo')) {\n      skills[\"delete\"](e.target.textContent);\n      e.target.classList.remove('activo');\n    } else {\n      skills.add(e.target.textContent);\n      e.target.classList.add('activo');\n    }\n  }\n\n  var skillArray = _toConsumableArray(skills);\n\n  document.querySelector('#skills').value = skillArray;\n};\n\nvar skillsSeleccionados = function skillsSeleccionados() {\n  var seleccionadas = Array.from(document.querySelectorAll('.lista-conocimientos .activo'));\n  seleccionadas.forEach(function (seleccionada) {\n    skills.add(seleccionada.textContent);\n  });\n\n  var skillArray = _toConsumableArray(skills);\n\n  document.querySelector('#skills').value = skillArray;\n};\n\n//# sourceURL=webpack://devjobs/./src/public/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/public/js/app.js"]();
/******/ 	
/******/ })()
;