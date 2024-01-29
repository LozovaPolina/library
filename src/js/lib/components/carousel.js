
import $ from "../core";

$.prototype.carousel = function (
    { autoplay = true, slidesItem, slidesFieldItem, dotsItem, prevBtn, nextBtn, innerItem } = {
        autoplay: true,
        slidesItem: '.carousel-item',
        slidesFieldItem: '.carousel-slides',
        dotsItem: '.carousel-indicators li',
        prevBtn: '[data-slide="prev"]',
        nextBtn: '[data-slide="next"]',
        innerItem: '.carousel-inner'
    }) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector(innerItem)).width,
            slides = this[i].querySelectorAll(slidesItem),
            slidesField = this[i].querySelector(slidesFieldItem),
            dots = this[i].querySelectorAll(dotsItem),
            prev = this[i].querySelector(prevBtn),
            next = this[i].querySelector(nextBtn),
            inner = this[i].querySelector(innerItem);

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;
        $(next).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
        $(prev).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click((e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = +slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;
            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        let autoplayId;
        const autoplaySlides = () => {
            let intervalId = () => {
                next.click()
            }
            autoplayId = setInterval(intervalId, 4000);
        }

        const innerListiner = (triggerSelector, typeEvent, stateInterval) => {
            $(triggerSelector).on(typeEvent, (e) => {
                if (stateInterval) {
                    autoplaySlides();
                } else {
                    clearInterval(autoplayId);
                }
            });
        }

        if (autoplay) {
            autoplaySlides();
            innerListiner(inner, 'mouseleave', true);
            innerListiner(inner, 'mouseenter', false);
        }
    }
};
$('.carousel').carousel();


$.prototype.createCarousel = function ({ size, slides } = {}) {

    // {size {width:integer, height: integer}, slides = { count: num, settings[[src, alt]], btnPrevNext = true, sliderAttr = ''} }

    for (let i = 0; i < this.length; i++) {
        let slider = document.createElement('div');
        slider.style.width = size.width + 'px';

        slider.classList.add('carousel');
        slider.setAttribute('id', slides.sliderAttr);


        if (slides.btnPrevNext == true) {
            slider.innerHTML = ` 
                <ol class="carousel-indicators"></ol>
                <div class="carousel-inner">
                    <div class="carousel-slides"></div>
                </div>
                <a href="#" class="carousel-prev" data-slide="prev">
                    <span class="carousel-prev-icon">&lt;</span>
                </a>
                <a href="#" class="carousel-next" data-slide="next">
                    <span class="carousel-next-icon">&gt;</span>
                </a>
            `
        } else {
            slider.innerHTML = ` 
                <ol class="carousel-indicators"></ol>
                <div class="carousel-inner">
                    <div class="carousel-slides"></div>
                </div>
            `
        }


        for (let j = 0; j < slides.count; j++) {
            let [src, alt] = slides.settings[j];
            const dots = document.createElement('li'),
                slideItems = document.createElement('div'),
                img = document.createElement('img');


            slideItems.classList.add("carousel-item");

            img.setAttribute("src", src);
            img.setAttribute("alt", alt);
            dots.setAttribute("data-slide-to", j);

            slider.querySelector('.carousel-inner').style.height = size.height + 'px'

            slider.querySelector('.carousel-indicators').append(dots);
            slider.querySelector('.carousel-slides').append(slideItems);
            slider.querySelectorAll('.carousel-item').forEach(item => {
                if ($(item).index() == j) {
                    item.append(img);
                }
            });

            this[i].append(slider);
        }

    }

    $(`#${slides.sliderAttr}`).carousel();

}
$('.container').createCarousel({
    size: { width: 600, height: 400 },
    slides: {
        count: 3,
        settings: [
            ["https://variety.com/wp-content/uploads/2018/09/witcher-card-game-e1537278354978.jpg?w=1024", "photo"],
            ["https://images.pushsquare.com/a107d13f1b6a1/the-witcher-3-yennefer-romance.large.jpg", "photo"],
            ["https://cdn.mos.cms.futurecdn.net/wqRQ8hJmvwLVycDJham9qF.jpg", "photo"],
        ],
        btnPrevNext: true,
        sliderAttr: 'exampleSlide2'
    },

})