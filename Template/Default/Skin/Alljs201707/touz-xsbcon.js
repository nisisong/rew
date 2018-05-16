
$(function(){
 $(".intro .intro-left .hd ul li img").mouseenter(function(){
  var bigImageURL = $(this).attr("bigImageURL");
  $(".intro .intro-left .bd ul li img").attr("src",bigImageURL);
 });
 $(".intro .intro-left .bd ul li img").load(
  function(){
   $(".intro .intro-left .hd ul li img").each(function(){
    var bigImageURL = $(this).attr("bigImageURL");
    img = new Image();
    img.src = bigImageURL;
   });
  }
 );
});
