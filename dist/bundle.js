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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"body\": () => (/* binding */ body)\n/* harmony export */ });\n/* harmony import */ var _portfolioFilterHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolioFilterHelpers.js */ \"./src/portfolioFilterHelpers.js\");\n/* harmony import */ var _showHideModalsHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showHideModalsHelpers */ \"./src/showHideModalsHelpers.js\");\n\r\n\r\n\r\n\r\n//---------------------------------------------JS-----------------------------------------\r\n\r\n//----------Portfolio filter----------------\r\n\r\nlet worksNav = document.querySelector('.works_nav');\r\n\r\nworksNav.addEventListener('click', function (event) {\r\n    event.preventDefault();\r\n    let target = event.target;\r\n    if (target.tagName !== 'A') {\r\n        return;\r\n    }\r\n    (0,_portfolioFilterHelpers_js__WEBPACK_IMPORTED_MODULE_0__.filterWorks)(target.getAttribute('data-filter'));\r\n});\r\n\r\n//-------------buttons to show modals---------------------------\r\n\r\nlet allAButtons = Array.from(document.querySelectorAll('a[data-modal]'));\r\nlet allDivButtons = Array.from(document.querySelectorAll('div[data-modal]'));\r\nlet body = document.querySelector('BODY');\r\n\r\n(0,_showHideModalsHelpers__WEBPACK_IMPORTED_MODULE_1__.setMultipleEvLi)(allAButtons, 'target');\r\n(0,_showHideModalsHelpers__WEBPACK_IMPORTED_MODULE_1__.setMultipleEvLi)(allDivButtons, 'currentTarget');\r\n\r\n//-------------------toggle nav menu------------------------------\r\n\r\nlet navToggle = document.querySelector('#navToggle');\r\nlet nav = document.querySelector('#nav');\r\n\r\nnavToggle.onclick = function (event) {\r\n    event.preventDefault();\r\n    nav.classList.toggle('show');\r\n\r\n    if (nav.classList.contains('show')) {\r\n        body.addEventListener('click', function dgd(event) {\r\n            event.preventDefault();\r\n\r\n        });\r\n    }\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n//----------------------------------------jQuery-----------------------------------\r\n\r\n\r\n$(function () {\r\n\r\n    // Portfolio Filter---------------------------------------\r\n\r\n    /* let filter = $(\"[data-filter]\");\r\n\r\n    filter.on(\"click\", function (event) {\r\n        event.preventDefault();\r\n\r\n        let cat = $(this).data('filter');\r\n\r\n        if (cat == 'all') {\r\n            $(\"[data-cat]\").removeClass('hide');\r\n        } else {\r\n            $(\"[data-cat]\").each(function () {\r\n                let workCat = $(this).data('cat');\r\n\r\n                if (workCat != cat) {\r\n                    $(this).addClass('hide');\r\n                } else {\r\n                    $(this).removeClass('hide');\r\n                }\r\n            });\r\n        }\r\n\r\n    }); */\r\n\r\n    // Modal windows--------------------------------------------\r\n\r\n    /* let modalCall = $(\"[data-modal]\");\r\n    let modalClose = $(\"[data-close]\");\r\n\r\n    modalCall.on(\"click\", function (event) {\r\n        event.preventDefault();\r\n\r\n        let $this = $(this);\r\n        let modalId = $this.data('modal');\r\n\r\n        $(modalId).addClass('show');\r\n\r\n        $(\"body\").addClass('no-scroll');\r\n\r\n\r\n    });\r\n\r\n    modalClose.on(\"click\", function (event) {\r\n        event.preventDefault();\r\n\r\n        let $this = $(this);\r\n        let modalParent = $this.parents('.modal');\r\n\r\n        modalParent.removeClass('show');\r\n\r\n        $(\"body\").removeClass('no-scroll');\r\n\r\n\r\n    });\r\n\r\n    // Modal hide on click--------------------------------------------\r\n\r\n\r\n    $(\".modal\").on(\"click\", function (event) {\r\n        $(this).removeClass('show');\r\n        $(\"body\").removeClass('no-scroll');\r\n    });\r\n\r\n    $(\".modal__dialog\").on(\"click\", function (event) {\r\n        event.stopPropagation();\r\n    }); */\r\n\r\n    // Mobile nav---------------------------------\r\n\r\n    /*  let navToggle = $(\"#navToggle\");\r\n     let nav = $(\"#nav\");\r\n\r\n     navToggle.on(\"click\", function (event) {\r\n         event.preventDefault();\r\n\r\n         nav.toggleClass(\"show\");\r\n     }); */\r\n\r\n\r\n    // Scroll from nav to heading---------------------------------\r\n\r\n\r\n    $('#nav ul li a').click(function (event) {\r\n        event.preventDefault();\r\n        var $anchor = $(\"#content section.\" + this.className.split(\" \")[0]).offset();\r\n        $('html, body').animate({\r\n            scrollTop: ($anchor.top)\r\n        }, 1000);\r\n        return false;\r\n    });\r\n\r\n    $('.footer__nav a').click(function (event) {\r\n        event.preventDefault();\r\n        var $anchor = $(\"#content section.\" + this.className.split(\" \")[0]).offset();\r\n        $('html, body').animate({\r\n            scrollTop: ($anchor.top)\r\n        }, 1000);\r\n        return false;\r\n    });\r\n\r\n    // arrow button go to top---------------------------------\r\n\r\n    // при нажатии на кнопку scrollup\r\n    $('.arrow-gototop').click(function () {\r\n        // переместиться в верхнюю часть страницы\r\n        $(\"html, body\").animate({\r\n            scrollTop: 0\r\n        }, 1000);\r\n    })\r\n})\r\n// стрелка вверх при прокрутке окна (window)\r\n$(window).scroll(function () {\r\n    if ($(this).scrollTop() > 600) {\r\n        $('.arrow-gototop').fadeIn();\r\n    } else {\r\n        $('.arrow-gototop').fadeOut();\r\n    }\r\n    //Scrollup button position\r\n    var layoutWidth = $('.layout').outerWidth();\r\n    var screenWidth = $('html, body').outerWidth();\r\n    var marginWidth = screenWidth - layoutWidth;\r\n    var halfMarginWidth = marginWidth / 2;\r\n    $('.arrow-gototop').css('right', halfMarginWidth);\r\n\r\n\r\n\r\n});\r\n\r\n\r\n//-------------------------------------------To delete-----------------------\r\n\r\n\r\n/* let body = document.querySelector('BODY');\r\n\r\nbody.addEventListener('click', function (event) {\r\n    event.preventDefault();\r\n\r\n    let modalWindow = document.querySelector(event.target.getAttribute('data-modal'));\r\n\r\n    if (event.target.hasAttribute('data-modal')) {\r\n        modalWindow.children[0].addEventListener('click', function(event) {\r\n            event.preventDefault();\r\n            let sss = document.querySelector('a.button');\r\n            if (event.target !== sss) {\r\n                event.stopPropagation();\r\n            }\r\n            \r\n            \r\n        });\r\n\r\n        return modalWindow.classList.add('show');\r\n    }\r\n    \r\n    closeAllModal();\r\n\r\n\r\n});\r\n\r\n\r\nfunction closeAllModal() {\r\n    let modalWindows = document.querySelectorAll('.modal');\r\n\r\n    for (let window of modalWindows) {\r\n        window.classList.remove('show');\r\n    }\r\n} */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* let allbuttons = Array.from(document.querySelectorAll('a[data-modal]'));\r\nconsole.log(allbuttons);\r\n\r\n\r\n\r\n\r\nif (allbuttons.includes(event.target)) {        \r\n    let modal = document.querySelector(event.target.getAttribute('data-modal'));\r\n    \r\n    return modal.classList.add(show);\r\n\r\n} */\n\n//# sourceURL=webpack://gleb_portfolio/./src/index.js?");

