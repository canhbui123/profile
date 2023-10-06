;$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    center: true,
    nav: true,
    dots: false,
    loop: true,
  });
});

wow = new WOW();

wow.init();

// Can also be used with $(document).ready()
$(window).load(function () {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});