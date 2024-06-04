$(document).ready(function() {
    $('#btn').on('click', function() {
        $('#overlay').fadeIn(500);
        $('#block').fadeIn(500);
    });

    $('#close').on('click', function() {
        $('#overlay').fadeOut(500);
        $('#block').fadeOut(500);
    });

});
