
$(function(){
	left_list();
});
//左侧列表
function left_list(){
	$(".plate .tab").click(function(){
		if($(this).next().css("display")=="block"){
			$(this).next().css("display","none");
      $(this).find("img").attr("src","../../Skin/img201707/gpl-sandown.png");
		}else{
			$(this).next().css("display","block");
      $(this).find("img").attr("src","../../Skin/img201707/gpl-sanup.png");
		}
	});
}



$(function(){
  $(".plate .net li").click(function(){
    var _dataId = $(this).data("id")?0:1;
  $(this).data("id",_dataId);
    if(_dataId){
    $(this).addClass('active').siblings();
    }else {
    $(this).removeClass('active').siblings();
    }
  })
})

$(function(){
  $('.net li').click(function(){
          $("*").removeClass('active');
          $("*").removeClass('tivt');
  	$(this).addClass('active').siblings().removeClass('active');
  });
});
$(function(){
  $('.level .plate-title').click(function(){
          $("*").removeClass('active');
          $("*").removeClass('tivt');
  	$(this).addClass('tivt').siblings().removeClass('tivt');
  });
});
