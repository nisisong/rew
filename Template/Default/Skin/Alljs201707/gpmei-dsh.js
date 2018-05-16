$(function(){
  $(".f10cnt tbody tr td div").click(function(){
    var _dataId = $(this).is('.expansion1')?0:1;
    if(_dataId){
      $(this).removeClass('collapse1').addClass("expansion1").siblings().removeClass('expansion1');
    }else {
      $(this).addClass("collapse1").removeClass('expansion1').siblings().addClass("expansion1");
    }
  })
})

$(function(){
    open_ping();
    function open_ping(){
  	    $(".f10cnt tbody tr td div").on("click",function(){
            var _pinglun = $(".f10cnt tbody tr td div");
            for(var i=0;i<_pinglun.length;i++){
                if(this == _pinglun[i]){
    		        $($(".f10cnt .text")[i]).toggle();
     	        }
            }
  	    });
    }
})