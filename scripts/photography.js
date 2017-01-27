$(document).ready(function() {

    function appendImage(i) {
        return function(num) {
            window.alert(String(i));
            imageSRCs = "./img/Photos/" + String(i) + "-min.JPG";
            window.alert(imageSRCs);
            $("#image-list").append('<li><div class = "photo-div col l3 m4 s6"><img class = "materialboxed photo" src="' + imageSRCs + '"></div></li>');
        };
    }

    var imageSRCs = [];

    for (var i = 29; i >= 1; i--) {
        //figure out how to only load some, or use a proxy
        imageSRCs[i] = "./img/Photos/" + String(i) + "-min.JPG";

        $("#image-list").append('<li><div class = "photo-div col l3 m4 s6"><img class = "materialboxed photo hidden" src="' + imageSRCs[i] + '"></div></li>');

        //////KINDA WORKS, STILL LAGS/////////////

        $("img[src='" + imageSRCs[i] + "']").on("load", function() {
            $(this).removeClass("hidden");
        });


        /////////////////////////////////////////
        /*
        var imgSRC = new Image();
        imgSRC.src = imageSRCs[i];
        $(imgSRC).on("load", function() {
            //window.alert($(this).attr("src"));
            $(this).removeClass("hidden");
        });
        */
        /////////////////////////////////////////
    }

    $(".photo-div").show();
    var nImages = $("#all-images").length;
    var loadCounter = 0;
    //binds onload event listner to images
    $("#all-images img").on("load", function() {
        loadCounter++;
        if (nImages == loadCounter) {
            $(this).parent().show();
            $("#loadingDiv").hide();
        }
    }).each(function() {

        // attempt to defeat cases where load event does not fire
        // on cached images
        if (this.complete) $(this).trigger("load");
    });
    $('.materialboxed').materialbox();
});