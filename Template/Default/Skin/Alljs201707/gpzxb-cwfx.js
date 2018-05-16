$(function(){
  $(".dbfx .tBr span").click(function(){
    $(this).addClass('sele').siblings().removeClass('sele');
    var index = $(this).index();
    number = index;
    $('.switch').hide();
      $('.switch').hide().eq($(this).index()).show();
    // $('.switch:eq('+index+')').show();
  });
});


$(function(){
  $(".switch .sun span").click(function(){
    $(this).addClass('pick').siblings().removeClass('pick');
    var index = $(this).index();
    number = index;
    $('.switch-content').hide();
    $('.switch-content').hide().eq($(this).index()).show();
  });
});


$(function(){
  $(".switch .sunsam span").click(function(){
    $(this).addClass('pick').siblings().removeClass('pick');
    var index = $(this).index();
    number = index;
    $('.switch-center').hide();
    $('.switch-center').hide().eq($(this).index()).show();
  });
});


$(function(){
  $(".bbmx .taBr span").click(function(){
    $(this).addClass('xian').siblings().removeClass('xian');
    var index = $(this).index();
    number = index;
    $('.tabrs').hide();
    $('.tabrs').hide().eq($(this).index()).show();
  });
});


$(function(){
  $(".bfbbb .ten span").click(function(){
    $(this).addClass('onc').siblings().removeClass('onc');
    var index = $(this).index();
    number = index;
    $('.single').hide();
    $('.single').hide().eq($(this).index()).show();
  });
});
