// 实用工具
$(function() {
    var t = $(".zjlx table thead").offset().top;
    // 固定
    $(window).scroll(function() {
        if ($(window).scrollTop() >= t) {
            $(".zjlx table thead").addClass("fix");
            /* 当滑动到不小于 100px 时，回到顶部图标显示 */
        } else {
            $(".zjlx table thead").removeClass("fix");
            /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
        }
    });
});
