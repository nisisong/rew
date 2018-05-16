
$(function(){
	
	function isWeiXin(){
		
            var ua = window.navigator.userAgent.toLowerCase();
            
            if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                return true;
            }else{
                return false;
            }
    }
	
$(".xiazai-android").click(function(){
	
		if(isWeiXin()){
	
	       $('.blackCover').show();

	     }else{
	       	
	        $('.blackCover').hide();
	           
	     }
	
})
   
 
 $("body").on("click",".alertBtn",function(){
 	
 	 $('.blackCover').hide();  
 	
 })


	
})
	
	

