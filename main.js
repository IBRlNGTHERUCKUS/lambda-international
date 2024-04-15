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
    barEls[i].addEventListener('click', ()=>{
        carouselObj.jumpTo(i);
        document.querySelector('.bar.active').classList.remove('active')
        barEls[i].classList.add('active');
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVE7O0FBRWhDO0FBQ0E7QUFDQSx1Q0FBdUMsdUJBQXVCO0FBQzlELHdDQUF3QyxtQkFBbUI7QUFDM0Q7QUFDQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw4QkFBOEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2Fyb3VzZWwge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldEVsKSB7XG4gICAgICAgIHRoaXMuY2Fyb3VzZWxFbCA9IHRhcmdldEVsO1xuICAgICAgICB0aGlzLnNsaWRlcyA9IHRoaXMuY2Fyb3VzZWxFbC5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5zbGlkZXMubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrK1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zbGlkZXNbdGhpcy5pbmRleF0ub2Zmc2V0TGVmdCk7XG4gICAgICAgICB0aGlzLmNhcm91c2VsRWwuc2Nyb2xsTGVmdCA9IHRoaXMuc2xpZGVzW3RoaXMuaW5kZXhdLm9mZnNldExlZnQ7XG4gICAgICAgICBcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5qdW1wVG8oMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJldmlvdXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4ICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgtLTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2xpZGVzW3RoaXMuaW5kZXhdLm9mZnNldExlZnQpO1xuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbEVsLnNjcm9sbExlZnQgPSB0aGlzLnNsaWRlc1t0aGlzLmluZGV4XS5vZmZzZXRMZWZ0O1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGp1bXBUbyhpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgSnVtcGluZyB0byAke2luZGV4fWApXG4gICAgICAgIGlmIChpbmRleCArIDEgPiB0aGlzLnNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2luZGV4fSBpcyBvdXQgb2YgcmFuZ2VgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5jYXJvdXNlbEVsLnNjcm9sbExlZnQgPSB0aGlzLnNsaWRlc1t0aGlzLmluZGV4XS5vZmZzZXRMZWZ0O1xuICAgIH1cbn1cbmV4cG9ydCB7Q2Fyb3VzZWx9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtDYXJvdXNlbH0gZnJvbSBcIi4vY2Fyb3VzZWwuanNcIlxuXG5jb25zdCBjYXJvdXNlbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsJyk7XG5jb25zb2xlLmxvZyhjYXJvdXNlbEVsKTtcbmNvbnN0IGNhcm91c2VsT2JqID0gbmV3IENhcm91c2VsKGNhcm91c2VsRWwpO1xuXG5jb25zdCBsZWZ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LWJ1dHRvblwiKTtcbmNvbnN0IHJpZ2h0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1idXR0b25cIik7XG5sZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntjYXJvdXNlbE9iai5wcmV2aW91cygpfSk7XG5yaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57Y2Fyb3VzZWxPYmoubmV4dCgpfSlcbi8vIE1ha2UgYmFyIGJ1dHRvbnMganVtcCB0byByZXNwZWN0aXZlIHNsaWRlXG5jb25zdCBiYXJFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFyJyk7XG5mb3IgKGxldCBpPTA7IGkgPCBiYXJFbHMubGVuZ3RoOyBpKyspIHtcbiAgICBiYXJFbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBjYXJvdXNlbE9iai5qdW1wVG8oaSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXIuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgYmFyRWxzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gaGFuZGxlRXhwYW5kYWJsZShleHBhbmRhYmxlRWwpIHtcbiAgICBleHBhbmRhYmxlRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICBleHBhbmRhYmxlRWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2VkJyk7XG59XG4vLyBQcm9qZWN0IHBhbmVsXG5jb25zdCBoZXJvQmdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWJnJyk7XG5jb25zdCBwcm9qZWN0UGFyYSA9IGhlcm9CZ0VsLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbmhlcm9CZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntoYW5kbGVFeHBhbmRhYmxlKHByb2plY3RQYXJhKX0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9