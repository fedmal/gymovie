$(function() {

  var toggleMenu = $('.navbar-toggler'),
      layer=$('.site__layer'),
      siteMenu= $('.header__nav');

  // var toggleMenu = $(".header__toggle-nav");
  toggleMenu.html(toggleMenu.data("text"));


  toggleMenu.on('click', function(){

    var el = $(this);
    var swap = el.data("swap");
    var text = el.data("text");
    el.data("text", swap);
    el.data("swap", text);
    el.html(swap);

    layer.toggleClass('active');
    $(this).toggleClass("collapsed");
    siteMenu.toggleClass("show");
    $('body').toggleClass('menu-active');
  });


  $('.site__layer').on('click', function(){
    layer.removeClass('active');
    toggleMenu.removeClass('collapsed');
    siteMenu.removeClass('show');
    $('body').removeClass('menu-active');
  });


  function equalHeight(elem) {

    var highestBox = 0;
    var heightAuto = 'auto'
    $(elem).height(heightAuto);
    $(elem).each(function(){

      if($(this).height() > highestBox) {
        highestBox = $(this).height(); 
      }
      
    });  
    $(elem).height(highestBox);
  }
  equalHeight('.featured-icons .featured__icon');

  var headerHeight = 0;

  $(window).resize(function() {

      setTimeout(function() {
        headerHeight = $('.header').innerHeight();
      }, 3000) 


       
      
      $('.main-menu').css({'margin-top': $('.header').css('height'), 'height' : 'calc(100% - ' + headerHeight + 'px)'});

   })

  .resize();



$(".owl-carousel").each(function(){
    $(this).owlCarousel($(this).data());
});



 $('.slider-tabs .slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-tabs .slider-nav',

  nextArrow: $('#next'),

  prevArrow: $('#prev'),

});


$('.slider-tabs .slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-tabs .slider-for',
  dots: true,
  vertical: true,
  centerMode: true,
  focusOnSelect: true,
});


$(".slider-tabs__nav .prev").click(function(){
  $(".slider-tabs .slider-for").slick("slickPrev")
})

$(".slider-tabs__nav .next").click(function(){
  $(".slider-tabs .slider-for").slick("slickNext")
})

VideoJS.setup();


$('input, select').styler();



$('.tiled-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed:  2800,
  centerMode: true,
  centerPadding: "0"
});


$('.video-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {

        dots: true,
      }
    }
  ]
});


$(".slider-video__nav .prev").click(function(){
  $(".video-carousel").slick("slickPrev")
})

$(".slider-video__nav .next").click(function(){
  $(".video-carousel").slick("slickNext")
})


});