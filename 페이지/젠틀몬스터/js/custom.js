$(function(){
  $("nav").mouseenter(function(){
    $(".menu1>ul>li").addClass("active");
    $("header").addClass("active");
    $(".menuWrap").addClass("active");
    $(".logoImg").addClass("active");
    $(".dimmedBg").addClass("active");
  });
  $("header").mouseleave(function(){
    $(".menu1>ul>li").removeClass("active");
    $("header").removeClass("active");
    $(".menuWrap").removeClass("active");
    $(".logoImg").removeClass("active");
    $(".dimmedBg").removeClass("active");
  });

//헤더 메뉴 내 하위 메뉴 나와라
  $(".subMenuList.plus").click(function(){
    var openSecondMenu = $(this).parent().find("ul").outerHeight();
    if ($(this).hasClass("on")) 
    {
      $(this).removeClass("on");
      $(this).parent().find("div").stop().animate({ height: "0" });
      $(this).find(".icon.plus").removeClass("on");
      $(this).find(".icon.minus").removeClass("on");
    } 
    else 
    {
      $(this).addClass("on");
      $(this).parent().find("div").stop().animate({ height: openSecondMenu });
      $(this).find(".icon.plus").addClass("on");
      $(this).find(".icon.minus").addClass("on");
    }
  });

  var contSection02 = new Swiper(".section01 .swiper-container", {
    spaceBetween:0,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    }, 
    pagination: {
      el: ".section01 .swiper-pagination",
      Bullets: true,
    },
    navigation: {
      nextEl: ".section01 .swiper-button-next",
      prevEl: ".section01 .swiper-button-prev"
    }, 
    on: {
      slideChange: function(){
        $(".section01 .mainTxt").removeClass("on");
        $(".section01 .mainTxt").eq(this.realIndex).addClass("on");
      }
    }
  });

// 스크롤 내리면 헤더 사라짐
  $(window).scroll(function () {
    var headerNone = $(window).scrollTop();
    var mainStart = $(".section02").offset().top;
    if (headerNone >= mainStart) {$("header").hide();} 
    else {$("header").show();}
  });

  // menuBtn을 클릭시 우측에서부터 바디 전체 넓이 차지하는 메뉴가 열려라
  $(".hamBurgerBtn").click(function (){
    if ($(".fullMenu").hasClass("open"))
    {
      $(".fullMenu").removeClass("open");
      // $("body, html").css("background", "transparent");
      $(".dimmedBg").removeClass("active");
    }
    else 
    {
      $(".fullMenu").addClass("open");
      // $("body, html").css({"overflow-y": "hidden"},{"background": "#000"});
      // $("body, html").css("background", "rgba(0, 0, 0, 0.6)");
      $(".dimmedBg").addClass("active");

    }
  });

// 좌측에서부터 나오는 메뉴 닫기 버튼 클릭시 open 클래스 사라지며, 바디 영역 내 y축 스크롤이 생겨라
  $(".fullMenu .close").click(function(){
    if ($(".fullMenu").hasClass("open"))
    {
      $(".fullMenu").removeClass("open");
    /* $(".dimmedBg").removeClass("active");*/
      $("body, html").css("overflow-y", "auto");
    }
    else
    {
      $(".fullMenu").addClass("open");
      // $(".dimmedBg").addClass("active");
      $("body, html").css("overflow-y", "scroll");
    }
  });

// 탭메뉴
  $(".click>ul>li").click(function(){
    var indexNumber = $(this).index()+1;
    $(".tab div").removeClass("on");
    $("#tab0" + indexNumber).addClass("on");
    $(".click>ul>li").removeClass("on");
    $(this).addClass("on");
    // console.log(indexNumber)
  });

// 제품찾기 누르면 위에서 아래로 메뉴가 내려와라
  $(".productSearch").click(function(){
    if($(".productSearchArea").hasClass("on"))
    {
      $(".productSearchArea").removeClass("on");
      $("body .dimmedBg").removeClass("active");
    }
    else
    {
      $(".productSearchArea").addClass("on");
      $("body .dimmedBg").addClass("active");
    }
  });

  $(".subMenuList.plus").click(function(){
    var plusMenu= $(this).parent().find("ul").outerHeight();
    if($(this).hasClass("open"))
    {
      $(this).removeClass("open");
      $(".icon.minus").removeClass("on");
      $(".icon.plus").addClass("on");
      $(this).parent().find("div").stop().animate({ height: "0" });
    }
    else
    {
      $(this).addClass("open");
      $(".icon.minus").addClass("on");
      $(".icon.plus").removeClass("on");
      $(this).parent().find("div").stop().animate({ height: plusMenu });
    }
  });

// 탭메뉴 내 엑스 버튼 클릭시 탭메뉴 사라져라
  $("header .productSearchArea .close span").click(function(){
    if($(".productSearchArea").hasClass("on")){
      $(".productSearchArea").removeClass("on");
    }
    else
    {
      $(".productSearchArea").addClass("on");
    }
  });

// news area
  var newsSlide = new Swiper(".section04 .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".section04 .swiper-pagination",
    },
    breakpoints: {
      1280: {
          slidesPerView: 3,
          slidesPerGroup: 3,
      },
      1023: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          centeredSlides: true,
      }
  }
  });

