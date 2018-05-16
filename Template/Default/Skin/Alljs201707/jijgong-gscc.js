/*
*
*@ author:sns
*@ date:2018-04-08
*/


$(function(){
  $(".more").click(function(){
    var _dataId = $(this).data("id")?0:1;
  $(this).data("id",_dataId);
    if(_dataId){
      $(this).text("收起持仓明细>>");
    }else {
      $(this).text("显示全部持仓明细>>");
    }
  })
})


$(function(){
    open_ping();
    function open_ping(){
  	    $(".more").on("click",function(){
            var _pinglun = $(".more");
            for(var i=0;i<_pinglun.length;i++){
                if(this == _pinglun[i]){
    		        $($(".ttjj-table .hide")[i]).toggle();
                $(".xin").css("height","auto");
     	        }
            }
  	    });
    }
})
