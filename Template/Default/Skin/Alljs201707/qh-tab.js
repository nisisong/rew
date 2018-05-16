$(function(){
  $(".tabBox1 .tab span").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    var index = $(this).index();
    number = index;
    $('.tabBox1 .nr').hide();
    $('.tabBox1 .nr:eq('+index+')').show();
  });
});
$(function(){
  $(".tabBox2 .tab span").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    var index = $(this).index();
    number = index;
    $('.tabBox2 .nr').hide();
    $('.tabBox2 .nr:eq('+index+')').show();
  });
});

