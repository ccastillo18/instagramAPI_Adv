// YOUR CODE GOES HERE
var clientID = "6d65b1ee6ea2e52a8c92c681c0d2af37";

$(document).ready(function() {
    $("#search-btn").click(function() {
        var input = $("#search-query").val();
        searchFlickr(clientID, input, 10, function(photos) {

            for (var i  = 0; i < photos.photo.length; i++) {
                $("#search-results").append("<img src=" + photos.photo[i].url_m + ">");

            };


        });



    });

    $("#reset-btn").click(function() {
        $("#search-results").empty();
    })

});
 