$(function(){
  $(".tab_one").addClass("hover");
  $(".tab_third").css("display","none");
  $(".tab_second").css("display","none");
  $(".tab_one").on("click",function () {
      $(".tab_one").addClass("hover");
      $(".tab_two").removeClass("hover");
      $(".tab_three").removeClass("hover");
      $(".tab_third").css("display","none");
      $(".tab_first").css("display","block");
      $(".tab_second").css("display","none");
      $(".wdlb_new").css("display","block");
      $(".whd_encyclopedias").css("display","block");
      $(".wdlb_guang").css("display","block");
      $(".wdlb_hot").css("display","block");

  });

  $(".tab_two").on("click",function () {
      $(".tab_two").addClass("hover");
      $(".tab_one").removeClass("hover");
      $(".tab_three").removeClass("hover");
      $(".tab_first").css("display","none");
      $(".tab_third").css("display","none");
      $(".tab_second").css("display","block");
      $(".wdlb_new").css("display","none");
      $(".whd_encyclopedias").css("display","none");
      $(".wdlb_guang").css("display","none");
      $(".wdlb_hot").css("display","none");
  });


  $(".tab_three").on("click",function () {
      $(".tab_three").addClass("hover");
      $(".tab_one").removeClass("hover");
      $(".tab_two").removeClass("hover");
      $(".tab_third").css("display","block");
      $(".tab_first").css("display","none");
      $(".tab_second").css("display","none");
      $(".wdlb_new").css("display","none");
      $(".whd_encyclopedias").css("display","none");
      $(".wdlb_guang").css("display","none");
      $(".wdlb_hot").css("display","none");
  })

})


$(function(){
  $(".list_one").addClass("hover");
  $(".list_second").css("display","none");
  $(".list_third").css("display","none");
  $(".list_fourth").css("display","none");
  $(".list_delete").css("display","none");
  $(".list_one").on("click",function () {
      $(".list_one").addClass("hover");
      $(".list_two").removeClass("hover");
      $(".list_three").removeClass("hover");
      $(".list_four").removeClass("hover");
      $(".list_five").removeClass("hover");
      $(".list_third").css("display","none");
      $(".list_first").css("display","block");
      $(".list_second").css("display","none");
      $(".list_delete").css("display","none");
      $(".list_fourth").css("display","none");


  });


  $(".list_two").on("click",function () {
      $(".list_two").addClass("hover");
      $(".list_one").removeClass("hover");
      $(".list_three").removeClass("hover");
      $(".list_four").removeClass("hover");
      $(".list_five").removeClass("hover");
      $(".list_first").css("display","none");
      $(".list_third").css("display","none");
      $(".list_fourth").css("display","none");
      $(".list_second").css("display","block");
      $(".list_delete").css("display","none");
  });


  $(".list_three").on("click",function () {
      $(".list_three").addClass("hover");
      $(".list_one").removeClass("hover");
      $(".list_two").removeClass("hover");
      $(".list_four").removeClass("hover");
      $(".list_five").removeClass("hover");
      $(".list_third").css("display","block");
      $(".list_first").css("display","none");
      $(".list_second").css("display","none");
      $(".list_fourth").css("display","none");
      $(".list_delete").css("display","none");

  })

  $(".list_four").on("click",function () {
      $(".list_three").removeClass("hover");
      $(".list_one").removeClass("hover");
      $(".list_two").removeClass("hover");
      $(".list_four").addClass("hover");
      $(".list_five").removeClass("hover");
      $(".list_third").css("display","none");
      $(".list_first").css("display","none");
      $(".list_second").css("display","none");
      $(".list_delete").css("display","none");
      $(".list_fourth").css("display","block");
  })

  $(".list_five").on("click",function () {
      $(".list_three").removeClass("hover");
      $(".list_one").removeClass("hover");
      $(".list_two").removeClass("hover");
      $(".list_four").removeClass("hover");
      $(".list_five").addClass("hover");
      $(".list_third").css("display","none");
      $(".list_first").css("display","none");
      $(".list_second").css("display","none");
      $(".list_fourth").css("display","none");
      $(".list_delete").css("display","block");
  })

})

// 问答合并页

$(function(){
  open_ping();
  open_reply();
});
  function open_ping(){
    $(".wbhd_buc").click(function(){
      if($(".cn_comment").css("display")=="block"){
        $(".wbhd_jiant").css("background"," url(../../Skin/img201707/jiant2.png) no-repeat center");
        $(".cn_comment").css("display","none");
        $(".prompt").css("display","block");

      }else {
          $(".cn_comment").css("display","block");
          $(".prompt").css("display","none");
          $(".wbhd_jiant").css("background"," url(../../Skin/img201707/jiant1.png) no-repeat center");
      }
    });
  }
  function open_reply(){
    $(".pingl").click(function(){
      if($(".reply").css("display")=="block"){
        $(".reply").css("display","none");

      }else {
          $(".reply").css("display","block");
      }
    });
  }

 // 实用工具
 $(function() {
     var t = $(".rightSide").offset().top;
     // 固定
     $(window).scroll(function() {
         if ($(window).scrollTop() >= t) {
             $(".rightSide").addClass("fix");
             /* 当滑动到不小于 100px 时，回到顶部图标显示 */
         } else {
             $(".rightSide").removeClass("fix");
             /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
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
