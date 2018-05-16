$(function(){
  $('.tab-title ul li').click(function(){
  	// $(this).addClass('active').siblings().removeClass('active');
    $('.tab-title ul li span').removeClass('active').eq($(this).index()).addClass('active').siblings();
  	$('.taBer').hide().eq($(this).index()).show();
  });
});
