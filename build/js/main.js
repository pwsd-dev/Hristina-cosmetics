$(document).ready(function () {
    $('.slider-banner').slick({
        arrows: false,
        // dots: true,
        slidesToShow: 1,
        autoplay: false,
        infinite: true,
        speed: 2500,
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