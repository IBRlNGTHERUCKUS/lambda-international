/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Carousel)
/* harmony export */ });
class Carousel {
    constructor(targetEl) {
        this.carouselEl = targetEl;
        this.slides = this.carouselEl.children;
        this.index = 0;
    }
    next() {
        if (this.index < this.slides.length-1) {
            this.index++
            console.log(this.slides[this.index].offsetLeft);
         this.carouselEl.scrollLeft = this.slides[this.index].offsetLeft;
         

        }
        else {
            this.jumpTo(0);
        }
    }
    previous() {
        if (this.index != 0) {
            this.index--;
            console.log(this.slides[this.index].offsetLeft);
            this.carouselEl.scrollLeft = this.slides[this.index].offsetLeft;

        }
        
    }
    jumpTo(index) {
        console.log(`Jumping to ${index}`)
        if (index + 1 > this.slides.length) {
            console.log(`${index} is out of range`)
            return;
        }
        this.index = index;
        this.carouselEl.scrollLeft = this.slides[this.index].offsetLeft;
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.js */ "./src/carousel.js");


const carouselEl = document.querySelector('.carousel');
console.log(carouselEl);
const carouselObj = new _carousel_js__WEBPACK_IMPORTED_MODULE_0__.Carousel(carouselEl);

const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");
leftBtn.addEventListener('click', ()=>{carouselObj.previous()});
rightBtn.addEventListener('click', ()=>{carouselObj.next()})
// Make bar buttons jump to respective slide
const barEls = document.querySelectorAll('.bar');
for (let i=0; i < barEls.length; i++) {
    barEls[i].addEventListener('click', ()=>{carouselObj.jumpTo(i)})
}


function handleExpandable(expandableEl) {
    expandableEl.classList.toggle('expanded');
    expandableEl.classList.toggle('collapsed');
}
// Project panel
const heroBgEl = document.querySelector('.hero-bg');
const projectPara = heroBgEl.querySelector('p');
heroBgEl.addEventListener('click', ()=>{handleExpandable(projectPara)})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVE7O0FBRWhDO0FBQ0E7QUFDQSx1Q0FBdUMsdUJBQXVCO0FBQzlELHdDQUF3QyxtQkFBbUI7QUFDM0Q7QUFDQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDLDZDQUE2QyxzQkFBc0I7QUFDbkU7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDhCQUE4QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJvdXNlbCB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0RWwpIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbEVsID0gdGFyZ2V0RWw7XG4gICAgICAgIHRoaXMuc2xpZGVzID0gdGhpcy5jYXJvdXNlbEVsLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG4gICAgbmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnNsaWRlcy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNsaWRlc1t0aGlzLmluZGV4XS5vZmZzZXRMZWZ0KTtcbiAgICAgICAgIHRoaXMuY2Fyb3VzZWxFbC5zY3JvbGxMZWZ0ID0gdGhpcy5zbGlkZXNbdGhpcy5pbmRleF0ub2Zmc2V0TGVmdDtcbiAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBUbygwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcmV2aW91cygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbmRleC0tO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zbGlkZXNbdGhpcy5pbmRleF0ub2Zmc2V0TGVmdCk7XG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsRWwuc2Nyb2xsTGVmdCA9IHRoaXMuc2xpZGVzW3RoaXMuaW5kZXhdLm9mZnNldExlZnQ7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAganVtcFRvKGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBKdW1waW5nIHRvICR7aW5kZXh9YClcbiAgICAgICAgaWYgKGluZGV4ICsgMSA+IHRoaXMuc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aW5kZXh9IGlzIG91dCBvZiByYW5nZWApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmNhcm91c2VsRWwuc2Nyb2xsTGVmdCA9IHRoaXMuc2xpZGVzW3RoaXMuaW5kZXhdLm9mZnNldExlZnQ7XG4gICAgfVxufVxuZXhwb3J0IHtDYXJvdXNlbH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0Nhcm91c2VsfSBmcm9tIFwiLi9jYXJvdXNlbC5qc1wiXG5cbmNvbnN0IGNhcm91c2VsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKTtcbmNvbnNvbGUubG9nKGNhcm91c2VsRWwpO1xuY29uc3QgY2Fyb3VzZWxPYmogPSBuZXcgQ2Fyb3VzZWwoY2Fyb3VzZWxFbCk7XG5cbmNvbnN0IGxlZnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtYnV0dG9uXCIpO1xuY29uc3QgcmlnaHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LWJ1dHRvblwiKTtcbmxlZnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e2Nhcm91c2VsT2JqLnByZXZpb3VzKCl9KTtcbnJpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntjYXJvdXNlbE9iai5uZXh0KCl9KVxuLy8gTWFrZSBiYXIgYnV0dG9ucyBqdW1wIHRvIHJlc3BlY3RpdmUgc2xpZGVcbmNvbnN0IGJhckVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXInKTtcbmZvciAobGV0IGk9MDsgaSA8IGJhckVscy5sZW5ndGg7IGkrKykge1xuICAgIGJhckVsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57Y2Fyb3VzZWxPYmouanVtcFRvKGkpfSlcbn1cblxuXG5mdW5jdGlvbiBoYW5kbGVFeHBhbmRhYmxlKGV4cGFuZGFibGVFbCkge1xuICAgIGV4cGFuZGFibGVFbC5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgIGV4cGFuZGFibGVFbC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnKTtcbn1cbi8vIFByb2plY3QgcGFuZWxcbmNvbnN0IGhlcm9CZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tYmcnKTtcbmNvbnN0IHByb2plY3RQYXJhID0gaGVyb0JnRWwucXVlcnlTZWxlY3RvcigncCcpO1xuaGVyb0JnRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e2hhbmRsZUV4cGFuZGFibGUocHJvamVjdFBhcmEpfSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=