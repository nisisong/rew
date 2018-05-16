//nav
$(function(){
  $(".nav-list li").on("mouseenter",function(){
    $(this).addClass('current').siblings().removeClass('current');
  });
  $(".nav-list li").on("mouseleave",function(){
    $(".nav-list li").removeClass('current');
  });
});
$(function(){
  $(".fM").on("mouseenter",function(){
    $(".nav-ification ul li .findMoney .heid").attr("src","../../Skin/img201707/touz-heid.png");
    $(".fM .sanj").css("display","block");
  })
  $(".fM").on("mouseleave",function(){
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
      $(".nav-ification ul li .findPro .heit").attr("src","../../Skin/img201707/touz-heit.png");
      $(".fP .sanj").css("display","none");
  })
});

$(function(){
    $(".nav-list .nav-item").on("mouseenter",function(){
      var subList = $(this).find(".sub-list");
      subList.show();
      var Y = $(this).offset().left;
      var _w = $(window).width();
      subList.css({left:-Y+"px",width:_w+"px"});
      subList.stop().animate({
                  height:'0px'
                },120,function(){
                    subList.animate({
                      height:'120px'
                    },120)
                });

    })

    $(".nav-list .nav-item").on("mouseleave",function(){
        var _this = this;
        $(this).find(".sub-list").stop();
       $(this).find(".sub-list").animate({
              height:'0px'

        },200,function(){
            $(_this).find(".sub-list").hide();
        });

    })
});

$(function() {
  $('.select_pos .htools-select').click(function(){
    $(".htools-select .select-select-ul").show();
  })
  $('.htools-select .select-select-ul').on("mouseleave",function(){
    $(".htools-select .select-select-ul").hide();
  })
});

// 侧边栏
$(window).scroll(function () {
if($(window).scrollTop()>=550) {
$(".sidebar").fadeIn(400); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
}else {
$(".sidebar").fadeOut(400); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到
顶部图标隐藏 */
}
});

//所有项目
$(function(){
  $('.part-nav-tab-a ul li').click(function(){
    $(this).addClass('current').siblings().removeClass('current');
  });
  $('.container ul li').click(function(){
    $(this).addClass('cur').siblings().removeClass('cur');
  });
    });

        $(function(){
          open_more();
          function open_more(){
             $(".part-choose-list-a section a").on("click",function(){
               var _ping = $(".part-choose-list-a section a")
               for(var i=0;i<_ping.length;i++){
                 if(this == _ping[i]){
                  $($(".part-choose-list-a section a")[i]).toggleClass("current");
                }
              }
             });
          }
        })

        $(function(){
          open_ping();
          function open_ping(){
          	 $(".j-multi-more").on("click",function(){
               var _pinglun = $(".j-multi-more")
               for(var i=0;i<_pinglun.length;i++){
                 if(this == _pinglun[i]){
            			$($(".part-choose-list-a-cont")[i]).toggleClass("part-heigt-s");
             		}
              }
          	 });
          }
        })

//按钮换背景

$(function (){
  $(".banner .search button").mousedown(function(){
  $(".banner .search button").css("background", " url(../../Skin/img201707/搜索icon（按下）.png) no-repeat center");
});
  $(".banner .search button").mouseup(function(){
  $(".banner .search button").css("background", " url(../../Skin/img201707/搜索icon（不按）.png) no-repeat center");
});
})


// tab切换

