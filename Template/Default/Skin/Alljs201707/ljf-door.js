$(function(){
  $('.flow ul li').click(function(){
  	$(this).addClass('active').siblings().removeClass('active');
  	$('.tabBar').hide().eq($(this).index()).show();
  });
});
