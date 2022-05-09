$(function () {
  var main_vis = new Swiper(".main_vis .mySwiper", {
    pagination: {
      el: ".main_vis .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".main_vis .swiper-button-next",
      prevEl: ".main_vis .swiper-button-prev",
    },
    speed:800,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      loop: true,
    },
  });

  var main_slide = new Swiper(".main_slide .mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".main_slide .swiper-pagination",
    },
    speed:700,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      loop: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  });

  var re_prd_area = new Swiper(".re_prd_area .mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: ".re_prd_area .swiper-pagination",
    },
    speed:800,
    loop:true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      loop: true,
    },
  });

  
  

  $(window).scroll(function () {
    curr = $(window).scrollTop();
    off_top = $(".video_txt").offset().top;
    if (curr >= off_top) {
      $(".top_btn").addClass("on");
      $(".top_btn").click(function () {
        $("html,body").stop().animate({ scrollTop: 0 }, 800);
      });
    } else {
      $(".top_btn").removeClass("on");
      $(".top_btn").click(function () {
        var bot_h = $('.ft_info').offset().top;
        $("html,body").stop().animate({ scrollTop: bot_h }, 800);
      });
    }
  });
  
  

  $(".gnb> .gnb_btn").click(function () {
    $("#aside").stop().animate({ left: "0" }, 300);
    $(".dimmed_bg").addClass("on");
  });

  $(".closebtn").click(function () {
    $("#container").removeClass("on");
    $("#aside").stop().animate({ left: "-100%" }, 300);
    $(".dimmed_bg").removeClass("on");
  });

  $(".video_txt>ul>li").click(function () {
    var idx = $(this).index() + 1;

    
      $(".video_txt>ul>li").removeClass("in");
      $(this).addClass("in");
      $(".vid>div").removeClass("in");
      $("#vid0" + idx).addClass("in");
    
  });

  var review_prd = new Swiper(".review_prd .mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop:true,
    speed:800,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  $(".bi_li>.li_list").click(function () {
    var sub_b = $(this).parent().find("ul").outerHeight();

    if ($(this).hasClass("op")) {
      $(this).removeClass("op");
      $(this).parent().find("div").stop().animate({ height: "0" });
    } else {
      $(this).addClass("op");
      $(this).parent().find("div").stop().animate({ height: sub_b });
    }
  });

  var vid = new Swiper(".vid .mySwiper", {
    pagination: {
      el: ".vid .swiper-pagination",
      type: "fraction",
    },
  });

  $(".ctg_li .category").click(function () {
    var sub_h = $(this).parent().find("ul").outerHeight(); 

    if ($(this).hasClass("on")) {
      
      $(this).removeClass("on");
      $(this).parent().find("div").stop().animate({ height: "0" });
    } else {
      
      $(this).addClass("on");
      $(this).parent().find("div").stop().animate({ height: sub_h });
    }
  });

  var main_area = new Swiper(".main_area .mySwiper", {
    direction: "vertical",
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      loop: true,
    },
    pagination: {
      el: ".main_area .swiper-pagination",
      clickable: true,
    },
  });

  $(".bi_li .bi_a").click(function () {
    var bi_h = $(this).parent().find("ul").outerHeight();

    if ($(this).hasClass("op")) {

      $(this).removeClass("op");
      $(this).parent().find("div").stop().animate({ height: "0" });
    } else {
  
      $(this).addClass("op");
      $(this).parent().find("div").stop().animate({ height: bi_h });
    }
  });
});
