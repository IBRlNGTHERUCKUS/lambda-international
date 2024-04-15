import {Carousel} from "./carousel.js"

const carouselEl = document.querySelector('.carousel');
console.log(carouselEl);
const carouselObj = new Carousel(carouselEl);

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