$(function(){
  $(".tab_one").addClass("hover");
  $(".tab_one").on("mouseover",function () {
      $(".tab_one").addClass("hover");
      $(".tab_two").removeClass("hover");
      $(".tab_three").removeClass("hover");
      $(".tab_third").css("display","none");
      $(".tab_first").css("display","block");
      $(".tab_second").css("display","none");

  });
  $(".tab_one").on("mouseout",function () {
      $(".tab_second").css("display","none");
      $(".tab_third").css("display","none");
      $(".tab_first").css("display","block");
  });

  $(".tab_two").on("mouseover",function () {
      $(".tab_two").addClass("hover");
      $(".tab_one").removeClass("hover");
      $(".tab_three").removeClass("hover");
      $(".tab_first").css("display","none");
      $(".tab_third").css("display","none");
      $(".tab_second").css("display","block");
  });
  $(".tab_two").on("mouseout",function () {
      $(".tab_second").css("display","block");
      $(".tab_first").css("display","none");
      $(".tab_third").css("display","none");
  });

  $(".tab_three").on("mouseover",function () {
      $(".tab_three").addClass("hover");
      $(".tab_one").removeClass("hover");
      $(".tab_two").removeClass("hover");
      $(".tab_third").css("display","block");
      $(".tab_first").css("display","none");
      $(".tab_second").css("display","none");
  })
  $(".tab_three").on("mouseout",function () {
      $(".tab_third").css("display","block");
      $(".tab_first").css("display","none");
      $(".tab_second").css("display","none");
  });
})


// 列表页

// 显示隐藏

$(function(){
  $('.qyms #pull_down').each(function(){
    $(this).mouseover(function(){$(this).children("ul").show()});
});
  $('.qyms #pull_down').each(function(){
    $(this).mouseout(function(){$(this).children("ul").hide()});
  });
});


// 实用工具
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1900) {
            $(".rightSide").addClass("fix");
        } else {
            $(".rightSide").removeClass("fix");
        }
    });
});


// 企业
$(function() {
    var step = 300;
    var posFlag = 0;
    var num = 3;
    var clickFlag1 = true;
    var clickFlag2 = true;
    $(".cylb-left").on("click",
    function() {
        if (!clickFlag2) {
            return false;
        }
        posFlag = $(".cylb-content")[0].offsetLeft;
        var _x = posFlag + step;
        if (_x > 0) {
            $(".cylb-content")[0].style.left = -(step * num) + "px";
            posFlag = $(".cylb-content")[0].offsetLeft;
            _x = posFlag + step;
        }
        clickFlag2 = false;
        $(".cylb-contenter .cylb-content").animate({
            "left": _x + "px"
        },
        function() {
            clickFlag2 = true;
        });
    });
    $(".cylb-right").on("click",
    function() {
        if (!clickFlag1) {
            return false;
        }
        posFlag = $(".cylb-content")[0].offsetLeft;
        var _x = posFlag - step;
        if (_x < -(step * num)) {
            $(".cylb-content")[0].style.left = 0 + "px";
            posFlag = $(".cylb-content")[0].offsetLeft;
            _x = posFlag - step;
        }
        clickFlag1 = false;
        $(".cylb-contenter .cylb-content").animate({
            "left": _x + "px"
        },
        function() {
            clickFlag1 = true;
        });
    });
});

// 广告位
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

// 其他分类

$(function() {
    var step = 300;
    var posFlag = 0;
    var num = 3;
    var clickFlag1 = true;
    var clickFlag2 = true;
    $(".rmfl-left").on("click",
    function() {
        if (!clickFlag2) {
            return false;
        }
        posFlag = $(".rmfl-content")[0].offsetLeft;
        var _x = posFlag + step;
        if (_x > 0) {
            $(".rmfl-content")[0].style.left = -(step * num) + "px";
            posFlag = $(".rmfl-content")[0].offsetLeft;
            _x = posFlag + step;
        }
        clickFlag2 = false;
        $(".rmfl-contenter .rmfl-content").animate({
            "left": _x + "px"
        },
        function() {
            clickFlag2 = true;
        });
    });
    $(".rmfl-right").on("click",
    function() {
        if (!clickFlag1) {
            return false;
        }
        posFlag = $(".rmfl-content")[0].offsetLeft;
        var _x = posFlag - step;
        if (_x < -(step * num)) {
            $(".rmfl-content")[0].style.left = 0 + "px";
            posFlag = $(".rmfl-content")[0].offsetLeft;
            _x = posFlag - step;
        }
        clickFlag1 = false;
        $(".rmfl-contenter .rmfl-content").animate({
            "left": _x + "px"
        },
        function() {
            clickFlag1 = true;
        });
    });
});
