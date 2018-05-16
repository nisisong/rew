

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
  $(".plate .tab").click(function(){
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
  	$(this).addClass('active').siblings().removeClass('active');
  });
});


$(function(){
  $('.qie div ul li .text').click(function(){
  	$(this).addClass('red').siblings().removeClass('red');
  });
});

$('.qie .net .hey').mouseover(function(){
                     $('.show-content').show();
		$(this).addClass('active').siblings().removeClass('active');
		$('.qie .cont').hide().eq($(this).index()).show();
	});
  $('.qie .cont').mouseleave(function(){
    $('.qie .net .hey').removeClass('active');
  		$('.qie .cont').hide();
  	});

$('.qie').mouseleave(function(){
$('.qie .net .hey').removeClass('active');
    $('.show-content').hide();
  	});
