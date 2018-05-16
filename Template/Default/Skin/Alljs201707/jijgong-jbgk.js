/*
*
*@ author:sns
*@ date:2018-04-03
*/


$(function(){
  $(".detail-link .arrow-icon").click(function(){
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
  	    $(".arrow-icon").on("click",function(){
            var _pinglun = $(".arrow-icon");
            for(var i=0;i<_pinglun.length;i++){
                if(this == _pinglun[i]){
    		        $($(".ttjj-table .detail")[i]).toggle();
     	        }
            }
  	    });
    }
})
