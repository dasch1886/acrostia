class Slider {
    constructor() {
        this.currentSlide = 0;
        this.arrowRight = document.querySelector('.arrow--right');
        this.arrowLeft = document.querySelector('.arrow--left');
        this.slides = document.querySelectorAll('.slider__container');
        this.dots = document.querySelectorAll('.slider__dot');
    }

    changeSlideByDot(cssDot, cssDotActive, cssSlideActive) {
        document.querySelector('.main__footer--slider').addEventListener('click', (e) => {
            let previous = this.currentSlide;
            if (e.target.className === cssDot) {
                this.dots.forEach(e => {
                    if (e.className !== cssDot) {
                        e.classList.remove(cssDotActive);
                    }
                });
                e.target.classList.add(cssDotActive);
                this.dots.forEach((e, i) => {
                    if (e.className === cssDot + ' ' + cssDotActive) {
                        this.currentSlide = i;
                    }
                });
                this.slides[previous].classList.remove(cssSlideActive);
                this.slides[this.currentSlide].classList.add(cssSlideActive);
            }
        })
    }

    activateDot(previousSlide, currentSlide, cssDotActive) {
        this.dots[previousSlide].classList.remove(cssDotActive);
        this.dots[currentSlide].classList.add(cssDotActive);
    }

    next(cssSlideActive, cssDotActive) {
        this.arrowRight.addEventListener('click', () => {
            this.slides[this.currentSlide].classList.remove(cssSlideActive);
            let previous = this.currentSlide;
            if (this.currentSlide + 1 > this.slides.length - 1) {
                this.currentSlide = 0;
            } else {
                this.currentSlide += 1;
            }
            this.slides[this.currentSlide].classList.add(cssSlideActive);
            this.activateDot(previous, this.currentSlide, cssDotActive);
        });
    }

    previous(cssSlideActive, cssDotActive) {
        this.arrowLeft.addEventListener('click', () => {
            this.slides[this.currentSlide].classList.remove(cssSlideActive);
            let previous = this.currentSlide;
            if (this.currentSlide - 1 < 0) {
                this.currentSlide = this.slides.length - 1;
            } else {
                this.currentSlide -= 1;
            }
            this.slides[this.currentSlide].classList.add(cssSlideActive);
            this.activateDot(previous, this.currentSlide, cssDotActive);
        })
    }
}

const home = new Slider();
home.next('slide--active', 'dot--active');
home.previous('slide--active', 'dot--active');
home.changeSlideByDot('slider__dot', 'dot--active', 'slide--active');