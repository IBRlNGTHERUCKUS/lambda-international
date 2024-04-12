import {Carousel} from "./carousel.js"
import {toggleHidden} from "./toggleHidden.js"
const carouselEl = document.querySelector('.carousel');
console.log(carouselEl);
const carouselObj = new Carousel(carouselEl);

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
    }
    else {
        // Add shrink and unwhite animation
        projectPara.style.animation='shrinkvertical 3s forwards'
 
        // Delay hiding element until it shrinks
        setTimeout(()=>{projectPara.classList.toggle('hidden')}, 3000 )
    }
    
}
projectInnerEl.addEventListener('click', handleProject)