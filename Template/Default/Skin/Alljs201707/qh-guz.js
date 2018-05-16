$(document).ready(function(){
  $(".main-content span").hover(function(){
    $(".main-content span").stop();
    $(".main-content span").not(this).animate({"width":224},100);
    $(this).animate({"width":660},100);
    $(".main-content span .contenter").animate({"width":436},1000);
  })
})
