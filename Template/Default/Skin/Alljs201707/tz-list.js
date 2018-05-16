// 弹窗
$(function(){
  $(".listBottom ul .liebiao .infoBox .right").click(function(){
    $('.downloadBox').show();
    $(".tc").hide();
    $(".download").show();
  });
  $(".download .title .close").click(function(){
    $(".downloadBox").hide();
  });
});
$(function(){
  $(".download .Button").click(function(){
    $('.tc').show();
    $(".download").hide();
  });
  $(".tc .title .close").click(function(){
    $(".downloadBox").hide();
  });
});
$(function(){
    $(".download .yzm .button").click(function(){
        $('.download .yzm .button .fs').css('display','none');
        $('.download .yzm .button .yfs').css('display','block');
        $('.download .cwts').css('display','block');
        $('.download .cwts .ts1').css('display','block');
        var counter = 60;
        function runCounter() { 
            if (counter == 0) {
               $('.download .yzm .button .cfs').css('display','block');
               $('.download .yzm .button .yfs').css('display','none');
            } else {
                document.getElementById("countdown-timer").innerText=--counter;
                setTimeout(runCounter, 1000);
            }
        }
        runCounter();
    });
    $(".download .Button").click(function(){
        $('.download .cwts').css('display','block');
        $('.download .cwts2').css('display','block');
        $('.download .cwts .ts2').css('display','block');
    });
    $(".download .phone input").click(function(){
        $('.download .cwts').css('display','none');
        $('.download .cwts .ts1').css('display','none');
        $('.download .cwts .ts2').css('display','none');
    });
    $(".download .yzm input").click(function(){
        $('.download .cwts2').css('display','none');
    });
})
// 选择条件
$(function(){
  $(".xztj .section .fn-more").click(function(){
    if($(this).parents('.section').siblings('.part-choose-list-a-cont').hasClass('part-heigt-s')){
        $(this).parents('.section').siblings('.part-choose-list-a-cont').removeClass('part-heigt-s');
        $(this).children('i').css('backgroundPosition','-127px -8px');
        $(this).children('span').html('更多');
        $(this).siblings(".part-multi-select").removeClass('fn-v-hide1');
        $(this).parents('.section').siblings('.part-choose-list-a-cont').children('p').children('a').children('i').css('display','none');
    }else{
        $(this).parents('.section').siblings('.part-choose-list-a-cont').addClass('part-heigt-s');
        $(this).children('i').css('backgroundPosition','-107px -68px');
        $(this).children('span').html('收起');
    }       
  });
});
$(function(){
  $(".part-multi-select").click(function(){
    if($(this).parents('.section').siblings('.part-choose-list-a-cont').hasClass('part-heigt-s')){

    }else{
        $(this).parents('.section').siblings('.part-choose-list-a-cont').addClass('part-heigt-s');
        $(this).siblings('a').children('i').css('backgroundPosition','-107px -68px');
        $(this).parents('.section').siblings('.part-choose-list-a-cont').children('p').children('a').children('i').css('display','inline-block');
        $(this).addClass('fn-v-hide1');
        $(this).siblings('a').children('.xztj .section .j-multi-more').html('收起');
    }       
  });
});
// 生成标记
function createLink (id, dataVal, text) {
  var el = $("<a rel='nofollow'></a>").html(text).attr('id', 'S-' + id).attr('data-val', dataVal).append('<span class="tit-close">x</span>')
  return el
}
$('.part-choose-list-a-cont').find('a').click(function(event) {
  // 如果是多选
  if ($(this).parents('.part-choose-list-a-cont').hasClass('small-icon-gou')) {
     $(this).toggleClass('cur');
  } else {
  // 如果是单选
   var id =$(this).attr('class');
   var textone = $(this).find('span').html();
   var tetxtwo = $(this).parents('.part-choose-list-a-cont').siblings('.aside').html();
   var text = tetxtwo + textone;
   $('.part-title-nav-list').append(createLink(id, id, text))
   $(this).parents('.xztj').css('display','none');
  }

});
// 取消按钮绑定事件
$('.part-choose-list-a-cont').find('.ui-btn-gray').click(function(event) {
  var dom = $(this).parent().siblings('p').find('.cur');
  dom.removeClass('cur');
  $(this).parents('.part-choose-list-a-cont').removeClass('part-heigt-s');
  $(this).parents('.part-choose-list-a-cont').children('p').children('a').children('i').css('display','none');
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('.part-multi-select').removeClass('fn-v-hide1')
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('a').children('.xztj .section .j-multi-more').html('更多');
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('a').children('.section .small-icon-24').css('backgroundPosition','-127px -8px');
})
// 确定按钮绑定事件
$('.part-choose-list-a-cont').find('.ui-btn-orange').click(function(event) {
  var dom = $(this).parent().siblings('p').find('.cur');
  if (dom.length === 0 ) {
    return
  } else {
    var id = dom.attr('class').split(' ')[0];
    var str = '';
    for(var i = 0; i<dom.length; i++) {
      str = str +','+ $(dom[i]).find('span').html();
    }
    var text = $(this).parents('.xztj').find('.aside').html() + str.substr(1,str.length-1);
    $('.part-title-nav-list').append(createLink(id, id, text));
     $(this).parents('.part-choose-list-a-cont').removeClass('part-heigt-s');
     $(this).parents('.part-choose-list-a-cont').children('p').children('a').children('i').css('display','none');
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('.part-multi-select').removeClass('fn-v-hide1')
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('a').children('.xztj .section .j-multi-more').html('更多');
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('a').children('.section .small-icon-24').css('backgroundPosition','-127px -8px');
    $(this).parents('.xztj').css('display','none');
    $(this).parents('.part-choose-list-a-cont').siblings('section').find('.j-multi-more').trigger('click')
  }
});
//删除
$(document).ready(function(){
  $(document).on('click','.tit-close',function(event) {
    var getClass = $(this).parent().css('display','none').attr('data-val')
    $('.'+ getClass).parents('.xztj').css('display', 'block');
  })
});

// tab切换
$(function(){
  $(".navButton ul li").click(function(){
    var index = $(this).index();
    number = index;
    $('.listBottom').hide();
    $('.listBottom:eq('+index+')').show();
  });
  $(".navButton ul li").click(function(){
    $(this).addClass('Selection').siblings().removeClass('Selection');
    $(this).children('i').addClass('icon-up').removeClass('icon-down');
    $(this).siblings().children('i').addClass('icon-down').removeClass('icon-up');
  });
});

// 实用工具
$(function() {
    // 固定
    $(window).scroll(function() {
        var t = $(".rightSide").offset().top;
        if ($(window).scrollTop() >= t) {
            $(".content .content-right .wz_tool").addClass("fix");
            /* 当滑动到不小于 100px 时，回到顶部图标显示 */
        } else {
            $(".content .content-right .wz_tool").removeClass("fix");
            /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
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