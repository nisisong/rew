
$(function(){
  $('.tabBar .tabBar-content .tab-title li').click(function(){
  	$(this).addClass('active').siblings().removeClass('active');
  	$('.tab').hide().eq($(this).index()).show();
  });
});
