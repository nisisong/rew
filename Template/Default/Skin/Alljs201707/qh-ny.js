$(function(){
  // $(".tab_one").on("click",function(){
  //     $(this).css("background","url(../../Skin/img201707/ny-cbc.png) no-repeat center");
  // });
  // $(".tab_two").on("click",function(){
  //     $(this).css("background","url(../../Skin/img201707/ny-jiec.png) no-repeat center");
  // });
  // $(".tab_three").on("click",function(){
  //     $(this).css("background","url(../../Skin/img201707/ny-cyc.png) no-repeat center");
  // });
  // $(".tab_four").on("click",function(){
  //     $(this).css("background","url(../../Skin/img201707/ny-qisc.png) no-repeat center");
  //   });
  $(".tab_one").on("click",function () {
      $(".tab_one").css("background","url(../../Skin/img201707/ny-cbc.png) no-repeat center");
      $(".tab_two").css("background","url(../../Skin/img201707/ny-jie.png) no-repeat center");
      $(".tab_three").css("background","url(../../Skin/img201707/ny-cy.png) no-repeat center");
      $(".tab_four").css("background","url(../../Skin/img201707/ny-qis.png) no-repeat center");
      $(".Tab_three").css("display","none");
      $(".Tab_one").css("display","block");
      $(".Tab_two").css("display","none");
      $(".Tab_four").css("display","none");
  });

  $(".tab_two").on("click",function () {
    $(".tab_one").css("background","url(../../Skin/img201707/ny-cb.png) no-repeat center");
    $(".tab_two").css("background","url(../../Skin/img201707/ny-jiec.png) no-repeat center");
    $(".tab_three").css("background","url(../../Skin/img201707/ny-cy.png) no-repeat center");
    $(".tab_four").css("background","url(../../Skin/img201707/ny-qis.png) no-repeat center");
      $(".Tab_one").css("display","none");
      $(".Tab_three").css("display","none");
      $(".Tab_two").css("display","block");
      $(".Tab_four").css("display","none");

  });

  $(".tab_three").on("click",function () {
    $(".tab_one").css("background","url(../../Skin/img201707/ny-cb.png) no-repeat center");
    $(".tab_two").css("background","url(../../Skin/img201707/ny-jie.png) no-repeat center");
    $(".tab_three").css("background","url(../../Skin/img201707/ny-cyc.png) no-repeat center");
    $(".tab_four").css("background","url(../../Skin/img201707/ny-qis.png) no-repeat center");
      $(".Tab_three").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_four").css("display","none");
  })

  $(".tab_four").on("click",function () {
    $(".tab_one").css("background","url(../../Skin/img201707/ny-cb.png) no-repeat center");
    $(".tab_two").css("background","url(../../Skin/img201707/ny-jie.png) no-repeat center");
    $(".tab_three").css("background","url(../../Skin/img201707/ny-cy.png) no-repeat center");
    $(".tab_four").css("background","url(../../Skin/img201707/ny-qisc.png) no-repeat center");
      $(".Tab_four").css("display","block");
      $(".Tab_one").css("display","none");
      $(".Tab_two").css("display","none");
      $(".Tab_three").css("display","none");
  })
  // function scaleHandle(_value){
  // 	for(var i=0,i<4,i++){
  //     // for(var i=0, _len=$(".develop-img span").length;i<_len;i++){
  // 		if(i == _value){
  // 			$($(".develop-img span")[i]).animate({
  // 		      	"margin-left":"-125px",
  // 		      	"margin-top":"-125px"
  // 		     })
  // 		}else{
  // 			$($(".develop-img span")[i]).animate({
  // 		      	"margin-left":"-102px",
  // 		      	"margin-top":"-104px"
  // 		     })
  // 		}
  // 	}
  // }
  // scaleHandle();
});
