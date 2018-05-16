function main(){
  $(function () {
      $(".zb").on("mouseenter", function(){
        $(".zbimg").attr("src","../../Skin/img201707/ky-zhibl.png");
        $(".strata1").css("display","block");
      });
      $(".zb").on("mouseleave", function(){
        $(".zbimg").attr("src","../../Skin/img201707/ky-zhibh.png");
        $(".strata1").css("display","none");
      });


      $(".hq").on("mouseenter", function(){
        $(".hqimg").attr("src","../../Skin/img201707/ky-hql.png");
        $(".strata2").css("display","block");
      });
      $(".hq").on("mouseleave", function(){
        $(".hqimg").attr("src","../../Skin/img201707/ky-hqh.png");
        $(".strata2").css("display","none");
      });



      $(".fx").on("mouseenter", function(){
        $(".fximg").attr("src","../../Skin/img201707/ky-fxsl.png");
        $(".strata3").css("display","block");
      });
      $(".fx").on("mouseleave", function(){
        $(".fximg").attr("src","../../Skin/img201707/ky-fxsh.png");
        $(".strata3").css("display","none");
      });


      $(".xw").on("mouseenter", function(){
        $(".xwimg").attr("src","../../Skin/img201707/ky-xwl.png");
        $(".strata4").css("display","block");
      });
      $(".xw").on("mouseleave", function(){
        $(".xwimg").attr("src","../../Skin/img201707/ky-xwh.png");
        $(".strata4").css("display","none");
      });


      $(".gzh").on("mouseenter", function(){
        $(".gzhimg").attr("src","../../Skin/img201707/ky-gzhl.png");
        $(".strata5").css("display","block");
      });
      $(".gzh").on("mouseleave", function(){
        $(".gzhimg").attr("src","../../Skin/img201707/ky-gzhh.png");
        $(".strata5").css("display","none");
      });

    });
}
window.onload=function(){
  main();
}
