/*
*
*@ author:sns
*@ date:2018-04-10
*/


$(function(){
  $(".zfmz .tab span").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    var index = $(this).index();
    number = index;
    $('.nr').hide();
    $('.nr:eq('+index+')').show();
  });
});
