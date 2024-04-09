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
        this.index = index;
        this.carouselEl.scrollLeft = this.slides[this.index].offsetLeft;
    }
}


/***/ }),

/***/ "./src/toggleHidden.js":
/*!*****************************!*\
  !*** ./src/toggleHidden.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleHidden: () => (/* binding */ toggleHidden)
/* harmony export */ });
function toggleHidden(DOMelement) {
    DOMelement.classList.toggle('hidden');
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
/* harmony import */ var _toggleHidden_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleHidden.js */ "./src/toggleHidden.js");


const carouselEl = document.querySelector('.carousel');
console.log(carouselEl);
const carouselObj = new _carousel_js__WEBPACK_IMPORTED_MODULE_0__.Carousel(carouselEl);

const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");
leftBtn.addEventListener('click', ()=>{carouselObj.previous()});
rightBtn.addEventListener('click', ()=>{carouselObj.next()})


// Project panel
const projectInnerEl = document.querySelector('.project-inner');
const projectPara = projectInnerEl.querySelector('p');
function handleProject() {
    if (projectPara.classList.contains('hidden')) {
        projectPara.classList.toggle('hidden');
        //Add grow and whiten animations
        projectPara.style.animation='growvertical 3s forwards'
        projectInnerEl.style.animation='towhite 3s forwards'   
    }
    else {
        // Add shrink and unwhite animation
        projectPara.style.animation='shrinkvertical 3s forwards'
        projectInnerEl.style.animation='toopaque 3s forwards'  
        // Delay hiding element until it shrinks
        setTimeout(()=>{projectPara.classList.toggle('hidden')}, 3000 )
    }
    
}
projectInnerEl.addEventListener('click', handleProject)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBOzs7Ozs7OztVQ0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ1E7QUFDOUM7QUFDQTtBQUNBLHdCQUF3QixrREFBUTs7QUFFaEM7QUFDQTtBQUNBLHVDQUF1Qyx1QkFBdUI7QUFDOUQsd0NBQXdDLG1CQUFtQjs7O0FBRzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1Q0FBdUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsdUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy90b2dnbGVIaWRkZW4uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJvdXNlbCB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0RWwpIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbEVsID0gdGFyZ2V0RWw7XG4gICAgICAgIHRoaXMuc2xpZGVzID0gdGhpcy5jYXJvdXNlbEVsLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG4gICAgbmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnNsaWRlcy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNsaWRlc1t0aGlzLmluZGV4XS5vZmZzZXRMZWZ0KTtcbiAgICAgICAgIHRoaXMuY2Fyb3VzZWxFbC5zY3JvbGxMZWZ0ID0gdGhpcy5zbGlkZXNbdGhpcy5pbmRleF0ub2Zmc2V0TGVmdDtcbiAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBUbygwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcmV2aW91cygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbmRleC0tO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zbGlkZXNbdGhpcy5pbmRleF0ub2Zmc2V0TGVmdCk7XG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsRWwuc2Nyb2xsTGVmdCA9IHRoaXMuc2xpZGVzW3RoaXMuaW5kZXhdLm9mZnNldExlZnQ7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAganVtcFRvKGluZGV4KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5jYXJvdXNlbEVsLnNjcm9sbExlZnQgPSB0aGlzLnNsaWRlc1t0aGlzLmluZGV4XS5vZmZzZXRMZWZ0O1xuICAgIH1cbn1cbmV4cG9ydCB7Q2Fyb3VzZWx9OyIsImZ1bmN0aW9uIHRvZ2dsZUhpZGRlbihET01lbGVtZW50KSB7XG4gICAgRE9NZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuZXhwb3J0IHt0b2dnbGVIaWRkZW59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtDYXJvdXNlbH0gZnJvbSBcIi4vY2Fyb3VzZWwuanNcIlxuaW1wb3J0IHt0b2dnbGVIaWRkZW59IGZyb20gXCIuL3RvZ2dsZUhpZGRlbi5qc1wiXG5jb25zdCBjYXJvdXNlbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsJyk7XG5jb25zb2xlLmxvZyhjYXJvdXNlbEVsKTtcbmNvbnN0IGNhcm91c2VsT2JqID0gbmV3IENhcm91c2VsKGNhcm91c2VsRWwpO1xuXG5jb25zdCBsZWZ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LWJ1dHRvblwiKTtcbmNvbnN0IHJpZ2h0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1idXR0b25cIik7XG5sZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntjYXJvdXNlbE9iai5wcmV2aW91cygpfSk7XG5yaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57Y2Fyb3VzZWxPYmoubmV4dCgpfSlcblxuXG4vLyBQcm9qZWN0IHBhbmVsXG5jb25zdCBwcm9qZWN0SW5uZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWlubmVyJyk7XG5jb25zdCBwcm9qZWN0UGFyYSA9IHByb2plY3RJbm5lckVsLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3QoKSB7XG4gICAgaWYgKHByb2plY3RQYXJhLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgcHJvamVjdFBhcmEuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIC8vQWRkIGdyb3cgYW5kIHdoaXRlbiBhbmltYXRpb25zXG4gICAgICAgIHByb2plY3RQYXJhLnN0eWxlLmFuaW1hdGlvbj0nZ3Jvd3ZlcnRpY2FsIDNzIGZvcndhcmRzJ1xuICAgICAgICBwcm9qZWN0SW5uZXJFbC5zdHlsZS5hbmltYXRpb249J3Rvd2hpdGUgM3MgZm9yd2FyZHMnICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBBZGQgc2hyaW5rIGFuZCB1bndoaXRlIGFuaW1hdGlvblxuICAgICAgICBwcm9qZWN0UGFyYS5zdHlsZS5hbmltYXRpb249J3Nocmlua3ZlcnRpY2FsIDNzIGZvcndhcmRzJ1xuICAgICAgICBwcm9qZWN0SW5uZXJFbC5zdHlsZS5hbmltYXRpb249J3Rvb3BhcXVlIDNzIGZvcndhcmRzJyAgXG4gICAgICAgIC8vIERlbGF5IGhpZGluZyBlbGVtZW50IHVudGlsIGl0IHNocmlua3NcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e3Byb2plY3RQYXJhLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpfSwgMzAwMCApXG4gICAgfVxuICAgIFxufVxucHJvamVjdElubmVyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==