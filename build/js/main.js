
AOS.init();

function openBlock() {
    const burgerBtn = document.getElementById("burgerBtn");
    const otherId = document.getElementById("other");
    burgerBtn.classList.toggle("active");

    otherId.querySelector('.inner').classList.toggle('active');


    const burgerMob = document.getElementById("burgerMob");
    const innerMob = document.getElementById("innerMobile");
    innerMob.querySelector(".innerMob").classList.toggle("active");
    burgerMob.classList.toggle("active");

}

function openSearch() {
    const searchInput = document.getElementById("searchInput")
    searchInput.classList.toggle("active");

}

$(document).ready(function () {
    $('.slider-banner').slick({
        arrows: true,

        slidesToShow: 1,
        autoplay: false,
        infinite: true,
        speed: 1800,
        adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        easing: 'ease',
        draggale: true,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow'),
        nextArrow: document.querySelector('#nextArrow'),

        dots: false,
        fade: true,

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
        adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        easing: 'ease',
        draggale: true,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow-2'),
        nextArrow: document.querySelector('#nextArrow-2'),
        variableWidth: true,
        // mobileFirst: true,
        responsive: [
            {
                breakpoint: 385,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    // centerMode: true,
                    // touchMove: true,
                }
            }
        ],

    });

});

$(document).ready(function () {
    $('.products-item-slider').slick({
        // mobileFirst: true,

        responsive: [
            {
                breakpoint: 405,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    // centerMode: true,
                    // touchMove: true,
                }
            }
        ],
        variableWidth: true,
        arrows: true,
        dots: false,
        slidesToShow: 5,
        autoplay: false,
        infinite: true,
        speed: 1800,
        adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        easing: 'ease',
        draggable: false,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow-3'),
        nextArrow: document.querySelector('#nextArrow-3'),

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
        adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        easing: 'ease',
        draggable: false,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow-4'),
        nextArrow: document.querySelector('#nextArrow-4'),
        variableWidth: true,
        // mobileFirst: true,
        responsive: [
            {
                breakpoint: 385,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    // centerMode: true,
                    // touchMove: true,
                }
            }
        ],

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
        // draggable: true,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow-5'),
        nextArrow: document.querySelector('#nextArrow-5'),
        variableWidth: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 385,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    touchMove: true,
                }
            }
        ],

    });

});


