import {filterWorks} from './portfolioFilterHelpers.js';

import {ModalObj, setMultipleEvLi} from './showHideModalsHelpers';

//---------------------------------------------JS-----------------------------------------

//----------Portfolio filter----------------

let worksNav = document.querySelector('.works_nav');

worksNav.addEventListener('click', function (event) {
    event.preventDefault();
    let target = event.target;
    if (target.tagName !== 'A') {
        return;
    }
    filterWorks(target.getAttribute('data-filter'));
});

//-------------buttons to show modals---------------------------

let allAButtons = Array.from(document.querySelectorAll('a[data-modal]'));
let allDivButtons = Array.from(document.querySelectorAll('div[data-modal]'));
export let body = document.querySelector('BODY');

setMultipleEvLi(allAButtons, 'target');
setMultipleEvLi(allDivButtons, 'currentTarget');

//-------------------toggle nav menu------------------------------

let navToggle = document.querySelector('#navToggle');
let nav = document.querySelector('#nav');

navToggle.onclick = function (event) {
    event.preventDefault();
    nav.classList.toggle('show');

    if (nav.classList.contains('show')) {
        body.addEventListener('click', function dgd(event) {
            event.preventDefault();

        });
    }
};






//----------------------------------------jQuery-----------------------------------


$(function () {

    // Portfolio Filter---------------------------------------

    /* let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }

    }); */

    // Modal windows--------------------------------------------

    /* let modalCall = $("[data-modal]");
    let modalClose = $("[data-close]");

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');

        $("body").addClass('no-scroll');


    });

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');

        $("body").removeClass('no-scroll');


    });

    // Modal hide on click--------------------------------------------


    $(".modal").on("click", function (event) {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    }); */

    // Mobile nav---------------------------------

    /*  let navToggle = $("#navToggle");
     let nav = $("#nav");

     navToggle.on("click", function (event) {
         event.preventDefault();

         nav.toggleClass("show");
     }); */


    // Scroll from nav to heading---------------------------------


    $('#nav ul li a').click(function (event) {
        event.preventDefault();
        var $anchor = $("#content section." + this.className.split(" ")[0]).offset();
        $('html, body').animate({
            scrollTop: ($anchor.top)
        }, 1000);
        return false;
    });

    $('.footer__nav a').click(function (event) {
        event.preventDefault();
        var $anchor = $("#content section." + this.className.split(" ")[0]).offset();
        $('html, body').animate({
            scrollTop: ($anchor.top)
        }, 1000);
        return false;
    });

    // arrow button go to top---------------------------------

    // при нажатии на кнопку scrollup
    $('.arrow-gototop').click(function () {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
// стрелка вверх при прокрутке окна (window)
$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.arrow-gototop').fadeIn();
    } else {
        $('.arrow-gototop').fadeOut();
    }
    //Scrollup button position
    var layoutWidth = $('.layout').outerWidth();
    var screenWidth = $('html, body').outerWidth();
    var marginWidth = screenWidth - layoutWidth;
    var halfMarginWidth = marginWidth / 2;
    $('.arrow-gototop').css('right', halfMarginWidth);



});


//-------------------------------------------To delete-----------------------


/* let body = document.querySelector('BODY');

body.addEventListener('click', function (event) {
    event.preventDefault();

    let modalWindow = document.querySelector(event.target.getAttribute('data-modal'));

    if (event.target.hasAttribute('data-modal')) {
        modalWindow.children[0].addEventListener('click', function(event) {
            event.preventDefault();
            let sss = document.querySelector('a.button');
            if (event.target !== sss) {
                event.stopPropagation();
            }
            
            
        });

        return modalWindow.classList.add('show');
    }
    
    closeAllModal();


});


function closeAllModal() {
    let modalWindows = document.querySelectorAll('.modal');

    for (let window of modalWindows) {
        window.classList.remove('show');
    }
} */









/* let allbuttons = Array.from(document.querySelectorAll('a[data-modal]'));
console.log(allbuttons);




if (allbuttons.includes(event.target)) {        
    let modal = document.querySelector(event.target.getAttribute('data-modal'));
    
    return modal.classList.add(show);

} */