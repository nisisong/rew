$(function(){
  $(".executives-resume").click(function(){
    var _dataId = $(this).data("id")?0:1;
  $(this).data("id",_dataId);
    if(_dataId){
      $(this).addClass("restive").siblings().removeClass('restive');
    }else {
      $(this).removeClass('restive').siblings().addClass("restive");
    }
  })
})

$(function(){
  open_ping();
  function open_ping(){
  	 $(".executives-resume").on("click",function(){
       var _pinglun = $(".executives-resume");
      //  console.log($(".cn_comment"));
       for(var i=0;i<_pinglun.length;i++){
         if(this == _pinglun[i]){
    			$($(".executives-resume-info")[i]).toggleClass("infotive");
     		}
      }
  	 });
  }
})
