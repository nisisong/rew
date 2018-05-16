
$(function(){
    $('.content ul li').click(function(){
    		$(this).addClass('active').siblings().removeClass('active');
    		$('.content .contenter').hide().eq($(this).index()).show();
    	});
  	});
