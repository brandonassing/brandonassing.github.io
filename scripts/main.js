//TODO change tab: remove bar and add overlay

$(document).ready(function() {
  $('.tab-text').click(function(){
    $('html, body').animate({
            scrollTop: $("#tabs-container").offset().top
        }, 700);
  });
});
