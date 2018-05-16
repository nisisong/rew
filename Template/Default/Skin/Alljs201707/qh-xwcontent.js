$(function(){
  var step =266;
  var posFlag = 0;
  var num =5;
  var clickFlag1 = true;
  var clickFlag2 = true;
    $(".whd_leftbutton").on("click",function(){
         if(!clickFlag2){
          return false;
         }
          posFlag = $(".whd_conten")[0].offsetLeft;

          var _x = posFlag + step;
           if(_x > 0){
              $(".whd_conten")[0].style.left = -(step*num) +"px";
              posFlag = $(".whd_conten")[0].offsetLeft;

           _x = posFlag + step;
           }
           clickFlag2 = false;
           $(".whd_rollcenter .whd_conten").animate({
               "left":_x + "px"
        },function(){
          clickFlag2 = true;
        });


      });
      $(".whd_rightbutton").on("click", function(){
       if(!clickFlag1){
        return false;
       }

        posFlag = $(".whd_conten")[0].offsetLeft;
        var _x = posFlag - step;
        if(_x<-(step*num)){
          $(".whd_conten")[0].style.left = 0 +"px";
          posFlag = $(".whd_conten")[0].offsetLeft;
         _x = posFlag - step;

        }
        clickFlag1 = false;
        $(".whd_rollcenter .whd_conten").animate({
               "left":_x + "px"
        },function(){
          clickFlag1 = true;
        });

      });
});



// 热门企业搜索
$(function(){
      $(".sousuo").click(function(){
        $(".sousuo").css("display","none"); ;
        $(".kuang").css("display","inline-block");
        $(".Hcha").css("display","block");
      })
      $(".Hcha").click(function(){
        $(".sousuo").css("display","block"); ;
        $(".kuang").css("display","none");
        $(".Hcha").css("display","none");
      })
    })

// 实用工具
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 2180) {
                $(".rightSide").addClass("fix");
            } else {
                $(".rightSide").removeClass("fix");
            }
        });
    });


// 广告位切换
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



