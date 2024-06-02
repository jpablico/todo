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

/***/ "./src/Styles/style.scss":
/*!*******************************!*\
  !*** ./src/Styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://To-Do-List-App/./src/Styles/style.scss?");

/***/ }),

/***/ "./src/Scripts/index.js":
/*!******************************!*\
  !*** ./src/Scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/Styles/style.scss */ \"./src/Styles/style.scss\");\n\n\n\nconst labelAdd = document.querySelector('.label-add');\nconst labelFormText = document.querySelector('.label-name');\nconst labelCancel = document.querySelector('#label-cancel');\nconst labelSubmit = document.querySelector('#label-submit');\n\nlabelAdd.addEventListener('click', showDialogModal);\nlabelCancel.addEventListener('click', closeDialogModal);\nlabelSubmit.addEventListener('click', closeDialogModal);\n\nfunction showDialogModal() {\n  const dialog = document.querySelector('.dialog');\n  dialog.showModal();\n}\n\nfunction closeDialogModal() {\n  const dialog = document.querySelector('.dialog');\n  dialog.close();\n}\nlet allTasks = [];\n\nconst addTask = (task) => {\n  allTasks.push(task);\n}\n\n\n\n\nconst addLabel = document.querySelector('.label-add');\n\naddLabel.addEventListener('click', () => {\n  console.log('Add button clicked');\n});\n\ndocument.addEventListener('DOMContentLoaded', function() {\n  const dialog = document.getElementById('myDialog');\n  if (dialog) {\n      // Assuming you have a button to show the dialog\n      const showDialogButton = document.getElementById('showDialogButton');\n      showDialogButton.addEventListener('click', function() {\n          dialog.showModal();\n      });\n  } else {\n      console.error('Dialog element not found');\n  }\n});\n\n\n//# sourceURL=webpack://To-Do-List-App/./src/Scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Scripts/index.js");
/******/ 	
/******/ })()
;