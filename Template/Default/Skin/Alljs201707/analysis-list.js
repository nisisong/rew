$(".content ul li .title .lian").click(function(){
    var $obj=$(this);
    var documentWidth=document.documentElement.clientWidth||document.body.clientWidth;
    var _scrollTop=document.body.scrollTop;
    var documentHeight=document.documentElement.clientHeight||document.body.clientHeight;//可见区域高度
    var _webHeight=document.body.scrollHeight;//网页高度
    //遮罩层出现
    $("#zhegai").css("height",_webHeight+"px").css("display","block");
    //目录页面跳出
    $("#ginPage").css({
        display:"block",
        left:Math.floor(documentWidth/2-1000/2),
        top:Math.floor(documentHeight/2-920/2+_scrollTop)
    });
    //禁止背景滚动
    // $('html,body').addClass('ovfHiden');
    //关闭目录页面
    $("#ginPage .close").click(function(){
        $("#ginPage").hide();//隐藏目录页面
        $("#zhegai").hide();//隐藏遮罩层
        // $('html,body').removeClass('ovfHiden');
    });
});
