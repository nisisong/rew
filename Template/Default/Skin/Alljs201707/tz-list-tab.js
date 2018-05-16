// 弹窗
$(function(){
  $(".Entrepreneurship .list li .button .bt").click(function(){
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
// tab切换
$(function(){
  $(".ListTab span").click(function(){
    var index = $(this).index();
    number = index;
    $('.tab_List').hide();
    $('.tab_List:eq('+index+')').show();
  });
  $(".ListTab span").click(function(){
    $(this).addClass('tab-on').siblings().removeClass('tab-on');
    $(this).children('i').addClass('cur').parents('span').siblings().children('i').removeClass('cur');
  });
});