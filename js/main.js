$(function() {

    // Portfolio Filter---------------------------------------

    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function(){
                let workCat = $(this).data('cat');
    
                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }        

    });

    // Modal windows--------------------------------------------

    let modalCall = $("[data-modal]");
    let modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');

        $("body").addClass('no-scroll');


    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');

        $("body").removeClass('no-scroll');


    });

    // Modal hide on click--------------------------------------------


    $(".modal").on("click", function(event) {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

    // Mobile nav---------------------------------

    let navToggle = $("#navToggle");
    let nav = $("#nav");

    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });


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
        $('.arrow-gototop').click(function() {
            // переместиться в верхнюю часть страницы
            $("html, body").animate({
            scrollTop:0
            },1000);
        })
        })
        // стрелка вверх при прокрутке окна (window)
        $(window).scroll(function() {
        if ($(this).scrollTop()>600) {
            $('.arrow-gototop').fadeIn();
        }
        else {
            $('.arrow-gototop').fadeOut();
        }
            //Scrollup button position
            var layoutWidth = $('.layout').outerWidth();
            var screenWidth = $('html, body').outerWidth();
            var marginWidth = screenWidth - layoutWidth;
            var halfMarginWidth = marginWidth / 2;
            $('.arrow-gototop').css('right', halfMarginWidth);



});