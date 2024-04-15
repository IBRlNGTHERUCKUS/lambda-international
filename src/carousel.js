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
export {Carousel};