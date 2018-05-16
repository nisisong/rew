$(function(){
  $(".mode").click(function(){
    var _dataId = $(this).data("id")?0:1;
  $(this).data("id",_dataId);
    if(_dataId){
      $("#qyt").attr("src","../../Skin/img201707/xg-dianh.png");
    }else {
      $("#qyt").attr("src","../../Skin/img201707/xg-tuo.png");;
    }
  })
})
