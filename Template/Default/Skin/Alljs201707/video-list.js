$(function(){
  $(".tab_one").addClass("hover");
  $(".tab_third").css("display","none");
  $(".tab_second").css("display","none");
  $(".tab_fourth").css("display","none");
  $(".tab_fifth").css("display","none");
  $(".tab_sixth").css("display","none");
  $(".tab_one").on("click",function () {
      $(".tab_one").addClass("hover");
      $(".tab_two").removeClass("hover");
      $(".tab_three").removeClass("hover");
      $(".tab_four").removeClass("hover");
      $(".tab_five").removeClass("hover");
      $(".tab_six").removeClass("hover");
      $(".tab_third").css("display","none");
      $(".tab_first").css("display","block");
      $(".tab_second").css("display","none");
      $(".tab_fourth").css("display","none");
      $(".tab_fifth").css("display","none");
      $(".tab_sixth").css("display","none");

  });

  $(".tab_two").on("click",function () {
      $(".tab_two").addClass("hover");
      $(".tab_one").removeClass("hover");
      $(".tab_three").removeClass("hover");
      $(".tab_four").removeClass("hover");
      $(".tab_five").removeClass("hover");
      $(".tab_six").removeClass("hover");
      $(".tab_first").css("display","none");
      $(".tab_third").css("display","none");
      $(".tab_second").css("display","block");
      $(".tab_fourth").css("display","none");
      $(".tab_fifth").css("display","none");
      $(".tab_sixth").css("display","none");
  });


  $(".tab_three").on("click",function () {
      $(".tab_three").addClass("hover");
      $(".tab_one").removeClass("hover");
      $(".tab_two").removeClass("hover");
      $(".tab_four").removeClass("hover");
      $(".tab_five").removeClass("hover");
      $(".tab_six").removeClass("hover");
      $(".tab_third").css("display","block");
      $(".tab_first").css("display","none");
      $(".tab_second").css("display","none");
      $(".tab_fourth").css("display","none");
      $(".tab_fifth").css("display","none");
      $(".tab_sixth").css("display","none");
  })

  $(".tab_four").on("click",function () {
      $(".tab_four").addClass("hover");
      $(".tab_one").removeClass("hover");
      $(".tab_two").removeClass("hover");
      $(".tab_three").removeClass("hover");
      $(".tab_five").removeClass("hover");
      $(".tab_six").removeClass("hover");
      $(".tab_fourth").css("display","block");
      $(".tab_first").css("display","none");
      $(".tab_second").css("display","none");
      $(".tab_third").css("display","none");
      $(".tab_fifth").css("display","none");
      $(".tab_sixth").css("display","none");
  })

  $(".tab_five").on("click",function () {
      $(".tab_five").addClass("hover");
      $(".tab_one").removeClass("hover");
      $(".tab_two").removeClass("hover");
      $(".tab_three").removeClass("hover");
      $(".tab_four").removeClass("hover");
      $(".tab_six").removeClass("hover");
      $(".tab_fifth").css("display","block");
      $(".tab_first").css("display","none");
      $(".tab_second").css("display","none");
      $(".tab_third").css("display","none");
      $(".tab_fourth").css("display","none");
      $(".tab_sixth").css("display","none");
  })


  $(".tab_six").on("click",function () {
      $(".tab_six").addClass("hover");
      $(".tab_one").removeClass("hover");
      $(".tab_two").removeClass("hover");
      $(".tab_three").removeClass("hover");
      $(".tab_four").removeClass("hover");
      $(".tab_five").removeClass("hover");
      $(".tab_sixth").css("display","block");
      $(".tab_first").css("display","none");
      $(".tab_second").css("display","none");
      $(".tab_third").css("display","none");
      $(".tab_fourth").css("display","none");
      $(".tab_fifth").css("display","none");
  })

})


$(function(){
  $(".list_one").addClass("hue");
  $(".list_one span b").addClass("dian");
  $(".list_second").css("display","none");
  $(".list_one").on("click",function () {
      $(".list_one").addClass("hue");
      $(".list_one span b").addClass("dian");
      $(".list_two span b").removeClass("dian");
      $(".list_two").removeClass("hue");
      $(".list_first").css("display","block");
      $(".list_second").css("display","none");

  });


  $(".list_two").on("click",function () {
      $(".list_two").addClass("hue");
      $(".list_two span b").addClass("dian");
      $(".list_one span b").removeClass("dian");
      $(".list_one").removeClass("hue");
      $(".list_first").css("display","none");
      $(".list_second").css("display","block");
  });


})


// $('.wdlb_button ul li').click(function(){
// 	$(this).addClass('hover').siblings().removeClass('hover');
// 	$('.wdlb_content .wdlb_optimum').hide().eq($(this).index()).show();
// });



$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 950) {
            $(".rightSide").addClass("fix");
        } else {
            $(".rightSide").removeClass("fix");
        }
    });
});



$(function() {
    var step = 300;
    var posFlag = 0;
    var num = 3;
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
