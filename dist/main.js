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
const carouselObj = new _carousel_js__WEBPACK_IMPORTED_MODULE_0__.Carousel(carouselEl);

// Make bar buttons jump to respective slide
const domControl = {
    updateBar() {
        document.querySelector('.bar.active').classList.remove('active')
        barEls[carouselObj.index].classList.add('active');
    },
    handleCarouselNext() {
        carouselObj.next()
        domControl.updateBar();
    },
    handleCarouselPrevious() {
        carouselObj.previous()
        domControl.updateBar();
    },
    handleCarouselJump(index) {
        carouselObj.jumpTo(index);
        domControl.updateBar();
    }
}
//// Auto carousel scroll
const intervalId = setInterval(domControl.handleCarouselNext, 8_000);


const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");
leftBtn.addEventListener('click', ()=>{
        domControl.handleCarouselPrevious();
        clearInterval(intervalId);
    }
);
rightBtn.addEventListener('click', ()=>{
        domControl.handleCarouselNext();
        clearInterval(intervalId);
    }
)

const barEls = document.querySelectorAll('.bar');
for (let i=0; i < barEls.length; i++) {
    barEls[i].addEventListener('click', ()=>{
        domControl.handleCarouselJump(i);
        clearInterval(intervalId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDO0FBQ0Esd0JBQXdCLGtEQUFROztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsOEJBQThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJvdXNlbCB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0RWwpIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbEVsID0gdGFyZ2V0RWw7XG4gICAgICAgIHRoaXMuc2xpZGVzID0gdGhpcy5jYXJvdXNlbEVsLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG4gICAgbmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnNsaWRlcy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNsaWRlc1t0aGlzLmluZGV4XS5vZmZzZXRMZWZ0KTtcbiAgICAgICAgIHRoaXMuY2Fyb3VzZWxFbC5zY3JvbGxMZWZ0ID0gdGhpcy5zbGlkZXNbdGhpcy5pbmRleF0ub2Zmc2V0TGVmdDtcbiAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBUbygwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcmV2aW91cygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbmRleC0tO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zbGlkZXNbdGhpcy5pbmRleF0ub2Zmc2V0TGVmdCk7XG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsRWwuc2Nyb2xsTGVmdCA9IHRoaXMuc2xpZGVzW3RoaXMuaW5kZXhdLm9mZnNldExlZnQ7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAganVtcFRvKGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBKdW1waW5nIHRvICR7aW5kZXh9YClcbiAgICAgICAgaWYgKGluZGV4ICsgMSA+IHRoaXMuc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aW5kZXh9IGlzIG91dCBvZiByYW5nZWApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmNhcm91c2VsRWwuc2Nyb2xsTGVmdCA9IHRoaXMuc2xpZGVzW3RoaXMuaW5kZXhdLm9mZnNldExlZnQ7XG4gICAgfVxufVxuZXhwb3J0IHtDYXJvdXNlbH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0Nhcm91c2VsfSBmcm9tIFwiLi9jYXJvdXNlbC5qc1wiXG5cbmNvbnN0IGNhcm91c2VsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKTtcbmNvbnN0IGNhcm91c2VsT2JqID0gbmV3IENhcm91c2VsKGNhcm91c2VsRWwpO1xuXG4vLyBNYWtlIGJhciBidXR0b25zIGp1bXAgdG8gcmVzcGVjdGl2ZSBzbGlkZVxuY29uc3QgZG9tQ29udHJvbCA9IHtcbiAgICB1cGRhdGVCYXIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXIuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgYmFyRWxzW2Nhcm91c2VsT2JqLmluZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9LFxuICAgIGhhbmRsZUNhcm91c2VsTmV4dCgpIHtcbiAgICAgICAgY2Fyb3VzZWxPYmoubmV4dCgpXG4gICAgICAgIGRvbUNvbnRyb2wudXBkYXRlQmFyKCk7XG4gICAgfSxcbiAgICBoYW5kbGVDYXJvdXNlbFByZXZpb3VzKCkge1xuICAgICAgICBjYXJvdXNlbE9iai5wcmV2aW91cygpXG4gICAgICAgIGRvbUNvbnRyb2wudXBkYXRlQmFyKCk7XG4gICAgfSxcbiAgICBoYW5kbGVDYXJvdXNlbEp1bXAoaW5kZXgpIHtcbiAgICAgICAgY2Fyb3VzZWxPYmouanVtcFRvKGluZGV4KTtcbiAgICAgICAgZG9tQ29udHJvbC51cGRhdGVCYXIoKTtcbiAgICB9XG59XG4vLy8vIEF1dG8gY2Fyb3VzZWwgc2Nyb2xsXG5jb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZG9tQ29udHJvbC5oYW5kbGVDYXJvdXNlbE5leHQsIDhfMDAwKTtcblxuXG5jb25zdCBsZWZ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LWJ1dHRvblwiKTtcbmNvbnN0IHJpZ2h0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1idXR0b25cIik7XG5sZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgZG9tQ29udHJvbC5oYW5kbGVDYXJvdXNlbFByZXZpb3VzKCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgfVxuKTtcbnJpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgZG9tQ29udHJvbC5oYW5kbGVDYXJvdXNlbE5leHQoKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICB9XG4pXG5cbmNvbnN0IGJhckVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXInKTtcbmZvciAobGV0IGk9MDsgaSA8IGJhckVscy5sZW5ndGg7IGkrKykge1xuICAgIGJhckVsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGRvbUNvbnRyb2wuaGFuZGxlQ2Fyb3VzZWxKdW1wKGkpO1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gaGFuZGxlRXhwYW5kYWJsZShleHBhbmRhYmxlRWwpIHtcbiAgICBleHBhbmRhYmxlRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICBleHBhbmRhYmxlRWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2VkJyk7XG59XG4vLyBQcm9qZWN0IHBhbmVsXG5jb25zdCBoZXJvQmdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWJnJyk7XG5jb25zdCBwcm9qZWN0UGFyYSA9IGhlcm9CZ0VsLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbmhlcm9CZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntoYW5kbGVFeHBhbmRhYmxlKHByb2plY3RQYXJhKX0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=