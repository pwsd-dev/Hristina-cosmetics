AOS.init();

function openBlock() {
    const burgerBtn = document.getElementById("burgerBtn");
    const otherId = document.getElementById("other");
    burgerBtn.classList.toggle("active");

    otherId.querySelector('.inner').classList.toggle('active');
    // otherId.classList.toggle("hidden");
    // otherId.querySelector('.inner').classList.toggle('active');
    // const basketBtn = document.getElementById("basketBtn")
    // basketBtn.classList.toggle("active");
}


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


// $(document).ready(function () {
//     $('.slider-inner').slick({
//         arrows: true,
//         dots: false,
//         slidesToShow: 1,
//         autoplay: false,
//         infinite: true,
//         speed: 1800,
//         adaptiveHeight: false,
//         pauseOnFocus: true,
//         pauseOnHover: true,
//         pauseOnDotsHover: true,
//         easing: 'ease',
//         draggale: true,
//         swipe: true,
//         touchTreshold: 20,
//         touchMove: false,
//         prevArrow: document.querySelector('#prevArrow-5'),
//         nextArrow: document.querySelector('#nextArrow-5')

//     });

// });



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

$(document).ready(function () {
    $('.feedback-slider').slick({
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
        prevArrow: document.querySelector('#prevArrow-4'),
        nextArrow: document.querySelector('#nextArrow-4')

    });

});

$(document).ready(function () {
    $('.instagram-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
        autoplay: false,
        infinite: true,
        speed: 1600,
        centerMode: true,
        adaptiveHeight: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        easing: 'ease',
        draggale: true,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow-5'),
        nextArrow: document.querySelector('#nextArrow-5')

    });

});


