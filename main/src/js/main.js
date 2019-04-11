//= ../../bower_components/jquery/dist/jquery.js
//= partials/owl.carousel.min.js

// // Menu
$("#navToggle").click(function () {

  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  $('.main-menu').removeClass("decor-menu");
  // this line ▼ prevents content scroll-behind
  $("body").toggleClass("locked");
  $('.main-menu__list li').on('click', function () {
    $('.navBurger').removeClass('active');
    $('#test').removeClass('open');
    $('body').removeClass('locked');
    $(".fixed-menu-color").css("color", "");
  })
});
// Go to top
jQuery(document).ready(function ($) {
  var speed = 500,
    $scrollTop = $('<a href="#" title="go to top" class="scrollTop"><i class="fa fa-angle-double-up"></i></a>').appendTo('body');
  $scrollTop.click(function (e) {
    e.preventDefault();
    $('html:not(:animated),body:not(:animated)').animate({
      scrollTop: 0
    }, speed);
  });

  function show_scrollTop() {
    ($(window).scrollTop() > 300) ? $scrollTop.fadeIn(600): $scrollTop.fadeOut(600);
  }
  $(window).scroll(function () {
    show_scrollTop();
  });
  show_scrollTop();
});

// Slider

$(document).ready(function () {
  function windowSize() {
    $('#owl-one').owlCarousel({
      items: 6,
      dots: false,
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          center: true,
          loop: true,
          autoWidth: true
        },
        784: {
          items: 2,
          center: true,
          loop: true,
          autoWidth: true
        },
        1000: {
          items: 6,
          center: true,
          loop: true,
          autoWidth: true
        }
      }
    });
  }
  $(".btn-lg").click(function () {
    $(".wrp-popup").toggleClass('activ');
  });
  $(window).on('load resize', windowSize);
});