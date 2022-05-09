$(function () {
  $(".left_menu>ul>li>a").click(function () {
    var location = $(this).data("target"); //내가 클릭한 것의 data target값을 가져온다
    //console.log(location);// //콘솔에 어떤 값을 갖고오는지 확인

    var location_top = $(location).offset().top; //내가 클릭한 변수 영역의 탑 값을 갖고오라
    $("html,body").animate({ scrollTop: location_top }, 500);
  });

  $(".hamburger").click(function () {
    if ($(this).hasClass("on")) {
      //이미 on클래스가 있따면
      $(this).removeClass("on"); // on 클래스 삭제
      $("#aside").removeClass("on"); //우측메뉴 사라지게하기
    } else {
      $(this).addClass("on"); //처음클릭할떈 추가
      $("#aside").addClass("on"); //우측메뉴 생기게
    }
  });



  var middle_3 = new Swiper(".middle_3 .mySwiper", {
    autoHeight: true,
    direction: "vertical",
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: false,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
    loop: true,
  });

  /*메인 상단 효과*/
  var scene01 = document.getElementById("scene01");
  var scene02 = document.getElementById("scene02");

  var parallax1 = new Parallax(scene01);
  var parallax2 = new Parallax(scene02);

  /*메인 타이틀 텍스트 효과*/
  $(document).ready(function () {
    animation();
  }, 1000);

  function animation() {
    var title1 = new TimelineMax();
    title1.staggerFromTo(".line1_s", 2, { y: 200 }, { y: -300 }, 0.14);
  }

  var mid_bottom = new Swiper(".mid_bottom .mySwiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    on: {
      //슬라이드가 넘어갈때 이벤트 호출
      slideChangeTransitionStart: function () {
        barReset();
      },
    },
  });

  var mid_left = new Swiper(".mid_left .mySwiper", {
    effect: "fadein",
  });

  mid_bottom.controller.control = mid_left;
  mid_left.controller.control = mid_bottom;

  //barReset in main_slide
  function barReset() {
    $(".gazing span").css({ width: "0" }, "0");
    $(".gazing span")
      .stop()
      .animate({ width: "100%" }, 2500, function () {
        swiper.slideNext();
      });
  }
  barReset(); //호출 -> 실행

  /*계속 흐르는 스와이퍼*/
  var swiperOptions = {
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    speed: 15000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  var bg_txt = new Swiper(".bg_txt .swiper-container", swiperOptions);

  /*메인 움직이는 텍스트1*/
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
      duration: "200%",
    },
  });

  var txt_ani01 = TweenMax.to(".txt_01 .ani_txt", 0.7, { x: "70%" });
  var scene = new ScrollMagic.Scene({
    triggerElement: ".txt_01",
    duration: "200%",
    offset: -600,
  })

    .setTween(txt_ani01)
    .addTo(controller);

  $(window).scroll(function () {
   
    curr = $(window).scrollTop(); 
    off_top = $("main .COL_title").offset().top - 400; 
    if (curr >= off_top) {
     
      $(".right_nav .top_btn").addClass("down"); 
    } else {
      $(".right_nav .top_btn").removeClass("down"); 
    }
  });

    $(".top_btn").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  /*마우스 효과*/
  var circle = $(".circle");

  function moveMove(e) {
    TweenLite.to(circle, 0.3, {
      css: {
        left: e.pageX,
        top: e.pageY,
      },
    });
  }

  $(window).on("mousemove", moveMove);

  // 스크롤에 따라 텍스트 움직이는 영역
  
  $(window).scroll(function () {
    var co = $(window).scrollTop();
    var co_top = $(".right").offset().top;
    if (co >= co_top) {
      $(".ani_txt").addClass("plus");
    } else {
      $(".ani_txt").removeClass("plus");
    }
  });

  /*lookbook 영역*/
  var middle_6 = new Swiper(".middle_6 .mySwiper", {
    slidesPerView: "auto",
    speed: 5000,
    loop: true,

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      loop: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(".menu_li .ctg_name").click(function () {
    var ctg_v = $(this).parent().find("ul").outerHeight();

    if ($(this).hasClass("opentab")) {
      $(this).removeClass("opentab");
      $(this).parent().find("div").stop().animate({ height: "0" });
    } else {
      $(".menu_li .ctg_name").removeClass("opentab");
      $('#aside #accordion .menu_ul .menu_li .sub_menu').stop().animate({ height: "0" });
      $(this).addClass("opentab");
      $(this).parent().find("div").stop().animate({ height: ctg_v });
    }
  });




  AOS.init();
});
