//= ../../bower_components/jquery/dist/jquery.js
//= partials/owl.carousel.min.js
//= partials/masonry.min.js


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


$("#btn-brief").click(function () {
  $(".wrp-example").toggleClass('open');
});

  

//chat
if ($("div").is(".file-attach")) {
  console.log("sadas");
  $(".chat-all").addClass("all-mob");
  $(".chat-sct").addClass("sct-mob");
  $(".chat-sbmt").addClass("sbmt-mob");
  $(".form-messege").css("margin-bottom", "5px");
  console.log("sadas");
}



//Go to top
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
////
$('.masonry-container').masonry({
  // options
  itemSelector: '.masonry-item',
  columnWidth: '.masonry-item'
});
////
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
    $('#owl-design').owlCarousel({
      items: 3,
      dots: false,
      lazyLoad: true,
      autoplay: false,
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
    if ($(window).width() <= '991') {
      $('#owl-two').owlCarousel({
        items: 3,
        dots: false,
        lazyLoad: true,
        autoplay: false,
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
  }

  $(".btn-lg").click(function () {
    $(".wrp-popup").toggleClass('activ');
  });
  $(".wrp-block--like").click(function () {
    $(this).toggleClass('activ')
  });
  $(window).on('load resize', windowSize);
});


// list 
function test() {
  var ele = document.getElementsByClassName('r1');
  for (var i = 0; i < ele.length; i++) {
    console.log(i);

    function fun1(i) {
      console.log(i);
      var rng = document.getElementsByClassName('r1')[i];
      var div = document.getElementsByClassName('color')[i];
      var output = document.getElementsByClassName('i1')[i];
      var output_mob = document.getElementsByClassName('i2')[i];
      output.value = rng.value + '%';
      output_mob.value = rng.value + '%';
      div.style.width = rng.value + '%';
      if (rng.value == 0) {
        return output.style.left = 1 + '%';
      } else if (rng.value > 97) {
        return output.style.left = 97 + '%';
      }
      output.style.left = rng.value + '%';
    }
    fun1(i);
  }
}

function load() {
  var rng = document.getElementById('r1');
  var div = document.getElementById('color');
  div.style.width = rng.value + '%';
}
load();

function contest() {
  var contest_list = document.getElementById('cnav__list');
  contest_list.classList.toggle('mob-activ');
  contest_list.animate([{
      opacity: '0'
    },
    {
      opacity: '1'
    },
  ], 300);
}

