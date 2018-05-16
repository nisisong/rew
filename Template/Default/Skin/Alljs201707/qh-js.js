$(function(){

  $(".hand-expire").on("click",function () {
    $(".hand-expire").css("background","url(../../Skin/img201707/js-dqd.png) no-repeat center");
    $(".hand-turn").css("background","url(../../Skin/img201707/js-qz.png) no-repeat center");
    $(".hand-careful").css("background","url(../../Skin/img201707/js-zy.png) no-repeat center");
      $(".cut-content").css("display","block");
      $(".cut-content2").css("display","none");
      $(".cut-content3").css("display","none");
  });

  $(".hand-turn").on("click",function () {
    $(".hand-expire").css("background","url(../../Skin/img201707/js-dq.png) no-repeat center");
    $(".hand-turn").css("background","url(../../Skin/img201707/js-qzd.png) no-repeat center");
    $(".hand-careful").css("background","url(../../Skin/img201707/js-zy.png) no-repeat center");
      $(".cut-content").css("display","none");
      $(".cut-content3").css("display","none");
      $(".cut-content2").css("display","block");

  });

  $(".hand-careful").on("click",function () {
    $(".hand-expire").css("background","url(../../Skin/img201707/js-dq.png) no-repeat center");
    $(".hand-turn").css("background","url(../../Skin/img201707/js-qz.png) no-repeat center");
    $(".hand-careful").css("background","url(../../Skin/img201707/js-zyd.png) no-repeat center");
      $(".cut-content3").css("display","block");
      $(".cut-content2").css("display","none");
      $(".cut-content1").css("display","none");
  })

});
