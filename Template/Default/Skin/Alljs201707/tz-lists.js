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
// 股权投资==投资类型+投资阶段 债权=风控要求 金融=风险偏好+产品偏好
$(function(){
    $(".guquan").on("click",function(){
        $(".tztype,.tzjd").removeClass("hide");
    });
    $(".zaiquan").on("click",function(){
        $(".fk").removeClass("hide");
    })
    $(".jinrong").on("click",function(){
        $(".fxph,.cpph").removeClass("hide");
    })
})
// 生成标记
function createLink (id, dataVal, text) {
  var el = $("<a rel='nofollow'></a>").html(text).attr('id', 'S-' + id).attr('data-val', dataVal).append('<span class="tit-close">x</span>')
  return el
}
//恢复
$(document).ready(function(){
  $(document).on('click','.tit-close',function(event) {
    var getClass = $(this).parent().remove().attr('data-val');   
    $('.'+ getClass).parents('.xztj').css('display', 'block');
    $('.'+ getClass).parents('.part-choose-list-a-cont').removeClass('part-heigt-s');
     $('.'+ getClass).parents('.part-choose-list-a-cont').prev('.section').find('.j-multi-more').html('更多');
    $('.'+ getClass).parents('.part-choose-list-a-cont').prev('.section').find('.small-icon-24').css('backgroundPosition','-127px -8px');
    if(getClass=="cat_id"){
    	$(".fxph,.cpph,.fk,.tztype,.tzjd").addClass("hide");
    }
  })
});
//更多 收起
$(function(){
  $(".xztj .section .fn-more").click(function(){
    if($(this).parents('.section').siblings('.part-choose-list-a-cont').hasClass('part-heigt-s')){
        $(this).parents('.section').siblings('.part-choose-list-a-cont').removeClass('part-heigt-s');
        $(this).children('i').css('backgroundPosition','-127px -8px');
        $(this).children('span').html('更多');
        $(this).siblings(".part-multi-select").removeClass('fn-v-hide1');
        $(this).parents('.section').siblings('.part-choose-list-a-cont').children('p').children('a').children('i').removeClass("i-show");
        $('.part-choose-list-a-cont').find('a').removeClass("cur");
        $(".ui-btn").addClass('hide');
    }else{
        $(this).parents('.section').siblings('.part-choose-list-a-cont').addClass('part-heigt-s');
        $(this).children('i').css('backgroundPosition','-107px -68px');
        $(this).children('span').html('收起');
    }       
  });
});
//多选按钮
$("#morechoose").on("click",function(){
	$(".ui-btn").removeClass("hide");
        $(this).parents('.section').siblings('.part-choose-list-a-cont').addClass('part-heigt-s');
        $(this).siblings('a').children('i').css('backgroundPosition','-107px -68px');
        $(this).parents('.section').siblings('.part-choose-list-a-cont').children('p').children('a').children('i').addClass("i-show");
        $(this).addClass('fn-v-hide1');
        $(this).siblings('a').children('.xztj .section .j-multi-more').html('收起');  
})

//单选or多选
$('.part-choose-list-a-cont').children("p").find('a').click(function(event) {
	if ($(this).find("i").hasClass("i-show")){
     $(this).toggleClass('cur');
  }else{
   var id =$(this).attr('class');
   var textone = $(this).find('span').html();
   var tetxtwo = $(this).parents('.part-choose-list-a-cont').siblings('.aside').html();
   var text = tetxtwo + textone; 
   console.log(id);
   if(id!=="item"){
   	$('.part-title-nav-list').append(createLink(id, id, text))
   	 $(this).parents('.xztj').css('display','none');
   } 
  }
});
// 确定按钮绑定事件
$('.part-choose-list-a-cont').find('.ui-btn-orange').click(function(event) {
  var dom = $(this).parent().siblings('p').find('.cur');
  console.log(dom)
  if (dom.length == 0 ) {
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
     $(this).parents('.part-choose-list-a-cont').children('p').children('a').children('i').addClass("i-show");
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('.part-multi-select').removeClass('fn-v-hide1')
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('a').children('.xztj .section .j-multi-more').html('更多');
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('a').children('.section .small-icon-24').css('backgroundPosition','-127px -8px');
    $(this).parents('.xztj').css('display','none');
    $(".part-choose-list-a-cont").find("i").removeClass("i-show");
    $(".part-choose-list-a-cont").find("i").removeClass("cur");
    $(this).parents('.part-choose-list-a-cont').siblings('section').find('.j-multi-more').trigger('click')
  }
});
// 取消按钮绑定事件
$('.part-choose-list-a-cont').find('.ui-btn-gray').click(function(event) {
  var dom = $(this).parent().siblings('p').find('.cur');
  dom.removeClass('cur');
  $(this).parents('.part-choose-list-a-cont').removeClass('part-heigt-s');
  $(this).parents('.part-choose-list-a-cont').children('p').children('a').children('i').removeClass("i-show");
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('.part-multi-select').removeClass('fn-v-hide1')
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('a').children('.xztj .section .j-multi-more').html('更多');
    $(this).parents('.part-choose-list-a-cont').siblings('.section').children('a').children('.section .small-icon-24').css('backgroundPosition','-127px -8px');
})
//滑动出现
$("#J_indu_single_art .item").mouseover(function() {
				var a = $(this).attr("data-id");
//				$(this).addClass("current").siblings().removeClass("current");
				$("#J_indu_single_item").show();
				$("#J_indu_single_item").find("li").hide();
				$("#J_indu_single_item").find(".indup" + a).show();
				$(this).find("i").css('backgroundPosition','-107px -68px');
			})
