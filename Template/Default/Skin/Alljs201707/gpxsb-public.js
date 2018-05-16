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


function lxfEndtime(){
  $t=$('#t').html();
  if($t!=0){
    $('#t').html($t-1);
    $i=setTimeout("lxfEndtime()",1000);
  }else{
    $('.xlBox').animate({"margin-top":"-600px"},1000);
    $('.bt1').animate({"right":"120px"},1000);
    $('#t').html(5);
    clearTimeout($i);
  }
};
$()
$(document).ready(function(){
  lxfEndtime();
  $('.close').click(function(){
    $('.xlBox').animate({"margin-top":"-600px"},1000);
    $('.bt1').animate({"right":"120px"},1000);
    $('#t').html(5);
    clearTimeout($i);
  })
});
