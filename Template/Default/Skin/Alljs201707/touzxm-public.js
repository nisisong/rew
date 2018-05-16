//nav
$(function(){
  $(".nav-list li").on("mouseenter",function(){
    $(this).addClass('current').siblings().removeClass('current');
  });
  $(".nav-list li").on("mouseleave",function(){
    $(".nav-list li").removeClass('current');
  });
});
$(function(){
  $(".fM").on("mouseenter",function(){
    $(".nav-ification ul li .findMoney .heid").attr("src","../../Skin/img201707/touz-heid.png");
    $(".fM .sanj").css("display","block");
  })
  $(".fM").on("mouseleave",function(){
      $(".nav-ification ul li .findMoney .heid").attr("src","../../Skin/img201707/touz-heit.png");
      $(".fM .sanj").css("display","none");
  })
});
$(function(){
  $(".fP").on("mouseenter",function(){
    $(".nav-ification ul li .findPro .heit").attr("src","../../Skin/img201707/touz-heid.png");
    $(".fP .sanj").css("display","block");
  })
  $(".fP").on("mouseleave",function(){
      $(".nav-ification ul li .findPro .heit").attr("src","../../Skin/img201707/touz-heit.png");
      $(".fP .sanj").css("display","none");
  })
});

$(function(){
    $(".nav-list .nav-item").on("mouseenter",function(){
      var subList = $(this).find(".sub-list");
      subList.show();
      var Y = $(this).offset().left;
      var _w = $(window).width();
      subList.css({left:-Y+"px",width:_w+"px"});
      subList.stop().animate({
                  height:'0px'
                },120,function(){
                    subList.animate({
                      height:'120px'
                    },120)
                });

    })

    $(".nav-list .nav-item").on("mouseleave",function(){
        var _this = this;
        $(this).find(".sub-list").stop();
       $(this).find(".sub-list").animate({
              height:'0px'

        },200,function(){
            $(_this).find(".sub-list").hide();
        });

    })
});

$(function() {
  $('.select_pos .htools-select').click(function(){
    $(".htools-select .select-select-ul").show();
  })
  $('.htools-select .select-select-ul').on("mouseleave",function(){
    $(".htools-select .select-select-ul").hide();
  })
});



function aniHide(){}
