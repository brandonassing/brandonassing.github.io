$(document).ready(function() {

    function appendImage(i) {
        return function(num) {
            window.alert(String(i));
            imageSRCs = "./img/Photos/" + String(i) + ".JPG";
            window.alert(imageSRCs);
            $("#image-list").append('<li><div class = "photo-div col l3 m4 s6"><img class = "materialboxed photo" src="' + imageSRCs + '"></div></li>');
        };
    }

    var imageSRCs = [];

    for (var i = 29; i >= 1; i--) {
        //figure out how to only load some, or use a proxy
        imageSRCs[i] = "./img/Photos/" + String(i) + ".JPG";

        $("#image-list").append('<li><div class = "photo-div col l3 m4 s6"><img class = "materialboxed photo" src="' + imageSRCs[i] + '"></div></li>');
        /*
        $('<img src="' + imageSRCs[i] + '">').on("load", function(i) {
            //$(this).appendTo('#some_target');
            window.alert(String(i));
            imageSRCs = "./img/Photos/" + String(i) + ".JPG";
            window.alert(imageSRCs);
            $("#image-list").append('<li><div class = "photo-div col l3 m4 s6"><img class = "materialboxed photo" src="' + imageSRCs + '"></div></li>');
        });
        */
    }
    $('.materialboxed').materialbox();
});