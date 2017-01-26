$(document).ready(function() {

    var imageSRCs;

    for (var i = 29; i >= 1; i--) {
        //figure out how to only load some, or use a proxy
        $("#image-list").append('<li><div class = "photo-div col l3 m4 s6"><img class = "materialboxed photo" src="./img/Photos/' + String(i) + '.JPG"></div></li>');
    }
    $('.materialboxed').materialbox();
});