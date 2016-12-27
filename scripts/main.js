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
    }).tiType("Software Engineer").tiPause(600).tiSettings({
        lifeLike: true,
        speed: 200
    }).tiType(" : BESc - Class of 2018");


    //======================================================================================================================================

});
