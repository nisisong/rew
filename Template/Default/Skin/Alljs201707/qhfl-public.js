$(function() {
    // 固定
    $(window).scroll(function() {
        var t = $(".container .leftBox").offset().top;
        if ($(window).scrollTop() >= t) {
            $(".left").addClass("fix");
            /* 当滑动到不小于 100px 时，回到顶部图标显示 */
        } else {
            $(".left").removeClass("fix");
            /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
        }
    });
    $('.container .left .mlj li').each(function(){
      $(this).click(function(){
        $(this).addClass("active").siblings().removeClass("active")
      })
    })
});


// 菜单
$(function(){
    left_list();
});
//左侧列表
function left_list(){
    $(".mlj .tab").click(function(){
        if($(this).next().css("display")=="block"){
            $(this).next().css("display","none");
            $(this).find("img").attr("src","../../Skin/img201707/qh-down.png");
        }else{
            $(this).next().css("display","block");
            $(this).find("img").attr("src","../../Skin/img201707/qh-up.png");
        }
    });
    $('.container .left .mlj .tab li').each(function(){
      $(this).click(function(){
        $(this).addClass("active").siblings().removeClass("active")
      })
    })
}