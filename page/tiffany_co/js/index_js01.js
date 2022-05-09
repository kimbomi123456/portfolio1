$(function () {
  $(".header>.hamburger").click(function () {
    $("#left_menu").stop().animate({ left: "0" }, 600);

    $(this).addclass("on");
    $(".hd_icon").addClass("on");
    $(".header>.logo").addClass("bg_f");
  });

  $(".header>hamburger").click(function () {
    if ($(this).hasclass("on")) {
      $(this).removeClass("on");
      $("#left_menu").stop().animate({ left: "-100%" }, 600);
      $(".hd_icon").removeClass("on");
      $(".header>.logo").removeClass("bg_f");
    } else {
      $(this).addClass("on");
      $("#left_menu").stop().animate({ left: "0" }, 600);
      $(".hd_icon").addClass("on");
      $(".header>.logo").addClass("bg_f");
    }
  });

  $(".close_btn").click(function () {
    $("#left_menu").stop().animate({ left: "-100%" }, 600);
  });

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
      duration: "200%",
    },
  });

  /*움직이는 txt*/
  var txt_ani01 = TweenMax.to(".ani_wrap01 .ani_txt01", 0.7, { x: "-10%" });
  var txt_ani02 = TweenMax.to(".ani_wrap01 .ani_txt02", 0.7, { x: "40%" });
  var scene01 = new ScrollMagic.Scene({
    triggerElement: ".ani_wrap01",
    duration: "400%",
    offset: -500,
  })
    .setTween(txt_ani01)
    .addTo(controller);

  var scene02 = new ScrollMagic.Scene({
    triggerElement: ".ani_wrap01",
    duration: "400%",
    offset: -500,
  })
    .setTween(txt_ani02)
    .addTo(controller);

  /*tiffany note*/
  var scene03 = new ScrollMagic.Scene({
    triggerElement: "#container3",
    duration: "200%",
    offset: 170,
  })
    .setPin("#container3", { pushFollowers: false })
    .addTo(controller);

  /*bg change*/
  var tween1 = TweenMax.to("main", 0.08, {
    backgroundColor: "#b3f2f1",
  });

  var scene04 = new ScrollMagic.Scene({
    triggerElement: ".ani_wrap01",
    offset: 200,
    duration: "200%",
  })
    .setTween(tween1)
    .addTo(controller);
  /*
.addIndicators({
  name: "1"
});
*/

  AOS.init();
});
