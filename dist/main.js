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


const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");
leftBtn.addEventListener('click', domControl.handleCarouselPrevious);
rightBtn.addEventListener('click', domControl.handleCarouselNext)

const barEls = document.querySelectorAll('.bar');
for (let i=0; i < barEls.length; i++) {
    barEls[i].addEventListener('click', ()=>{
        domControl.handleCarouselJump(i);
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

// Auto carousel scroll
setInterval(domControl.handleCarouselNext, 8_000)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDO0FBQ0Esd0JBQXdCLGtEQUFROztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw4QkFBOEI7O0FBRXRFO0FBQ0EsaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhcm91c2VsIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXRFbCkge1xuICAgICAgICB0aGlzLmNhcm91c2VsRWwgPSB0YXJnZXRFbDtcbiAgICAgICAgdGhpcy5zbGlkZXMgPSB0aGlzLmNhcm91c2VsRWwuY2hpbGRyZW47XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIH1cbiAgICBuZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMuc2xpZGVzLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4KytcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2xpZGVzW3RoaXMuaW5kZXhdLm9mZnNldExlZnQpO1xuICAgICAgICAgdGhpcy5jYXJvdXNlbEVsLnNjcm9sbExlZnQgPSB0aGlzLnNsaWRlc1t0aGlzLmluZGV4XS5vZmZzZXRMZWZ0O1xuICAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuanVtcFRvKDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByZXZpb3VzKCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4LS07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNsaWRlc1t0aGlzLmluZGV4XS5vZmZzZXRMZWZ0KTtcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxFbC5zY3JvbGxMZWZ0ID0gdGhpcy5zbGlkZXNbdGhpcy5pbmRleF0ub2Zmc2V0TGVmdDtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBqdW1wVG8oaW5kZXgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEp1bXBpbmcgdG8gJHtpbmRleH1gKVxuICAgICAgICBpZiAoaW5kZXggKyAxID4gdGhpcy5zbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpbmRleH0gaXMgb3V0IG9mIHJhbmdlYClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuY2Fyb3VzZWxFbC5zY3JvbGxMZWZ0ID0gdGhpcy5zbGlkZXNbdGhpcy5pbmRleF0ub2Zmc2V0TGVmdDtcbiAgICB9XG59XG5leHBvcnQge0Nhcm91c2VsfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Q2Fyb3VzZWx9IGZyb20gXCIuL2Nhcm91c2VsLmpzXCJcblxuY29uc3QgY2Fyb3VzZWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCcpO1xuY29uc3QgY2Fyb3VzZWxPYmogPSBuZXcgQ2Fyb3VzZWwoY2Fyb3VzZWxFbCk7XG5cbi8vIE1ha2UgYmFyIGJ1dHRvbnMganVtcCB0byByZXNwZWN0aXZlIHNsaWRlXG5jb25zdCBkb21Db250cm9sID0ge1xuICAgIHVwZGF0ZUJhcigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhci5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICBiYXJFbHNbY2Fyb3VzZWxPYmouaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0sXG4gICAgaGFuZGxlQ2Fyb3VzZWxOZXh0KCkge1xuICAgICAgICBjYXJvdXNlbE9iai5uZXh0KClcbiAgICAgICAgZG9tQ29udHJvbC51cGRhdGVCYXIoKTtcbiAgICB9LFxuICAgIGhhbmRsZUNhcm91c2VsUHJldmlvdXMoKSB7XG4gICAgICAgIGNhcm91c2VsT2JqLnByZXZpb3VzKClcbiAgICAgICAgZG9tQ29udHJvbC51cGRhdGVCYXIoKTtcbiAgICB9LFxuICAgIGhhbmRsZUNhcm91c2VsSnVtcChpbmRleCkge1xuICAgICAgICBjYXJvdXNlbE9iai5qdW1wVG8oaW5kZXgpO1xuICAgICAgICBkb21Db250cm9sLnVwZGF0ZUJhcigpO1xuICAgIH1cbn1cblxuXG5jb25zdCBsZWZ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LWJ1dHRvblwiKTtcbmNvbnN0IHJpZ2h0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1idXR0b25cIik7XG5sZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9tQ29udHJvbC5oYW5kbGVDYXJvdXNlbFByZXZpb3VzKTtcbnJpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9tQ29udHJvbC5oYW5kbGVDYXJvdXNlbE5leHQpXG5cbmNvbnN0IGJhckVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXInKTtcbmZvciAobGV0IGk9MDsgaSA8IGJhckVscy5sZW5ndGg7IGkrKykge1xuICAgIGJhckVsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGRvbUNvbnRyb2wuaGFuZGxlQ2Fyb3VzZWxKdW1wKGkpO1xuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gaGFuZGxlRXhwYW5kYWJsZShleHBhbmRhYmxlRWwpIHtcbiAgICBleHBhbmRhYmxlRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICBleHBhbmRhYmxlRWwuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2VkJyk7XG59XG4vLyBQcm9qZWN0IHBhbmVsXG5jb25zdCBoZXJvQmdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWJnJyk7XG5jb25zdCBwcm9qZWN0UGFyYSA9IGhlcm9CZ0VsLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbmhlcm9CZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntoYW5kbGVFeHBhbmRhYmxlKHByb2plY3RQYXJhKX0pXG5cbi8vIEF1dG8gY2Fyb3VzZWwgc2Nyb2xsXG5zZXRJbnRlcnZhbChkb21Db250cm9sLmhhbmRsZUNhcm91c2VsTmV4dCwgOF8wMDApIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9