$("#J_indu_single_art .item").mouseout(function(){
//	 $(this).removeClass("current");
	 $("#J_indu_single_item").hide();
	 $(this).find("i").css('backgroundPosition','-127px -8px');
})
$("#J_indu_single_item").mouseover(function(){
	$(this).show();
	
})
$("#J_indu_single_item").mouseout(function(){
	$(this).hide();
})
//投资行业单选

$("#J_indu_single_item").find("a").on("click",function(){
	$("#S-industry_id").remove();
	var id =$(this).attr('class');
	var textone = $(this).html();
   var tetxtwo = "投资行业： ";
   var text = tetxtwo + textone; 
   $('.part-title-nav-list').append(createLink(id, id, text))
})
//收起
$("#hyclose,#J_indu_multi_cancel").on("click",function(){
	$("#J_indu_multi_single").show();
				$(".industry_id").find("i").css('display','none');
				$("#J_indu_multi_art").hide();
				$("#J_indu_multi_item").find("a").removeClass("cur");
})
$("#J_indu_multi_item").find("a").on("click",function(){
	$(this).toggleClass("cur");
})

//投资行业多选
			$("#J_indu_multi_btn").click(function() {
				$("#J_indu_multi_single").hide();
				$(".industry_id").find("i").css('display','inline-block');
				$("#J_indu_multi_art").show();
			})
			$("#J_indu_multi>a").click(function() {
				var a = $(this).attr("data-id");
				$("#J_indu_multi>a").removeClass("current");
				$(this).addClass("current");
				if(a==undefined){
					$("#J_indu_multi_item .checkbox").show()
				}else{
					$("#J_indu_multi_item .checkbox").hide() ;
				$("#J_indu_multi_item .indup" + a).show()
				}
			})
		$("#J_indu_multi_ok").on("click",function(){
			  var dom = $(this).parent().siblings('div').find('.cur');
        console.log(dom);
         if (dom.length == 0 ) {
    return
  } else {
  	$("#S-industry_id").remove();
  	var id = dom.attr('class').split(' ')[0];
    var str = '';
    for(var i = 0; i<dom.length; i++) {
      str = str +','+ $(dom[i]).find('span').html();
    }
    var text = "投资行业：" + str.substr(1,str.length-1);
    $('.part-title-nav-list').append(createLink(id, id, text));
    	$("#J_indu_multi_single").show();
				$(".industry_id").find("i").css('display','none');
				$("#J_indu_multi_art").hide();
				$("#J_indu_multi_item").find("a").removeClass("cur");
  }
		})

// 鼠标划过
$(function(){
  $(".choose_name .choose-brand a").click(function(){
    if($(this).hasClass('choose-on')){
        $(this).removeClass('choose-on').removeClass('curr');
    }else{
        $(this).addClass('choose-on').removeClass('curr');
    }       
  });
});
// tab切换
$(function(){
  $(".article .part-choose-list-a-cont div a").mouseover(function(){
    $(this).addClass('current');
  });
  $(".article .part-choose-list-a-cont div a").mouseout(function(){
    $(this).removeClass('current');
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