// 하츠 제품 바로 알기 호버시 넓이 변화
  $(".leftLayout").mouseenter(function() {
    $(this).stop().animate({width: "55%"});
    $(this).siblings(".rightLayout").stop().animate({width: "45%"});
  });
  $(".leftLayout").mouseleave(function() {
    $(this).stop().animate({width: "50%"});
    $(this).siblings(".rightLayout").stop().animate({width: "50%"});
  });
  $(".section02 .rightLayout").mouseenter(function() {
    $(this).stop().animate({width: "55%"});
    $(this).siblings(".leftLayout").stop().animate({width: "45%"});
  });
  $(".section02 .rightLayout").mouseleave(function() {
    $(this).stop().animate({width: "50%"});
    $(this).siblings(".leftLayout").stop().animate({width: "50%"});
  });

// 패밀리 사이트
$("footer .ftFamily .siteButton").click(function(){
  if($("footer .ftFamily .familyListWrap").hasClass("open"))
  {
    $("footer .ftFamily .familyListWrap").removeClass("open")
  }
  else
  {
    $("footer .ftFamily .familyListWrap").addClass("open");
  }
});

  gsap.registerPlugin(ScrollTrigger);

  // support 영역 박스 3개
  gsap.to(".section03 .boxWrap", {
    scrollTrigger: {
      trigger: ".section03",
      // markers: true,
      start: "top center",
    },
    stagger: .3, opacity: 1, y: 0, duration: .5,
  });

// 모바일 햄버거 메뉴 내 하위메뉴
  $(".oneMenu1> .oneItem").click(function(){
    var openMenu = $(this).parent().find("ul").outerHeight();

    if($(this).hasClass("plus")){
      $(this).removeClass("plus");
      $(this).parent().find("div").stop().animate({height:"0"});
      // $(".submenu").removeClass("plus")
  
    }
    else{/*  console.log("ssdsd"); */
      // $(this).addClass("plus");
      // $(".submenu").removeClass("plus");
      $(".secMenuWrap").stop().animate({ height:"0"});
      // $("this").parent().find(".secMenuWrap").stop().animate({height:"0"});
      $(this).addClass("plus");
      $(this).parent().find("div").stop().animate({ height: openMenu });
    }
  });

var windowWidth = $(window).width();
  gsap.to(".section05 .videoWrap", {
    scrollTrigger:{
    trigger:".section05",
    start:"top top",
    end: "+=" + windowWidth,
    scrub:1,
    // markers: true,
    pin:".section05",
    },
  width:0
  });

  var section06 = new Swiper(".section06.inner .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    // slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".section06.inner .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".section06.inner .swiper-button-next",
      prevEl: ".section06.inner .swiper-button-prev",
    },
  });

// // 콜라보레이션 카드 이미지
  gsap.to(".section06.inner .collaborationMain", {
    scrollTrigger: {
      trigger: ".collaborationMain .swiper-container",
    },
    x: -200,
    duration: 5,
  });

  // gsap 사용해서 타이틀 텍스트에 효과
  let phrases = ["Best Collaboration"]
  let demo = document.querySelector(".collaborationTxtArea")
  let animation = gsap.timeline({repeat: Infinity})

  function createLayers(){
  phrases.forEach(value => {
    let layer = document.createElement("div")
    layer.innerHTML = value
    demo.appendChild(layer)
  })
  }

  function animateText() {
  let layers = document.querySelectorAll(".collaborationTxtArea div")
    layers.forEach(function(element, index){
    animation.fromTo(element, {opacity:0.1, scale:0.5}, {scale:1, opacity:1, repeat:1, yoyo:true, yoyoEase:true, repeatDelay:0.3})
  })
    gsap.set(".collaborationTxtArea", {visibility:"visible",color:"gray"}) 
  }

  createLayers()
  animateText()

});


