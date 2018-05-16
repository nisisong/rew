// 现任
$(function(){
  $(".xr tbody tr td i").click(function(){
    var _dataId = $(this).is('.icon-down')?0:1;
    if(_dataId){
      $(this).removeClass('icon-up').addClass("icon-down").siblings().removeClass('icon-down');
    }else {
      $(this).addClass("icon-up").removeClass('icon-down').siblings().addClass("icon-down");
    }
  })
})

$(function(){
    open_ping();
    function open_ping(){
  	    $(".xr tbody tr td i").on("click",function(){
            var _pinglun = $(".xr tbody tr td i");
            for(var i=0;i<_pinglun.length;i++){
                if(this == _pinglun[i]){
    		        $($(".xr .managerDesc")[i]).toggle();
     	        }
            }
  	    });
    }
})
// 历任
$(function(){
  $(".lr tbody tr td i").click(function(){
    var _dataId = $(this).is('.icon-down')?0:1;
    if(_dataId){
      $(this).removeClass('icon-up').addClass("icon-down").siblings().removeClass('icon-down');
    }else {
      $(this).addClass("icon-up").removeClass('icon-down').siblings().addClass("icon-down");
    }
  })
})
$(function(){
    open_ping();
    function open_ping(){
  	    $(".lr tbody tr td i").on("click",function(){
            var _pinglun = $(".lr tbody tr td i");
            for(var i=0;i<_pinglun.length;i++){
                if(this == _pinglun[i]){
    		        $($(".lr .managerDesc")[i]).toggle();
     	        }
            }
  	    });
    }
})