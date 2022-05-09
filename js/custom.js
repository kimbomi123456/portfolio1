$(function(){

$(window).load(function(){
  $('.Loader_inner').delay('1000').fadeOut();
  });


  $(".menu_btn").click(function(){
  if($(this).hasClass("open")){
    $(".menu_bg").animate({"left":"-100%"},500);
    $(".menu_btn").removeClass("open");
  }else{
    $(".menu_bg").animate({"left":"0"},500);
    $(".menu_btn").addClass("open");
  }
});

$(".gnb	li").hover(function(){
    $(".gnb	li").addClass("no_active")
  $(this).addClass("active")
}, function(){
    $(".gnb	li").removeClass("no_active")
  $(this).removeClass("active")
    });

    var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    speed: 1000,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		  },
		  navigation: {
			nextEl: '.next_btn',
			prevEl: '.prev_btn',
		  },
      mousewheel: {
        invert: false,
      },
    });

$('.gnb li').click(function(){
swiper.slideTo($(this).index());
    $(".menu_bg").animate({"left":"-100%"},500);
$(".menu_btn").removeClass("open");
      
      })

TweenMax.staggerFromTo(".txt02 i", 1, {opacity:0, y:-10},{opacity:1,y:0}, 0.9);

});
