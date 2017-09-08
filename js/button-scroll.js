$(document).ready(function(){
  $(".header").click(display());
  $(".About").hover(function(){$("#slider").css("margin-left","0")});
  $(".Images").hover(function(){$("#slider").css("margin-left","29%")});
  $(".Reservations").hover(function(){$("#slider").css("margin-left","62%")});
});
function display(){
  $(".About").click(function(){
    $("#slider").css("margin-left","0");
    $("#AboutContent").fadeIn();
    $("#ImagesContent, #ReservationsContent").hide();
  });
  $(".Images").click(function(){
    $("#slider").css("margin-left","29%");
    $("#ImagesContent").fadeIn();
    $("#AboutContent, #ReservationsContent").hide();
  });
  $(".Reservations").click(function(){
    $("#slider").css("margin-left","62%");
    $("#ReservationsContent").fadeIn();
    $("#AboutContent, #ImagesContent").hide();
  });
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    delay(1000);
    display();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
});