// 导航菜单

function main(){
  $(function () {
      $(".nav_xia").on("mouseenter", function(){
        $(".box .con:nth-child("+($(this).index()+1)+")").css("display","block");
      });
      $(".nav_xia").on("mouseleave", function(){
        $(".box .con:nth-child("+($(this).index()+1)+")").css("display","none");
      });
      $(".nav_xia").on("mouseenter", function(){
        $(".box").css("display","block");
      });
      $(".nav_xia").on("mouseleave", function(){
        $(".box").css("display","none");
      });
      $(".con").on("mouseover", function(){
        $(this).css("display","block");
      });
      $(".con").on("mouseout", function(){
        $(this).css("display","none");
      });
      $(".box").on("mouseover", function(){
        $(this).css("display","block");
      });
      $(".box").on("mouseout", function(){
        $(this).css("display","none");
      });
    });
}
window.onload=function(){
  main();
}
