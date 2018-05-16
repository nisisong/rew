$(function(){
  $('.region-Province #pull_down').each(function(){
    $(this).mouseover(function(){$(this).children("ul").show()});
});
  $('.region-Province #pull_down').each(function(){
    $(this).mouseout(function(){$(this).children("ul").hide()});
  });
  $('.industry-class #pull_down').each(function(){
    $(this).mouseover(function(){$(this).children("ul").show()});
});
  $('.industry-class #pull_down').each(function(){
    $(this).mouseout(function(){$(this).children("ul").hide()});
  });
  $('.market-class #pull_down').each(function(){
    $(this).mouseover(function(){$(this).children("ul").show()});
});
  $('.market-class #pull_down').each(function(){
    $(this).mouseout(function(){$(this).children("ul").hide()});
  });
});


// 返回顶部
$(function() {
  $(window).scroll(function () {
    if($(window).scrollTop()>=500) {
      $(".sidebar").fadeIn(400); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
    }else {
      $(".sidebar").fadeOut(400); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到 顶部图标隐藏 */
    }
  });
});
