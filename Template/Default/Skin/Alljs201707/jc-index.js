$(function (){
    $(".banner .search button").mousedown(function(){
    $(".banner .search button").css("background", " url(../../Skin/img201707/jc-anx.png) no-repeat center");
  });
    $(".banner .search button").mouseup(function(){
    $(".banner .search button").css("background", " url(../../Skin/img201707/jc-wan.png) no-repeat center");
  });
});


$(function() {
    var step =223;
    var posFlag = 0;
    var num = 5;
    var clickFlag1 = true;
    var clickFlag2 = true;
    $(".beginner-left").on("click",
    function() {
        if (!clickFlag2) {
            return false;
        }
        posFlag = $(".beginner-conten")[0].offsetLeft;
        var _x = posFlag + step;
        if (_x > 0) {
            $(".beginner-conten")[0].style.left = -(step * num) + "px";
            posFlag = $(".beginner-conten")[0].offsetLeft;
            _x = posFlag + step;
        }
        clickFlag2 = false;
        $(".beginner-rollcenter .beginner-conten").animate({
            "left": _x + "px"
        },
        function() {
            clickFlag2 = true;
        });
    });
    $(".beginner-right").on("click",
    function() {
        if (!clickFlag1) {
            return false;
        }
        posFlag = $(".beginner-conten")[0].offsetLeft;
        var _x = posFlag - step;
        if (_x < -(step * num)) {
            $(".beginner-conten")[0].style.left = 0 + "px";
            posFlag = $(".beginner-conten")[0].offsetLeft;
            _x = posFlag - step;
        }
        clickFlag1 = false;
        $(".beginner-rollcenter .beginner-conten").animate({
            "left": _x + "px"
        },
        function() {
            clickFlag1 = true;
        });
    });
});




$(function() {
    var step =223;
    var posFlag = 0;
    var num = 5;
    var clickFlag1 = true;
    var clickFlag2 = true;
    $(".advanced-left").on("click",
    function() {
        if (!clickFlag2) {
            return false;
        }
        posFlag = $(".advanced-conten")[0].offsetLeft;
        var _x = posFlag + step;
        if (_x > 0) {
            $(".advanced-conten")[0].style.left = -(step * num) + "px";
            posFlag = $(".advanced-conten")[0].offsetLeft;
            _x = posFlag + step;
        }
        clickFlag2 = false;
        $(".advanced-rollcenter .advanced-conten").animate({
            "left": _x + "px"
        },
        function() {
            clickFlag2 = true;
        });
    });
    $(".advanced-right").on("click",
    function() {
        if (!clickFlag1) {
            return false;
        }
        posFlag = $(".advanced-conten")[0].offsetLeft;
        var _x = posFlag - step;
        if (_x < -(step * num)) {
            $(".advanced-conten")[0].style.left = 0 + "px";
            posFlag = $(".advanced-conten")[0].offsetLeft;
            _x = posFlag - step;
        }
        clickFlag1 = false;
        $(".advanced-rollcenter .advanced-conten").animate({
            "left": _x + "px"
        },
        function() {
            clickFlag1 = true;
        });
    });
});




$(function() {
    var step =223;
    var posFlag = 0;
    var num = 5;
    var clickFlag1 = true;
    var clickFlag2 = true;
    $(".introduction-left").on("click",
    function() {
        if (!clickFlag2) {
            return false;
        }
        posFlag = $(".introduction-conten")[0].offsetLeft;
        var _x = posFlag + step;
        if (_x > 0) {
            $(".introduction-conten")[0].style.left = -(step * num) + "px";
            posFlag = $(".introduction-conten")[0].offsetLeft;
            _x = posFlag + step;
        }
        clickFlag2 = false;
        $(".introduction-rollcenter .introduction-conten").animate({
            "left": _x + "px"
        },
        function() {
            clickFlag2 = true;
        });
    });
    $(".introduction-right").on("click",
    function() {
        if (!clickFlag1) {
            return false;
        }
        posFlag = $(".introduction-conten")[0].offsetLeft;
        var _x = posFlag - step;
        if (_x < -(step * num)) {
            $(".introduction-conten")[0].style.left = 0 + "px";
            posFlag = $(".introduction-conten")[0].offsetLeft;
            _x = posFlag - step;
        }
        clickFlag1 = false;
        $(".introduction-rollcenter .introduction-conten").animate({
            "left": _x + "px"
        },
        function() {
            clickFlag1 = true;
        });
    });
});
