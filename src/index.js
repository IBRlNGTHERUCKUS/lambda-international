import {Carousel} from "./carousel.js"

const carouselEl = document.querySelector('.carousel');
const carouselObj = new Carousel(carouselEl);

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