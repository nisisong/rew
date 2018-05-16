function left_list(){
	$(".zhankai input").click(function(){
		if($(this).is('.zhankai_btn')){
			$(this).removeClass('zhankai_btn').addClass('yincang_btn');
            $(".content_box1").css('height','auto');
		}else{
			$(this).removeClass('yincang_btn').addClass('zhankai_btn');
            $(".content_box1").css('height','200px');
		}
	});
}