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









// 城市切换
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

      $(".Teb_three").css("display","none");
      $(".Teb_one").css("display","block");
      $(".Teb_two").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");


  });
  $(".teb_one").on("click",function () {
      $(".Teb_one").css("display","block");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");


  });

  $(".teb_two").on("click",function () {
      $(".teb_two").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_three").removeClass("on");
      $(".teb_four").removeClass("on");
      $(".teb_five").removeClass("on");

      $(".Teb_one").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_two").css("display","block");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");

  });
  $(".teb_two").on("click",function () {
      $(".Teb_two").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");

  });

  $(".teb_three").on("click",function () {
      $(".teb_three").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_two").removeClass("on");
      $(".teb_four").removeClass("on");
      $(".teb_five").removeClass("on");

      $(".Teb_three").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");

  })
  $(".teb_three").on("click",function () {
      $(".Teb_three").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_five").css("display","none");

  });

  $(".teb_four").on("click",function () {
      $(".teb_four").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_two").removeClass("on");
      $(".teb_three").removeClass("on");
      $(".teb_five").removeClass("on");

      $(".Teb_four").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_five").css("display","none");

  })
  $(".teb_four").on("click",function () {
      $(".Teb_four").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_five").css("display","none");

  });
  $(".teb_five").on("click",function () {
      $(".teb_five").addClass("on");
      $(".teb_one").removeClass("on");
      $(".teb_two").removeClass("on");
      $(".teb_three").removeClass("on");
      $(".teb_four").removeClass("on");

      $(".Teb_five").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_four").css("display","none");
      $(".Teb_three").css("display","none");

  })
  $(".teb_five").on("click",function () {
      $(".Teb_five").css("display","block");
      $(".Teb_one").css("display","none");
      $(".Teb_two").css("display","none");
      $(".Teb_three").css("display","none");
      $(".Teb_four").css("display","none");

  });



  $(".tab_one").addClass("on");
  $(".tab_one").on("click",function () {
      $(".tab_one").addClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".tab_five").removeClass("on");

      $(".Tab_three").css("display","none");
      $(".Tab_one").css("display","block");
      $(".Tab_two").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");


  });


  $(".tab_one").on("click",function () {
      $(".Tab_one").css("display","block");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");


  });

  $(".tab_two").on("click",function () {
      $(".tab_two").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".tab_five").removeClass("on");
      $(".Tab_one").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_two").css("display","block");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
  });
  $(".tab_two").on("click",function () {
      $(".Tab_two").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
  });

  $(".tab_three").on("click",function () {
      $(".tab_three").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".tab_five").removeClass("on");
      $(".Tab_three").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
  })
  $(".tab_three").on("click",function () {
      $(".Tab_three").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_five").css("display","none");
  });

  $(".tab_four").on("click",function () {
      $(".tab_four").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_five").removeClass("on");
      $(".Tab_four").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_five").css("display","none");
  })
  $(".tab_four").on("click",function () {
      $(".Tab_four").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_five").css("display","none");
  });
  $(".tab_five").on("click",function () {
      $(".tab_five").addClass("on");
      $(".tab_one").removeClass("on");
      $(".tab_two").removeClass("on");
      $(".tab_three").removeClass("on");
      $(".tab_four").removeClass("on");
      $(".Tab_five").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_four").css("display","none");
      $(".Tab_three").css("display","none");
  })
  $(".tab_five").on("click",function () {
      $(".Tab_five").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_four").css("display","none");
  });


})
