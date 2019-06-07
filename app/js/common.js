$(document).ready(function () {

    //прелоадер
    $(window).on('load', function () {
        $(".sk-double-bounce").delay(500).fadeOut("slow");
    });

    //hover gallery
    $(".box-img", this).on("mousemove", function () {
        $(".view", this).css("opacity", "1");
    });
    $(".box-img", this).on("mouseout", function () {
        $(".view", this).css("opacity", "0");
    });
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();
    new WOW().init();

//popup-menu-left, popup-menu-right
    $(".btn-pool").click(function () {
        $(".popup-menu-left, .popup-menu, .overlay").addClass('active');
    });
    $(".btn-wellness").click(function () {
        $(".popup-menu-wellness, .popup-menu, .overlay").addClass('active');
    });
    $(".popup-close, .overlay").click(function () {
        $(".popup-menu-wellness, .popup-menu-left, .popup-menu, .overlay").removeClass('active');
    });
    $(".menu-burder").click(function () {
        $(".popup-menu-right, .popup-menu").addClass('active');
    });
    $(".popup-close").click(function () {
        $(".popup-menu-right, .popup-menu").removeClass('active');
    });


    //slider
    $('.slider').owlCarousel({
        center: true,
        items: 1,
        loop:true,
        nav: true,
        smartSpeed: 1000,
        dots: false,
        responsive : {
            1070 : {
                items: 2
            }
        }
    });

    $('[data-fancybox="gallery"]').fancybox({
        showCloseButton: true,
        showNavArrows: true,
        loop: true,
        buttons: [
            "close"
        ]
    });

});


