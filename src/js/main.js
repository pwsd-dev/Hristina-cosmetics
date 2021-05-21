$(document).ready(function () {
    $('.slider-banner').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        autoplay: false,
        infinite: true,
        speed: 1800,
        adaptiveHeight: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        easing: 'ease',
        draggale: true,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow'),
        nextArrow: document.querySelector('#nextArrow')

    });

});

$(document).ready(function () {
    $('.leaders-item-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 5,
        autoplay: false,
        infinite: true,
        speed: 1800,
        adaptiveHeight: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        easing: 'ease',
        draggale: true,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow-2'),
        nextArrow: document.querySelector('#nextArrow-2')

    });

});

$(document).ready(function () {
    $('.products-item-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 5,
        autoplay: false,
        infinite: true,
        speed: 1800,
        adaptiveHeight: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        easing: 'ease',
        draggale: true,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow-3'),
        nextArrow: document.querySelector('#nextArrow-3')

    });

});