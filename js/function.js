/*!
 *
 * Evgeniy Ivanov - 2018
 * busforward@gmail.com
 * Skype: ivanov_ea
 *
 */
var app = {
    pageScroll: '',
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    touchDevice: function() { return navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i); }
};


function isLgWidth() { return $(window).width() >= app.lgWidth; } // >= 1200
function isMdWidth() { return $(window).width() >= app.mdWidth && $(window).width() < app.lgWidth; } //  >= 992 && < 1200
function isSmWidth() { return $(window).width() >= app.smWidth && $(window).width() < app.mdWidth; } // >= 768 && < 992
function isXsWidth() { return $(window).width() < app.smWidth; } // < 768
function isIOS() { return app.iOS(); } // for iPhone iPad iPod
function isTouch() { return app.touchDevice(); } // for touch device


$(document).ready(function() {
    // Хак для клика по ссылке на iOS
    if (isIOS()) {
        $(function(){$(document).on('touchend', 'a', $.noop)});
    }

	// Запрет "отскока" страницы при клике по пустой ссылке с href="#"
	$('[href="#"]').click(function(event) {
		event.preventDefault();
	});

    // Inputmask.js
    // $('[name=tel]').inputmask("+9(999)999 99 99",{ showMaskOnHover: false });
    // formSubmit();

    checkOnResize();
    uploadYoutubeVideo();

    $('.firstScreen').slick({
        dots: false,
        infinite: false,
        arrows: true,
        nextArrow: '<button class="slick-next"></button>',
        prevArrow: '<button class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.leaders').slick({
        dots: false,
        infinite: false,
        arrows: true,
        nextArrow: $('.leaders__next'),
        prevArrow: $('.leaders__prev'),
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('.accreditation').slick({
        dots: false,
        infinite: false,
        arrows: true,
        nextArrow: $('.accreditation__next'),
        prevArrow: $('.accreditation__prev'),
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('.awards').slick({
        dots: false,
        infinite: false,
        arrows: true,
        nextArrow: $('.awards__next'),
        prevArrow: $('.awards__prev'),
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('.international').slick({
        dots: false,
        infinite: false,
        arrows: true,
        nextArrow: $('.international__next'),
        prevArrow: $('.international__prev'),
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('.parthnersSlider').slick({
        dots: false,
        infinite: false,
        arrows: true,
        nextArrow: $('.parthners__next'),
        prevArrow: $('.parthners__prev'),
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('.similarSlider .newsList ').slick({
        dots: false,
        infinite: false,
        arrows: true,
        nextArrow: $('.similar__next'),
        prevArrow: $('.similar__prev'),
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('.teachers').slick({
        speed: 000,
        dots: false,
        infinite: true,
        draggable: false,
        nextArrow: $('.teachers__next'),
        prevArrow: $('.teachers__prev'),
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    speed: 500,
                    infinite: false,
                    draggable: true,
                    centerMode: false,
                    variableWidth: false,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    infinite: false,
                    draggable: true,
                    centerMode: false,
                    variableWidth: false,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    if ($('.newsSlider')) {
        let slider = $('.newsSlider'),
            slideCount = $('.newsSlider__item').length,
            countWrap = $('.newsSlider__count');

        countWrap.html(`1/${slideCount}`);

        slider.slick({
            dots: false,
            nextArrow: $('.newsSlider__next'),
            prevArrow: $('.newsSlider__prev'),
        });

        slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            console.log(nextSlide);
            countWrap.html(`${nextSlide+1}/${slideCount}`);
        });

        $('.select').select2({
            placeholder: $(this).data('placeholder')
        });
    }

    if ($('.postSlider')) {
        $('.postSlider').slick({
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        fade: true
                    }
                }
            ]
        });
    }

    if ($('.prmoSlider')) {
        $('.prmoSlider').slick({
            dots: true,
            arrows: false,
        });
    }

    if ($('.lkRecomend')) {
        $('.lkRecomend').slick({
            dots: false,
            nextArrow: $('.lkRecomend__next'),
            prevArrow: $('.lkRecomend__prev'),
        });
    }


    $('.modal').on('show.bs.modal', function() {
        const modalsCount = $('.modal.in').length;
        console.log(modalsCount);
        if (modalsCount > 0) {
            $('.modal.in').modal('hide');
        }
    });

    $('.lkOrganization__more a').on('click', function(e) {
        e.preventDefault();
        let body = $(this).closest('.lkOrganization__item').find('.lkOrganization__list');
        body.toggleClass('open');
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).text($(this).data('show'));
        } else {
            $(this).text($(this).data('hide'));
        }
    });

});

$(window).resize(function(event) {
    var windowWidth = $(window).width();
    // Запрещаем выполнение скриптов при смене только высоты вьюпорта (фикс для скролла в IOS и Android >=v.5)
    if (app.resized == windowWidth) { return; }
    app.resized = windowWidth;

	checkOnResize();
});

function checkOnResize() {
    replaceHeaderElements();
    initMobileSlider();
    toggleMobileSort();
    initPostGallerySlider();
}

function initPostGallerySlider() {
    let slider = $('.post__gallery');

    if (isXsWidth()) {
        if (!slider.hasClass('slick-initialized')) {
            $(slider).slick({
                slidesToShow: 1,
                dots: true,
                arrows: false,
                infinite: false
            });
        }
    } else {
        if (slider.hasClass('slick-initialized')) {
            slider.slick('destroy');
        }
    }
}

function initMobileSlider() {
    let slider = $('.js_mobile_slider');

    if (isXsWidth()) {
        if (!slider.hasClass('slick-initialized')) {
            $(slider).slick({
                dots: true,
                arrows: false,
                variableWidth: true,
                infinite: false
            });
        }
    } else {
        if (slider.hasClass('slick-initialized')) {
            slider.slick('destroy');
        }
    }
}

function toggleMobileSort() {
    $('.js_sort_toggle').on('click', () => {
        let top = $(window).scrollTop(),
            wrap = $('.mobileSort'),
            hh = $('.header').outerHeight();
        console.log(top);
        if (top > 0) {
            wrap.css({
                top: '0',
                height: $(window).height()
            });
        } else {
            wrap.css({
                top: hh,
                height: $(window).height() - hh
            });
        }
        wrap.toggleClass('open');
        $('body').toggleClass('mobileSort_open');
    });
}

function toggleSwicher() {
    let input = $('.swicher input');
    if (input) {
        input.each(function(index, el) {
            checkSwicher(el);
            $(el).on('change', function() {
                checkSwicher(el);
            });
        });
    }

    function checkSwicher(el) {
        let wrap = $(el).closest('.swicher');
        if ($(el).prop('checked')) {
            // console.log('checked');
            wrap.addClass('checked');
        } else {
            // console.log('not checked');
            wrap.removeClass('checked');
        }
    }
}
toggleSwicher();

// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
function stikyMenu() {
    let HeaderTop = $('header').offset().top + $('.home').innerHeight();
    let currentTop = $(window).scrollTop();

    setNavbarPosition();

    $(window).scroll(function(){
        setNavbarPosition();
    });

    function setNavbarPosition() {
        currentTop = $(window).scrollTop();

        if( currentTop > HeaderTop ) {
            $('header').addClass('stiky');
        } else {
            $('header').removeClass('stiky');
        }

        $('.navbar__link').each(function(index, el) {
            let section = $(this).attr('href');

            if ($('section').is(section)) {
                let offset = $(section).offset().top;

                if (offset <= currentTop && offset + $(section).innerHeight() > currentTop) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            }
        });
    }
}

function openMobileNav() {
    const wrapp = $('.nav');

    $('.navbar__toggle').on('click', function() {
        wrapp.toggleClass('open');
        toggleBackdrop();
    });

    $('body').on('click', '.nav__backdrop', function() {
        wrapp.toggleClass('open');
        toggleBackdrop();
    });

    function toggleBackdrop() {
        if (wrapp.hasClass('open')) {
            $('body').append('<div class="nav__backdrop" />').addClass('nav_open');
        } else {
            $('.nav__backdrop').remove();
            $('body').removeClass('nav_open');
        }
    }
}
openMobileNav();

function replaceHeaderElements() {
    const nav = $('.nav'),
          navHeader = $('.nav__header'),
          navFooter = $('.nav__footer'),
          headerRight = $('.header__right'),
          headerInfo = $('.header__info');

    if (isXsWidth() || isSmWidth() || isMdWidth()) {
        headerInfo.appendTo(navHeader);
        $('.user__auth').appendTo('.nav__body');
    } else {
        headerInfo.appendTo(headerRight);
        $('.user__auth').appendTo('.user__info');
    }
}


// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
function srollToId() {
    $('[data-scroll-to]').click( function(){
        $('[data-scroll-to]').removeClass('active');
        $(this).addClass('active');
        var scrollEl = $(this).attr('href');
        if ($(scrollEl).length != 0) {
            $('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 500);
        }
        return false;
    });
}
srollToId();

// Проверка направления прокрутки вверх/вниз
function checkDirectionScroll() {
    var tempScrollTop, currentScrollTop = 0;

    $(window).scroll(function(){
        currentScrollTop = $(window).scrollTop();

        if (tempScrollTop < currentScrollTop ) {
            app.pageScroll = "down";
        } else if (tempScrollTop > currentScrollTop ) {
            app.pageScroll = "up";
        }
        tempScrollTop = currentScrollTop;

    });
}
checkDirectionScroll();


// Видео youtube для страницы
function uploadYoutubeVideo() {
    if ($(".js-youtube")) {

        $(".js-youtube").each(function () {
            // Зная идентификатор видео на YouTube, легко можно найти его миниатюру
            $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

            // Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
            $(this).append($('<img src="img/play.svg" alt="Play" class="video__play">'));

        });

        $('.video__play, .video__prev').on('click', function () {
            // создаем iframe со включенной опцией autoplay
            let wrapp = $(this).closest('.js-youtube'),
                videoId = wrapp.attr('id'),
                iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

            if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

            // Высота и ширина iframe должны быть такими же, как и у родительского блока
            let iframe = $('<iframe/>', {
                'frameborder': '0',
                'src': iframe_url,
                'allow': "autoplay"
            })

            // Заменяем миниатюру HTML5 плеером с YouTube
            $(this).closest('.video__wrapper').append(iframe);

        });
    }
};

function collapseToggle() {
    $('[data-collapse-toggle]').on('click', function() {
        $(this).closest('[data-collapse-body]').toggleClass('open');
    });
}

collapseToggle();

function toogleMoreText() {
    $('[data-more-toggle]').on('click', function() {
        const textBox = $(this).parent().find('[data-more-text]');
        textBox.toggleClass('open');
        $(this).toggleClass('active');
        if (textBox.hasClass('open')) {
            $(this).text($(this).data('hide'));
        } else {
            $(this).text($(this).data('show'));
        }
    });
}

toogleMoreText();

function showCourseDescription() {
    $('.courseItem__count i').on('click', () => {
        $('.courseItem').addClass('show');
    });
}

showCourseDescription();


function setInputNumber() {
    let input = document.querySelectorAll('.count input');

    input.forEach(item => {
        setValue(item);
    });

    function setValue(el) {
        let wrap = el.closest('.count'),
            plus = wrap.querySelector('.plus'),
            minus = wrap.querySelector('.minus');

        plus.addEventListener('click', () => {
            el.stepUp();
        });
        minus.addEventListener('click', () => {
            el.stepDown();
        });
    }
}
setInputNumber();


// Деление чисел на разряды Например из строки 10000 получаем 10 000
// Использование: thousandSeparator(1000) или используем переменную.
// function thousandSeparator(str) {
//     var parts = (str + '').split('.'),
//         main = parts[0],
//         len = main.length,
//         output = '',
//         i = len - 1;

//     while(i >= 0) {
//         output = main.charAt(i) + output;
//         if ((len - i) % 3 === 0 && i > 0) {
//             output = ' ' + output;
//         }
//         --i;
//     }

//     if (parts.length > 1) {
//         output += '.' + parts[1];
//     }
//     return output;
// };


// Хак для яндекс карт втавленных через iframe
// Страуктура:
//<div class="map__wrap" id="map-wrap">
//  <iframe style="pointer-events: none;" src="https://yandex.ru/map-widget/v1/-/CBqXzGXSOB" width="1083" height="707" frameborder="0" allowfullscreen="true"></iframe>
//</div>
// Обязательное свойство в style которое и переключет скрипт
// document.addEventListener('click', function(e) {
//     var map = document.querySelector('#map-wrap iframe')
//     if(e.target.id === 'map-wrap') {
//         map.style.pointerEvents = 'all'
//     } else {
//         map.style.pointerEvents = 'none'
//     }
// })

// Простая проверка форм на заполненность и отправка аяксом
// function formSubmit() {
//     $("[type=submit]").on('click', function (e){
//         e.preventDefault();
//         var form = $(this).closest('.form');
//         var url = form.attr('action');
//         var form_data = form.serialize();
//         var field = form.find('[required]');
//         // console.log(form_data);

//         empty = 0;

//         field.each(function() {
//             if ($(this).val() == "") {
//                 $(this).addClass('invalid');
//                 // return false;
//                 empty++;
//             } else {
//                 $(this).removeClass('invalid');
//                 $(this).addClass('valid');
//             }
//         });

//         // console.log(empty);

//         if (empty > 0) {
//             return false;
//         } else {
//             $.ajax({
//                 url: url,
//                 type: "POST",
//                 dataType: "html",
//                 data: form_data,
//                 success: function (response) {
//                     // $('#success').modal('show');
//                     // console.log('success');
//                     console.log(response);
//                     // console.log(data);
//                     // document.location.href = "success.html";
//                 },
//                 error: function (response) {
//                     // $('#success').modal('show');
//                     // console.log('error');
//                     console.log(response);
//                 }
//             });
//         }

//     });

//     $('[required]').on('blur', function() {
//         if ($(this).val() != '') {
//             $(this).removeClass('invalid');
//         }
//     });

//     $('.form__privacy input').on('change', function(event) {
//         event.preventDefault();
//         var btn = $(this).closest('.form').find('.btn');
//         if ($(this).prop('checked')) {
//             btn.removeAttr('disabled');
//             // console.log('checked');
//         } else {
//             btn.attr('disabled', true);
//         }
//     });
// }


// Проверка на возможность ввода только русских букв, цифр, тире и пробелов
// $('#u_l_name').on('keypress keyup', function () {
//     var that = this;
//
//     setTimeout(function () {
//         if (that.value.match(/[ -]/) && that.value.length == 1) {
//             that.value = '';
//         }
//
//         if (that.value.match(/-+/g)) {
//             that.value = that.value.replace(/-+/g, '-');
//         }
//
//         if (that.value.match(/ +/g)) {
//             that.value = that.value.replace(/ +/g, ' ');
//         }
//
//         var res = /[^а-яА-Я -]/g.exec(that.value);
//
//         if (res) {
//             removeErrorMsg('#u_l_name');
//             $('#u_l_name').after('<div class="j-required-error b-check__errors">Измените язык ввода на русский</div>');
//         }
//         else {
//             removeErrorMsg('#u_l_name');
//         }
//
//         that.value = that.value.replace(res, '');
//     }, 0);
// });
