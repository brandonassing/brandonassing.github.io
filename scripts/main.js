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

    $(window).scroll(function () {
        $(".scroll-fade-out").css("opacity", 1 - $(window).scrollTop() / 350);
    });
    $(window).scroll(function () {
        $(".scroll-fade-in").css("opacity", $(window).scrollTop() / 700);
    });

    //=========================Image Load====================
    //TODO add image array; fade between; src from http://css3.bradshawenterprises.com/cfimg/
    var img = new Image();
    img.onload = function () {
        $("#header").addClass("bg");
        //TODO change to background animate, not entire header
        $('#header').animate({
            opacity: 1
        }, {
            duration: 3000
        });
        //$('#header').hide().fadeIn(3000);
        $("#headshot")
            .delay(500)
            .queue(function () {
                $(this).removeClass("hidden");
                $(this).addClass("fadeInDown");
                $(this).dequeue();
            });
        $('#typingSubheading').typeIt({
            speed: 100,
            breakLines: false,
            autoStart: false
        }).tiPause(800).tiDelete(11).tiPause(300).tiType("Software Engineer").tiPause(500).tiSettings({
            speed: 150
                //TODO add break for mobile
        }).tiType(" : BESc - Class of 2018");
    };
    img.src = 'img/header-background.jpg';
    //=========================Image Load====================

    //TODO change colors
    var scroll_pos = 0;

    /*TODO TODO TODO 
    FIX HEADER BACKGROUND IMAGE TO TRANPARENT SO ABOUT SECTION HAS IMAGE AS WELL
    */
    //for about background tranparency on page top
    //$("#about").css('background-color', 'rgba(128,203,196,0)');

    $("#about").css('background-color', '#80cbc4');

    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            //$("#about").css('background-color', '#4db6ac');
            $("#about").stop().animate({

                //for about background tranparency on page top
                //backgroundColor: 'rgba(128,203,196,0)'

                backgroundColor: '#4db6ac'
            }, 300);
        } else {
            //$("#about").css('background-color', '#80cbc4');
            $("#about").stop().animate({

                //for about background tranparency on page top
                //backgroundColor: 'rgba(128,203,196,1)'

                backgroundColor: '#80cbc4'
                    //TODO change this to animate background image somehow
            }, 300);
        }
    });

});
