$(document).ready(function () {
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //==========================================================================================================================================

    $('#typingSubheading').typeIt({
        speed: 150,
        breakLines: false,
        autoStart: false
    }).tiPause(1000).tiType("Software Engineer").tiPause(600).tiSettings({
        lifeLike: true,
        speed: 200
    }).tiType(" : BESc - Class of 2018");


    //======================================================================================================================================

    $(window).scroll(function () {
        $(".scroll-fade-out").css("opacity", 1 - $(window).scrollTop() / 350);
    });
    $(window).scroll(function () {
        $(".scroll-fade-in").css("opacity", $(window).scrollTop() / 700);
    });
    $('#header').hide().fadeIn(3000);

    $("#headshot")
        .delay(500)
        .queue(function () {
            $(this).removeClass("hidden");
            $(this).addClass("fadeInDown");
            $(this).dequeue();
        });
    var scroll_pos = 0;
    $("#about").css('background-color', '#80cbc4');
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            //$("#about").css('background-color', '#4db6ac');
            $("#about").stop().animate({
                backgroundColor: '#4db6ac'
            }, 300);
        } else {
            //$("#about").css('background-color', '#80cbc4');
            $("#about").stop().animate({
                backgroundColor: '#80cbc4'
            }, 300);
        }
    });

});
