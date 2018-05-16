/***
*
*
*
**/

// 登录注册切换
$(function(){
  $('.banner .banner-content .login ul li').click(function(){
  	$(this).addClass('active').siblings().addClass('active');
    $('.banner .banner-content .login ul li').addClass('tive').eq($(this).index()).removeClass('tive').siblings();
  	$('.banner .banner-content .taBer').hide().eq($(this).index()).show();
  });
});


//nav
$(function(){
  $(".nav-list li").on("mouseenter",function(){
    $(this).addClass('current').siblings().removeClass('current');
  });
  $(".nav-list .jH").on("mouseleave",function(){
      $(".sY").addClass('current').siblings().removeClass('current');
  })
  $(".nav-list .nav-item").on("mouseleave",function(){
      $(".sY").addClass('current').siblings().removeClass('current');
      $(".nav-list li").removeClass('current');
  });
});
$(function(){
  $(".fM").on("mouseenter",function(){
    $(".nav-ification ul li .findMoney .heid").attr("src","../../Skin/img201707/touz-heid.png");
    $(".fM .sanj").css("display","block");
  })
  $(".fM").on("mouseleave",function(){
      $(".sY").addClass('current').siblings().removeClass('current');
      $(".nav-ification ul li .findMoney .heid").attr("src","../../Skin/img201707/touz-heit.png");
      $(".fM .sanj").css("display","none");
  })
});
$(function(){
  $(".fP").on("mouseenter",function(){
    $(".nav-ification ul li .findPro .heit").attr("src","../../Skin/img201707/touz-heid.png");
    $(".fP .sanj").css("display","block");
  })
  $(".fP").on("mouseleave",function(){
      $(".sY").addClass('current').siblings().removeClass('current');
      $(".nav-ification ul li .findPro .heit").attr("src","../../Skin/img201707/touz-heit.png");
      $(".fP .sanj").css("display","none");
  })
});





//每周项目推荐
$(function() {
         var step = 230;
         var posFlag = 0;
         var num = 9;
         var clickFlag1 = true;
         var clickFlag2 = true;
         $(".ulLeft").on("click",
         function() {
             if (!clickFlag2) {
                 return false;
             }
             posFlag = $(".ulCenter")[0].offsetLeft;
             var _x = posFlag + step;
             if (_x > 0) {
                 $(".ulCenter")[0].style.left = -(step * num) + "px";
                 posFlag = $(".ulCenter")[0].offsetLeft;
                 _x = posFlag + step;
             }
             clickFlag2 = false;
             $(".ulContenter .ulCenter").animate({
                 "left": _x + "px"
             },
             function() {
                 clickFlag2 = true;
             });
         });
         $(".ulRight").on("click",
         function() {
             if (!clickFlag1) {
                 return false;
             }
             posFlag = $(".ulCenter")[0].offsetLeft;
             var _x = posFlag - step;
             if (_x < -(step * num)) {
                 $(".ulCenter")[0].style.left = 0 + "px";
                 posFlag = $(".ulCenter")[0].offsetLeft;
                 _x = posFlag - step;
             }
             clickFlag1 = false;
             $(".ulContenter .ulCenter").animate({
                 "left": _x + "px"
             },
             function() {
                 clickFlag1 = true;
             });
         });
     });

     // 遮罩
     $(function () {

     $(".ulImgroll").hover(
       function () {
         $(this).find(".dask").stop().delay(50).animate({"top":0,opacity:1},300)
        },
       function () {
         $(this).find(".dask").stop().animate({"top":-150,opacity:0},300)
       }

     )
     })




// 专题切换
$(function() {
         var step = 275;
         var posFlag = 0;
         var num = 5;
         var clickFlag1 = true;
         var clickFlag2 = true;
         $(".tell-left").on("click",
         function() {
             if (!clickFlag2) {
                 return false;
             }
             posFlag = $(".tell-content")[0].offsetLeft;
             var _x = posFlag + step;
             if (_x > 0) {
                 $(".tell-content")[0].style.left = -(step * num) + "px";
                 posFlag = $(".tell-content")[0].offsetLeft;
                 _x = posFlag + step;
             }
             clickFlag2 = false;
             $(".tell-contenter .tell-content").animate({
                 "left": _x + "px"
             },
             function() {
                 clickFlag2 = true;
             });
         });
         $(".tell-right").on("click",
         function() {
             if (!clickFlag1) {
                 return false;
             }
             posFlag = $(".tell-content")[0].offsetLeft;
             var _x = posFlag - step;
             if (_x < -(step * num)) {
                 $(".tell-content")[0].style.left = 0 + "px";
                 posFlag = $(".tell-content")[0].offsetLeft;
                 _x = posFlag - step;
             }
             clickFlag1 = false;
             $(".tell-contenter .tell-content").animate({
                 "left": _x + "px"
             },
             function() {
                 clickFlag1 = true;
             });
         });
     });
