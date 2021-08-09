
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


function openCategory() {
    const arrowBtn = document.getElementById("arrowBtn");
    // const otherId = document.getElementById("other");
    arrowBtn.classList.toggle("active");
    const innerCheckbox = document.getElementById("innerCheckbox");
    innerCheckbox.querySelector(".innerCheckbox").classList.toggle("active");
}

function openCategoryMob() {
    const arrowBtnMob = document.getElementById("arrowBtnMob");
    // const otherId = document.getElementById("other");
    arrowBtnMob.classList.toggle("active");
    const innerCheckboxMob = document.getElementById("innerCheckboxMob");
    innerCheckboxMob.querySelector(".innerCheckboxMob").classList.toggle("active");
}

function openFilter() {
    const arrowBtnFilter = document.getElementById("arrowBtnFilter");
    // const otherId = document.getElementById("other");
    arrowBtnFilter.classList.toggle("active");
    const innerFilter = document.getElementById("innerFilter");
    innerFilter.querySelector(".innerFilter").classList.toggle("active");
}

function openFilterMob() {
    const iconFilterMob = document.getElementById("iconFilterMob");
    // const otherId = document.getElementById("other");
    iconFilterMob.classList.toggle("active");
    const innerFilterMob = document.getElementById("innerFilterMob");
    innerFilterMob.querySelector(".innerFilterMob").classList.toggle("active");
}


function openCategoryBrand() {

    const arrowBtnBrandMob = document.getElementById("arrowBtnBrand");
    arrowBtnBrandMob.classList.toggle("active");
    const innerBrandMob = document.getElementById("innerBrand");
    innerBrandMob.querySelector(".innerBrand").classList.toggle("active");

}

function openCategoryBrandMob() {

    const arrowBtnBrandMob = document.getElementById("arrowBtnBrandMob");
    arrowBtnBrandMob.classList.toggle("active");
    const innerBrand = document.getElementById("innerBrandMob");
    innerBrand.querySelector(".innerBrandMob").classList.toggle("active");

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
        variableWidth: false,
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

    });

});

const selectSingle = document.querySelector('.__select');

if (selectSingle) {
    const selectSingle_title = selectSingle.querySelector('.__select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    });
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
        });
    }
}


// const selectSingle_2 = document.querySelector('.__select-2');

// if (selectSingle) {
//     const selectSingle_title_2 = selectSingle.querySelector('.__select__title-2');
//     const selectSingle_labels_10 = selectSingle.querySelectorAll('.__select__label-10');
//     selectSingle_title_2.addEventListener('click', () => {
//         if ('active' === selectSingle_2.getAttribute('data-state')) {
//             selectSingle_2.setAttribute('data-state', '');
//         } else {
//             selectSingle_2.setAttribute('data-state', 'active');
//         }
//     });
//     for (let i = 0; i < selectSingle_labels_10.length; i++) {
//         selectSingle_labels_10[i].addEventListener('click', (evt) => {
//             selectSingle_title_2.textContent = evt.target.textContent;
//             selectSingle_2.setAttribute('data-state', '');
//         });
//     }
// }


$(document).ready(function () {
    $('.sliderProductPage').slick({
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
        draggale: true,
        swipe: true,
        touchTreshold: 20,
        touchMove: false,
        prevArrow: document.querySelector('#prevArrow-6'),
        nextArrow: document.querySelector('#nextArrow-6'),
        variableWidth: false,
        // mobileFirst: true,
        asNavFor: '.sliderProductPageNav',
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

    });

});

$('.sliderProductPageNav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.sliderProductPage',
    dots: false,
    centerMode: true,
    focusOnSelect: true
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
        variableWidth: false,
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

// Убавляем кол-во по клику
$('.quantity_inner .bt_minus').click(function () {
    let $input = $(this).parent().parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
});
// Прибавляем кол-во по клику
$('.quantity_inner .bt_plus').click(function () {
    let $input = $(this).parent().parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
});
// Убираем все лишнее и невозможное при изменении поля
$('.quantity_inner .quantity').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
        this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }
});



