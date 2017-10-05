$('.smoothscroll').on('click',function (e) {
    $('html, body').animate({
        scrollTop: $("#about-us").offset().top
    }, 900);
});