$(".st_2016_list .st_hour .rgh .tit").click(function(){
    var $obj=$(this);
    var documentWidth=document.documentElement.clientWidth||document.body.clientWidth;
    var _scrollTop=document.body.scrollTop;
    var documentHeight=document.documentElement.clientHeight||document.body.clientHeight;//可见区域高度
    var _webHeight=document.body.scrollHeight;//网页高度
    //遮罩层出现
    $("#zhegai").css("height",_webHeight+"px").css("display","block");
    pageGo($obj.attr("item"));
    //目录页面跳出
    $("#ginPage").css({
        display:"block",
        left:Math.floor(documentWidth/2-880/2),
        top:Math.floor(documentHeight/2-1500/2+_scrollTop)
    });
    //关闭目录页面
    $("#ginPage .close").click(function(){
        $("#ginPage").hide();//隐藏目录页面
        $("#zhegai").hide();//隐藏遮罩层
    });
});
$(".st_2016_list .st_hour .rgh .img").click(function(){
    var $obj=$(this);
    var documentWidth=document.documentElement.clientWidth||document.body.clientWidth;
    var _scrollTop=document.body.scrollTop;
    var documentHeight=document.documentElement.clientHeight||document.body.clientHeight;//可见区域高度
    var _webHeight=document.body.scrollHeight;//网页高度
    //遮罩层出现
    $("#zhegai").css("height",_webHeight+"px").css("display","block");
    pageGo($obj.attr("item"));
    //目录页面跳出
    $("#ginPage").css({
        display:"block",
        left:Math.floor(documentWidth/2-880/2),
        top:Math.floor(documentHeight/2-880/2+_scrollTop)
    });
    //关闭目录页面
    $("#ginPage .close").click(function(){
        $("#ginPage").hide();//隐藏目录页面
        $("#zhegai").hide();//隐藏遮罩层
    });
});





// $(".ma_list .ma_hour h6").click(function(){
//     var documentWidth=document.documentElement.clientWidth||document.body.clientWidth;
//     var _scrollTop=document.body.scrollTop;
//     var documentHeight=document.documentElement.clientHeight||document.body.clientHeight;//可见区域高度
//     var _webHeight=document.body.scrollHeight;//网页高度
//     //遮罩层出现
//     $("#zhegai").css("height",_webHeight+"px").css("display","block");
//     //目录页面跳出
//     $("#ginPage").css({
//         display:"block",
//         left:Math.floor(documentWidth/2-880/2),
//         top:Math.floor(documentHeight/2-1500/2+_scrollTop)
//     });
//     //关闭目录页面
//     $("#ginPage .close").click(function(){
//         $("#ginPage").hide();//隐藏目录页面
//         $("#zhegai").hide();//隐藏遮罩层
//     });
// });



$(function(){
 $(document).on("click",".head",function(){
   $(this).closest(".st_2016_list").find(".con").toggle();
 })
});


$(function(){
  var imgUp = "/Template/Default/Skin/img201707/tuoup.png";
var imgDown = "/Template/Default/Skin/img201707/tuodwon.png";
  $(document).on("click",".head",function(){
     //.toggle();

      if($(this).data("id")){
        //表示收起
        $(this).data("id",0).find("img").attr("src",imgUp);
        // $(this).closest(".st_2016_list").find(".con").hide();
      }else{

        //表示展开
        $(this).data("id",1).find("img").attr("src",imgDown);
        // $(this).closest(".st_2016_list").find(".con").show();
      }

  })
})


$(function(){
  $(".mul").click(function(){
      $(".ma").toggle();
      // $(".up-xiaoh").toggle();
  });
})



$(function(){
 $(document).on("click",".head",function(){
   $(this).closest(".ma_list").find(".con").toggle();
 })
});



$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1200) {
            $(".content-ma").addClass("fix");
        } else {
            $(".content-ma").removeClass("fix");
        }
    });
});
