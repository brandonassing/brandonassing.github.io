$(document).ready(function() {

    var imageSRCs;

    for (var i = 29; i >= 1; i--) {
        $("#image-list").append('<li><div class = "photo-div col l3"><img class = "photo" src="./img/Photos/' + String(i) + '.JPG"></div></li>');
    }
});