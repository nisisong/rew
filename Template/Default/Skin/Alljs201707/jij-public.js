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





// 返回顶部
$(function() {
  $(window).scroll(function () {
    if($(window).scrollTop()>=500) {
      $(".sidebar").fadeIn(400); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
    }else {
      $(".sidebar").fadeOut(400); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到 顶部图标隐藏 */
    }
  });
});
