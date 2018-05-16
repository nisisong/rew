$(function(){
  $(".header .header_nav .ryw-weibo").click(function(){
      $(".weib").show();
  });
  $(".header .weib .close span").click(function(){
      $(".weib").hide();
  });
});
// 微博轮播
$(function(){
    (function(){
        var _index=-1;
        var _timer=0;
        //鼠标悬浮分页器上变换图片
        //先给所有的分页器加个index属性
        $.each($(".spot_page span"),function(n,value){
            value.num=n;//注意这里给dom元素加的属性
        });
        $(".spot_page span").mouseenter(function(){
            _index=$(this)[0].num;//所以这里要把jQuery元素转换成dom元素
            effect(_index);
        });
        //自动变换
        function auto(){
            clearTimeout(_timer);
            _index++;
            if(_index>3){
                _index=0;
            }
            effect(_index);
            _timer=setTimeout(auto,3000);
        }
        auto();
        //鼠标悬浮停止定时器
        $(".Carousel").mouseenter(function(){
            clearTimeout(_timer);
        });
        //鼠标离开开启定时器
        $(".Carousel").mouseleave(function(){
            _timer=setTimeout(auto,2000);
        });
        //效果函数
        function effect(index){
            //隐藏所有图片
            //用$.each()方法
            $.each($(".Carousel .Transform"),function(i,value){
                $(value).css("display","none").css("opacity",1);
            });
            //显示当前元素
            $(".Carousel .Transform")[index].style.display="block";
            //透明度累加
            var _timer=0;
            var _opacity=0.2;
            (function opacity() {
                clearTimeout(_timer);
                _opacity+=0.05;
                if(_opacity<1){
                    $(".Carousel .Transform")[index].style.opacity=_opacity;
                    _timer=setTimeout(opacity,30);
                }else{
                    _opacity=0.2;
                }
            })();
            //让分页器变化
            //先让所有背景变为原来的颜色
            $.each($(".spot_page span"),function(i,value){
                value.style.backgroundColor="#fff";
            });
            //让当前背景变
            $(".spot_page span")[index].style.backgroundColor="#ed1a1a";
        }
    })();
  });



  // 导航菜单

  function main(){
    $(function () {
        $(".nav_xia").on("mouseenter", function(){
          $(".box .con:nth-child("+($(this).index()+1)+")").css("display","block");
        });
        $(".nav_xia").on("mouseleave", function(){
          $(".box .con:nth-child("+($(this).index()+1)+")").css("display","none");
        });
        $(".nav_xia").on("mouseenter", function(){
          $(".box").css("display","block");
        });
        $(".nav_xia").on("mouseleave", function(){
          $(".box").css("display","none");
        });
        $(".con").on("mouseover", function(){
          $(this).css("display","block");
        });
        $(".con").on("mouseout", function(){
          $(this).css("display","none");
        });
        $(".box").on("mouseover", function(){
          $(this).css("display","block");
        });
        $(".box").on("mouseout", function(){
          $(this).css("display","none");
        });
      });
  }
  window.onload=function(){
    main();
  }
  //侧边导航固定
  $(function () {
//客服
      $(function(){
        $(".sidebar .kf").click(function(){
          $(".online").show();
        });
        $(".online .online-content .close span").click(function(){
          $(".online").hide();
        });
      });
//二维码
      $(function(){
        $(".sidebar .Scan").on("mousemove",function(){
          $(".Scan .EwmImg").attr("src","../../Skin/img201707/二维码白.png");
          $(".sidebar .Ewms").show();
        })
        $('.Scan').on("mouseout",function(){
          $(".Scan .EwmImg").attr("src","../../Skin/img201707/二维码灰.png");
          $(".sidebar .Ewms").hide();
        })
      })
// 返回顶部
    			$(function(){
  					$(".Return").on("mousemove",function(){
  						$(".du").css("display","none");
  						$(".ding").css("display","block");
  					});
  					$(".Return").on("mouseout", function(){
  						$(".du").css("display","block");
  						$(".ding").css("display","none");
  					});
  				});
      })



      $(function(){
        $('.content .left ul li').click(function(){
        	$(this).addClass('vary').siblings().removeClass('vary');
          $('.content .left ul li').removeClass('vary').eq($(this).index()).addClass('vary').siblings();
        	$('.taBer').hide().eq($(this).index()).show();
        });
      });
      $(function(){
        $(".content .right .tab2 ul li").on("mousemove",function(){
          $('.ewm').hide().eq($(this).index()).show();
        });
        $(".content .right .tab2 ul li").on("mouseleave", function(){
        $('.ewm').hide();
        });
      });
