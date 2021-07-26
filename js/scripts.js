$(document).ready(function(){
    $('#mycarousel').carousel( { interval : 2000 } );
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else if($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $('#loginModal').modal( { show : false } );
    $('#reserveModal').modal( { show : false } );
    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
    });
    $('#reserveButton').click(function(){
        $('#reserveModal').modal('show');
    });
    $('.close-loginModal').click(function(){
        $('#loginModal').modal('hide');
    });
    $('.close-reserveModal').click(function(){
        $('#reserveModal').modal('hide');
    });
});