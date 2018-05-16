$(function(){
  $(".gjzbBox .tab span").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    var index = $(this).index();
    number = index;
    $('.f10cnt').hide();
    $('.f10cnt:eq('+index+')').show();
  });
});