/***/ }),

/***/ "./src/portfolioFilterHelpers.js":
/*!***************************************!*\
  !*** ./src/portfolioFilterHelpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterWorks\": () => (/* binding */ filterWorks)\n/* harmony export */ });\n//-----------------------function to filter Works shown--------------------\r\n\r\nfunction filterWorks(attribute) {\r\n    let worksList = document.querySelectorAll('[data-cat]');\r\n    for (let work of worksList) {\r\n        work.classList.remove('hide');\r\n        if (attribute !== 'all' && work.getAttribute('data-cat') !== attribute) {\r\n            work.classList.add('hide');\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://gleb_portfolio/./src/portfolioFilterHelpers.js?");

/***/ }),

/***/ "./src/showHideModalsHelpers.js":
/*!**************************************!*\
  !*** ./src/showHideModalsHelpers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setMultipleEvLi\": () => (/* binding */ setMultipleEvLi),\n/* harmony export */   \"ModalObj\": () => (/* binding */ ModalObj)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\n//------- Function to upply multiple Event Listeners to every item in array----------\r\n\r\nfunction setMultipleEvLi(array, target) {\r\n    for (let item of array) {\r\n        item.addEventListener('click', function (event) {\r\n            event.preventDefault();\r\n            event.stopPropagation();\r\n            let modalWindow;\r\n            let modalObj;\r\n\r\n            if (target === 'target') {\r\n                modalWindow = document.querySelector(event.target.getAttribute('data-modal'));\r\n                modalObj = new ModalObj(event.target, modalWindow);\r\n            } else {\r\n                modalWindow = document.querySelector(event.currentTarget.getAttribute('data-modal'));\r\n                modalObj = new ModalObj(event.currentTarget, modalWindow);\r\n            }\r\n\r\n            modalObj.showModal();\r\n        });\r\n    }\r\n}\r\n\r\n//-----------------------class to show/hide modal windows--------------------\r\n\r\nclass ModalObj {\r\n    constructor(target, window) {\r\n        this.target = target;\r\n        this.window = window;\r\n    }\r\n\r\n    showModal() {\r\n        this.window.classList.add('show');\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.body.classList.add('no-scroll');\r\n        this.addCloseELs();\r\n    }\r\n\r\n    addCloseELs() {\r\n        let button = document.querySelector(this.target.getAttribute('data-modal') + '_close');\r\n\r\n        button.addEventListener('click', function(event) {\r\n            event.preventDefault();\r\n            document.querySelectorAll('.modal').forEach(item => {\r\n                item.classList.remove('show');\r\n                _index__WEBPACK_IMPORTED_MODULE_0__.body.classList.remove('no-scroll');\r\n            });\r\n        });\r\n\r\n        this.window.firstElementChild.addEventListener('click', function(event) {\r\n            event.preventDefault();\r\n            event.stopPropagation();\r\n        });\r\n\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.body.addEventListener('click', function(event) {\r\n            event.preventDefault();\r\n            document.querySelectorAll('.modal').forEach(item => {\r\n                item.classList.remove('show');\r\n                _index__WEBPACK_IMPORTED_MODULE_0__.body.classList.remove('no-scroll');\r\n            });\r\n        });\r\n    }\r\n    hideModal() {\r\n        document.querySelectorAll('.modal').forEach(item => {\r\n            item.classList.remove('show');\r\n            _index__WEBPACK_IMPORTED_MODULE_0__.body.classList.remove('no-scroll');\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://gleb_portfolio/./src/showHideModalsHelpers.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;