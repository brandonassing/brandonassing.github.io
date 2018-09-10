//TODO change tab: remove bar and add overlay
//TODO add load buffer
//TODO fix scroll on menu tab click; doesn't scroll to same spot bc SKILLS isn't long enough
$(document).ready(function() {
  $('.tab-text').click(function(){
    $('html, body').animate({
            scrollTop: $("#tabs-container").offset().top
        }, 700);
  });
});
