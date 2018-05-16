$(function(){
  $(".xin .taB span").click(function(){
    $(this).addClass('one').siblings().removeClass('one');
    var index = $(this).index();
    number = index;
    $('.tb').hide();
      $('.tb').hide().eq($(this).index()).show();
  });
});


$(function(){
  $(".jjcy .taBar span").click(function(){
    $(this).addClass('own').siblings().removeClass('own');
    var index = $(this).index();
    number = index;
    $('.wich').hide();
      $('.wich').hide().eq($(this).index()).show();
  });
});


$(function(){
  $(".bian .tab span").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    var index = $(this).index();
    number = index;
    $('.nr').hide();
      $('.nr').hide().eq($(this).index()).show();
  });
});
