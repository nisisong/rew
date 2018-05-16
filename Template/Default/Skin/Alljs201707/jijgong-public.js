$(function(){
	left_list();
});
//左侧列表
function left_list(){
	$(".plate .tab").click(function(){
		if($(this).next().css("display")=="block"){
			$(this).next().css("display","none");
      $(this).find("img").attr("src","../../Skin/img201707/gp-xsbdown.png");
		}else{
			$(this).next().css("display","block");
      $(this).find("img").attr("src","../../Skin/img201707/gp-xsbup.png");
		}
	});
}

$(function(){
  $(".public_title .ttjj-select").click(function(){
    $(".public_title .ttjj-select ul").toggle();
  })
});
