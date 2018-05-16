$(function(){
    $(document).ready(function(e) {
      $(".zhan1").click(function(e) {
          $(".cha1 .more").toggle();
      });
      $(".zhan2").click(function(e) {
          $(".cha2 .more").toggle();
      });
      $(".zhan3").click(function(e) {
          $(".cha3 .more").toggle();
      });
      $(".zhan4").click(function(e) {
          $(".cha4 .more").toggle();
      });
      $(".zhan5").click(function(e) {
          $(".cha5 .more").toggle();
      });
      $(".zhan6").click(function(e) {
          $(".cha6 .more").toggle();
      });
      $(".zhan7").click(function(e) {
          $(".cha7 .more").toggle();
      });
    });
});

$(function(){
$(".show").click(function(){
  var _dataId = $(this).data("id")?0:1;
$(this).data("id",_dataId);
  if(_dataId){
    $(this).text("收起");
  }else {
    $(this).text("展开");
  }
})
})
