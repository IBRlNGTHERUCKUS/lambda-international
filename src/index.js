import {Carousel} from "./carousel.js"
const carouselEl = document.querySelector('.carousel');
console.log(carouselEl);
const carouselObj = new Carousel(carouselEl);

const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");
leftBtn.addEventListener('click', ()=>{carouselObj.previous()});
rightBtn.addEventListener('click', ()=>{carouselObj.next()})