$(function(){
  $(".teaImg_one").addClass("on");
  $(".teaImg_one").on("click",function () {
      $(".teaImg_one").addClass("on");
      $(".teaImg_two").removeClass("on");
      $(".teaImg_three").removeClass("on");
      $(".teaImg_four").removeClass("on");
      $(".teaImg_five").removeClass("on");
      $(".teaImg_six").removeClass("on");
      $(".teaImg_sevent").removeClass("on");
      $(".teaImg_eight").removeClass("on");
      $(".teaImg_nine").removeClass("on");
      $(".teaKind_three").css("display","none");
      $(".teaKind_one").css("display","block");
      $(".teaKind_two").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");

  });
  $(".teaImg_one").on("click",function () {
      $(".teaKind_one").css("display","block");
      $(".teaKind_two").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");

  });

  $(".teaImg_two").on("click",function () {
      $(".teaImg_two").addClass("on");
      $(".teaImg_one").removeClass("on");
      $(".teaImg_three").removeClass("on");
      $(".teaImg_four").removeClass("on");
      $(".teaImg_five").removeClass("on");
      $(".teaImg_six").removeClass("on");
      $(".teaImg_sevent").removeClass("on");
      $(".teaImg_eight").removeClass("on");
      $(".teaImg_nine").removeClass("on");
      $(".teaKind_one").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_two").css("display","block");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  });
  $(".teaImg_two").on("click",function () {
      $(".teaKind_two").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  });

  $(".teaImg_three").on("click",function () {
      $(".teaImg_three").addClass("on");
      $(".teaImg_one").removeClass("on");
      $(".teaImg_two").removeClass("on");
      $(".teaImg_four").removeClass("on");
      $(".teaImg_five").removeClass("on");
      $(".teaImg_six").removeClass("on");
      $(".teaImg_sevent").removeClass("on");
      $(".teaImg_eight").removeClass("on");
      $(".teaImg_nine").removeClass("on");
      $(".teaKind_three").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  })
  $(".teaImg_three").on("click",function () {
      $(".teaKind_three").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  });

  $(".teaImg_four").on("click",function () {
      $(".teaImg_four").addClass("on");
      $(".teaImg_one").removeClass("on");
      $(".teaImg_two").removeClass("on");
      $(".teaImg_three").removeClass("on");
      $(".teaImg_five").removeClass("on");
      $(".teaImg_six").removeClass("on");
      $(".teaImg_sevent").removeClass("on");
      $(".teaImg_eight").removeClass("on");
      $(".teaImg_nine").removeClass("on");
      $(".teaKind_four").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  })
  $(".teaImg_four").on("click",function () {
      $(".teaKind_four").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  });
  $(".teaImg_five").on("click",function () {
      $(".teaImg_five").addClass("on");
      $(".teaImg_one").removeClass("on");
      $(".teaImg_two").removeClass("on");
      $(".teaImg_three").removeClass("on");
      $(".teaImg_four").removeClass("on");
      $(".teaImg_six").removeClass("on");
      $(".teaImg_sevent").removeClass("on");
      $(".teaImg_eight").removeClass("on");
      $(".teaImg_nine").removeClass("on");
      $(".teaKind_five").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  })
  $(".teaImg_five").on("click",function () {
      $(".teaKind_five").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  });
  $(".teaImg_six").on("click",function () {
      $(".teaImg_six").addClass("on");
      $(".teaImg_one").removeClass("on");
      $(".teaImg_two").removeClass("on");
      $(".teaImg_three").removeClass("on");
      $(".teaImg_five").removeClass("on");
      $(".teaImg_four").removeClass("on");
      $(".teaImg_sevent").removeClass("on");
      $(".teaImg_eight").removeClass("on");
      $(".teaImg_nine").removeClass("on");
      $(".teaKind_six").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  })
  $(".teaImg_six").on("click",function () {
      $(".teaKind_six").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  });

   $(".teaImg_sevent").on("click",function () {
      $(".teaImg_sevent").addClass("on");
      $(".teaImg_one").removeClass("on");
      $(".teaImg_two").removeClass("on");
      $(".teaImg_three").removeClass("on");
      $(".teaImg_four").removeClass("on");
      $(".teaImg_five").removeClass("on");
      $(".teaImg_six").removeClass("on");
      $(".teaImg_eight").removeClass("on");
      $(".teaImg_nine").removeClass("on");
      $(".teaKind_sevent").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  })
  $(".teaImg_sevent").on("click",function () {
      $(".teaKind_sevent").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_eight").css("display","none");
      $(".teaKind_nine").css("display","none");
  });
  $(".teaImg_eight").on("click",function () {
      $(".teaImg_eight").addClass("on");
      $(".teaImg_one").removeClass("on");
      $(".teaImg_two").removeClass("on");
      $(".teaImg_three").removeClass("on");
      $(".teaImg_four").removeClass("on");
      $(".teaImg_five").removeClass("on");
      $(".teaImg_six").removeClass("on");
      $(".teaImg_sevent").removeClass("on");
      $(".teaImg_nine").removeClass("on");
      $(".teaKind_eight").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_nine").css("display","none");
  })
  $(".teaImg_eight").on("click",function () {
      $(".teaKind_eight").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_nine").css("display","none");
  });
   $(".teaImg_nine").on("click",function () {
      $(".teaImg_nine").addClass("on");
      $(".teaImg_one").removeClass("on");
      $(".teaImg_two").removeClass("on");
      $(".teaImg_three").removeClass("on");
      $(".teaImg_four").removeClass("on");
      $(".teaImg_five").removeClass("on");
      $(".teaImg_six").removeClass("on");
      $(".teaImg_sevent").removeClass("on");
      $(".teaImg_eight").removeClass("on");
      $(".teaKind_nine").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_three ").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
  })
  $(".teaImg_nine").on("click",function () {
      $(".teaKind_nine").css("display","block");
      $(".teaKind_one").css("display","none");
      $(".teaKind_two").css("display","none");
      $(".teaKind_three").css("display","none");
      $(".teaKind_four").css("display","none");
      $(".teaKind_five").css("display","none");
      $(".teaKind_six").css("display","none");
      $(".teaKind_sevent").css("display","none");
      $(".teaKind_eight").css("display","none");
  });


$(".teb_one").addClass("on");
  $(".teb_one").on("click",function () {
      $(".teb_one").addClass("on");
      $(".teb_two").removeClass("on");
      $(".teb_three").removeClass("on");
      $(".teb_four").removeClass("on");
      $(".teb_five").removeClass("on");
      $(".teb_six").removeClass("on");
      $(".teb_sevent").removeClass("on");
      $(".teb_eight").removeClass("on");
      $(".teb_nine").removeClass("on");
      $(".Teb_three").css("display","none");
      $(".Teb_one").css("display","block");
      $(".Teb_two").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");

  });
  $(".teb_one").on("click",function () {
      $(".Teb_one").css("display","block");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");

  });

  $(".teb_two").on("click",function () {
      $(".teb_two").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_three").removeClass("on");
      $(".teb_four").removeClass("on");
      $(".teb_five").removeClass("on");
      $(".teb_six").removeClass("on");
      $(".teb_sevent").removeClass("on");
      $(".teb_eight").removeClass("on");
      $(".teb_nine").removeClass("on");
      $(".Teb_one").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_two").css("display","block");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  });
  $(".teb_two").on("click",function () {
      $(".Teb_two").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  });

  $(".teb_three").on("click",function () {
      $(".teb_three").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_two").removeClass("on");
      $(".teb_four").removeClass("on");
      $(".teb_five").removeClass("on");
      $(".teb_six").removeClass("on");
      $(".teb_sevent").removeClass("on");
      $(".teb_eight").removeClass("on");
      $(".teb_nine").removeClass("on");
      $(".Teb_three").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  })
  $(".teb_three").on("click",function () {
      $(".Teb_three").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  });

  $(".teb_four").on("click",function () {
      $(".teb_four").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_two").removeClass("on");
      $(".teb_three").removeClass("on");
      $(".teb_five").removeClass("on");
      $(".teb_six").removeClass("on");
      $(".teb_sevent").removeClass("on");
      $(".teb_eight").removeClass("on");
      $(".teb_nine").removeClass("on");
      $(".Teb_four").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  })
  $(".teb_four").on("click",function () {
      $(".Teb_four").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  });
  $(".teb_five").on("click",function () {
      $(".teb_five").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_two").removeClass("on");
      $(".teb_three").removeClass("on");
      $(".teb_four").removeClass("on");
      $(".teb_six").removeClass("on");
      $(".teb_sevent").removeClass("on");
      $(".teb_eight").removeClass("on");
      $(".teb_nine").removeClass("on");
      $(".Teb_five").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  })
  $(".teb_five").on("click",function () {
      $(".Teb_five").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  });
  $(".teb_six").on("click",function () {
      $(".teb_six").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_two").removeClass("on");
      $(".teb_three").removeClass("on");
      $(".teb_five").removeClass("on");
      $(".teb_four").removeClass("on");
      $(".teb_sevent").removeClass("on");
      $(".teb_eight").removeClass("on");
      $(".teb_nine").removeClass("on");
      $(".Teb_six").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  })
  $(".teb_six").on("click",function () {
      $(".Teb_six").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  });

   $(".teb_sevent").on("click",function () {
      $(".teb_sevent").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_two").removeClass("on");
      $(".teb_three").removeClass("on");
      $(".teb_four").removeClass("on");
      $(".teb_five").removeClass("on");
      $(".teb_six").removeClass("on");
      $(".teb_eight").removeClass("on");
      $(".teb_nine").removeClass("on");
      $(".Teb_sevent").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  })
  $(".teb_sevent").on("click",function () {
      $(".Teb_sevent").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_eight").css("display","none");
      $(".Teb_nine").css("display","none");
  });
  $(".teb_eight").on("click",function () {
      $(".teb_eight").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_two").removeClass("on");
      $(".teb_three").removeClass("on");
      $(".teb_four").removeClass("on");
      $(".teb_five").removeClass("on");
      $(".teb_six").removeClass("on");
      $(".teb_sevent").removeClass("on");
      $(".teb_nine").removeClass("on");
      $(".Teb_eight").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_nine").css("display","none");
  })
  $(".teb_eight").on("click",function () {
      $(".Teb_eight").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_nine").css("display","none");
  });
   $(".teb_nine").on("click",function () {
      $(".teb_nine").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_two").removeClass("on");
      $(".teb_three").removeClass("on");
      $(".teb_four").removeClass("on");
      $(".teb_five").removeClass("on");
      $(".teb_six").removeClass("on");
      $(".teb_sevent").removeClass("on");
      $(".teb_eight").removeClass("on");
      $(".Teb_nine").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three ").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
  })
  $(".teb_nine").on("click",function () {
      $(".Teb_nine").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");
      $(".Teb_six").css("display","none");
      $(".Teb_sevent").css("display","none");
      $(".Teb_eight").css("display","none");
  });



  $(".tab_one").addClass("on");
  $(".tab_one").on("click",function () {
      $(".tab_one").addClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".tab_five").removeClass("on");
      $(".tab_six").removeClass("on");
      $(".tab_sevent").removeClass("on");
      $(".tab_eight").removeClass("on");
      $(".tab_nine").removeClass("on");
      $(".Tab_three").css("display","none");
      $(".Tab_one").css("display","block");
      $(".Tab_two").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");

  });
  $(".tab_one").on("click",function () {
      $(".Tab_one").css("display","block");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");

  });

  $(".tab_two").on("click",function () {
      $(".tab_two").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".tab_five").removeClass("on");
      $(".tab_six").removeClass("on");
      $(".tab_sevent").removeClass("on");
      $(".tab_eight").removeClass("on");
      $(".tab_nine").removeClass("on");
      $(".Tab_one").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_two").css("display","block");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  });
  $(".tab_two").on("click",function () {
      $(".Tab_two").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  });

  $(".tab_three").on("click",function () {
      $(".tab_three").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".tab_five").removeClass("on");
      $(".tab_six").removeClass("on");
      $(".tab_sevent").removeClass("on");
      $(".tab_eight").removeClass("on");
      $(".tab_nine").removeClass("on");
      $(".Tab_three").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  })
  $(".tab_three").on("click",function () {
      $(".Tab_three").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  });

  $(".tab_four").on("click",function () {
      $(".tab_four").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_five").removeClass("on");
      $(".tab_six").removeClass("on");
      $(".tab_sevent").removeClass("on");
      $(".tab_eight").removeClass("on");
      $(".tab_nine").removeClass("on");
      $(".Tab_four").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  })
  $(".tab_four").on("click",function () {
      $(".Tab_four").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  });
  $(".tab_five").on("click",function () {
      $(".tab_five").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".tab_six").removeClass("on");
      $(".tab_sevent").removeClass("on");
      $(".tab_eight").removeClass("on");
      $(".tab_nine").removeClass("on");
      $(".Tab_five").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  })
  $(".tab_five").on("click",function () {
      $(".Tab_five").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  });
  $(".tab_six").on("click",function () {
      $(".tab_six").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_five").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".tab_sevent").removeClass("on");
      $(".tab_eight").removeClass("on");
      $(".tab_nine").removeClass("on");
      $(".Tab_six").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  })
  $(".tab_six").on("click",function () {
      $(".Tab_six").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  });

   $(".tab_sevent").on("click",function () {
      $(".tab_sevent").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".tab_five").removeClass("on");
      $(".tab_six").removeClass("on");
      $(".tab_eight").removeClass("on");
      $(".tab_nine").removeClass("on");
      $(".Tab_sevent").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  })
  $(".tab_sevent").on("click",function () {
      $(".Tab_sevent").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_eight").css("display","none");
      $(".Tab_nine").css("display","none");
  });
  $(".tab_eight").on("click",function () {
      $(".tab_eight").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".tab_five").removeClass("on");
      $(".tab_six").removeClass("on");
      $(".tab_sevent").removeClass("on");
      $(".tab_nine").removeClass("on");
      $(".Tab_eight").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_nine").css("display","none");
  })
  $(".tab_eight").on("click",function () {
      $(".Tab_eight").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_nine").css("display","none");
  });
   $(".tab_nine").on("click",function () {
      $(".tab_nine").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".tab_five").removeClass("on");
      $(".tab_six").removeClass("on");
      $(".tab_sevent").removeClass("on");
      $(".tab_eight").removeClass("on");
      $(".Tab_nine").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three ").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
  })
  $(".tab_nine").on("click",function () {
      $(".Tab_nine").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
      $(".Tab_six").css("display","none");
      $(".Tab_sevent").css("display","none");
      $(".Tab_eight").css("display","none");
  });


  $(".tlb_one").addClass("on");
  $(".tlb_one").on("click",function () {
      $(".tlb_one").addClass("on");
      $(".tlb_two").removeClass("on");
      $(".tlb_three").removeClass("on");
      $(".Tlb_three").css("display","none");
      $(".Tlb_one").css("display","block");
      $(".Tlb_two").css("display","none");

  });
  $(".tlb_one").on("click",function () {
      $(".Tlb_one").css("display","block");
      $(".Tlb_two").css("display","none");
      $(".Tlb_three").css("display","none");
  });

  $(".tlb_two").on("click",function () {
      $(".tlb_two").addClass("on");
      $(".tlb_one").removeClass("on");
      $(".tlb_three").removeClass("on");
      $(".Tlb_one").css("display","none");
      $(".Tlb_three").css("display","none");
      $(".Tlb_two").css("display","block");
  });
  $(".tlb_two").on("click",function () {
      $(".Tlb_two").css("display","block");
      $(".Tlb_one").css("display","none");
      $(".Tlb_three").css("display","none");
  });

  $(".tlb_three").on("click",function () {
      $(".tlb_three").addClass("on");
      $(".tlb_one").removeClass("on");
      $(".tlb_two").removeClass("on");
      $(".Tlb_three").css("display","block");
      $(".Tlb_one").css("display","none");
      $(".Tlb_two").css("display","none");
  })
  $(".tlb_three").on("click",function () {
      $(".Tlb_three").css("display","block");
      $(".Tlb_one").css("display","none");
      $(".Tlb_two").css("display","none");
  });

  $(".tqb_one").addClass("on");
  $(".tqb_one").on("click",function () {
      $(".tqb_one").addClass("on");
      $(".tqb_two").removeClass("on");
      $(".Tqb_one").css("display","block");
      $(".Tqb_two").css("display","none");

  });
  $(".tqb_one").on("click",function () {
      $(".Tqb_one").css("display","block");
      $(".Tqb_two").css("display","none");
  });

  $(".tqb_two").on("click",function () {
      $(".tqb_two").addClass("on");
      $(".tqb_one").removeClass("on");
      $(".Tqb_one").css("display","none");
      $(".Tqb_two").css("display","block");
  });
  $(".tqb_two").on("click",function () {
      $(".Tqb_two").css("display","block");
      $(".Tqb_one").css("display","none");
  });


})
