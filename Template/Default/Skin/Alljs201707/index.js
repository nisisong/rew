$(function(){
  $(".btns").on("mouseenter",function(){
    $('.btns').animate({"left":"0"},500);
  });
  $(".btns").on("mouseleave",function(){
    $('.btns').animate({"left":"-310"},500);
  });
});


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






/**
 * Created by Administrator on 2017/1/9.
 */
$(function(){
    //轮播
    (function(){
        var _index=-1;
        var _timer=0;
        //鼠标悬浮中间左右按钮出现，移除隐藏按钮
        $(".player").hover(function(){
            $(".tab_left").css("display","block");
            $(".tab_right").css("display","block");
        },function(){
            $(".tab_left").css("display","none");
            $(".tab_right").css("display","none");
        });
        //点击左边按钮
        $(".tab_left").click(function(){
            _index--;
            if(_index<0){
                _index=3;
            }
            effect(_index);
        });
        //点击右边按钮
        $(".tab_right").click(function(){
            _index++;
            if(_index>3){
                _index=0;
            }
            effect(_index);
        });
        //鼠标悬浮分页器上变换图片
        //先给所有的分页器加个index属性
        $.each($(".tab_page span"),function(n,value){
            value.num=n;//注意这里给dom元素加的属性
        });
        $(".tab_page span").mouseenter(function(){
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
        $(".player").mouseenter(function(){
            clearTimeout(_timer);
        });
        //鼠标离开开启定时器
        $(".player").mouseleave(function(){
            _timer=setTimeout(auto,2000);
        });
        //效果函数
        function effect(index){
            //隐藏所有图片
            //用$.each()方法
            $.each($(".player .slide"),function(i,value){
                $(value).css("display","none").css("opacity",1);
            });
            //显示当前元素
            $(".player .slide")[index].style.display="block";
            //透明度累加
            var _timer=0;
            var _opacity=0.2;
            (function opacity() {
                clearTimeout(_timer);
                _opacity+=0.05;
                if(_opacity<1){
                    $(".player .slide")[index].style.opacity=_opacity;
                    _timer=setTimeout(opacity,30);
                }else{
                    _opacity=0.2;
                }
            })();
            //让分页器变化
            //先让所有背景变为原来的颜色
            $.each($(".tab_page span"),function(i,value){
                value.style.backgroundColor="#666";
            });
            //让当前背景变
            $(".tab_page span")[index].style.backgroundColor="#fff";
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


// 无缝滚动

$(function (){
var demo = document.getElementById("demo");
var demo1 = document.getElementById("demo1");
var demo2 = document.getElementById("demo2");
demo2.innerHTML=document.getElementById("demo1").innerHTML;
function Marquee(){
if(demo.scrollLeft-demo2.offsetWidth>=0){
 demo.scrollLeft-=demo1.offsetWidth;
}
else{
 demo.scrollLeft++;
}
}
var myvar=setInterval(Marquee,30);
demo.onmouseout=function (){myvar=setInterval(Marquee,30);}
demo.onmouseover=function(){clearInterval(myvar);}
})

$(function (){
var demo = document.getElementById("demoBox");
var demo1 = document.getElementById("demoOne");
var demo2 = document.getElementById("demoTwo");
demo2.innerHTML=document.getElementById("demoOne").innerHTML;
function Marquee(){
if(demo.scrollLeft-demo2.offsetWidth>=0){
 demo.scrollLeft-=demo1.offsetWidth;
}
else{
 demo.scrollLeft++;
}
}
var myvar=setInterval(Marquee,30);
demo.onmouseout=function (){myvar=setInterval(Marquee,30);}
demo.onmouseover=function(){clearInterval(myvar);}
})

// 实用工具
  $('.wz_tool .smallButton li a').each(function(){
    $(this).mouseover(function(){$(this).removeClass("begin").addClass("on");
  })
  })
   $('.wz_tool .smallButton li a').each(function(){
    $(this).mouseout(function(){$(this).removeClass("on").addClass("begin");
  })
  })

  $(function(){
    $(".statement").click(function(){
      $(".statement-content").show();
    });
    $(".statement-center .fork").click(function(){
      $(".statement-content").hide();
    });
});

// 侧边栏
$(window).scroll(function () {
  if($(window).scrollTop()>=550) {
    $(".sidebar").fadeIn(400); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
  }else {
    $(".sidebar").fadeOut(400); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到
    顶部图标隐藏 */
    }
  });









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





// 热门股票切换
      $(function() {
          var step = 175;
          var posFlag = 0;
          var num = 5;
          var clickFlag1 = true;
          var clickFlag2 = true;
          $(".tell-left").on("click",
          function() {
              if (!clickFlag2) {
                  return false;
              }
              posFlag = $(".tell-content")[0].offsetLeft;
              var _x = posFlag + step;
              if (_x > 0) {
                  $(".tell-content")[0].style.left = -(step * num) + "px";
                  posFlag = $(".tell-content")[0].offsetLeft;
                  _x = posFlag + step;
              }
              clickFlag2 = false;
              $(".tell-contenter .tell-content").animate({
                  "left": _x + "px"
              },
              function() {
                  clickFlag2 = true;
              });
          });
          $(".tell-right").on("click",
          function() {
              if (!clickFlag1) {
                  return false;
              }
              posFlag = $(".tell-content")[0].offsetLeft;
              var _x = posFlag - step;
              if (_x < -(step * num)) {
                  $(".tell-content")[0].style.left = 0 + "px";
                  posFlag = $(".tell-content")[0].offsetLeft;
                  _x = posFlag - step;
              }
              clickFlag1 = false;
              $(".tell-contenter .tell-content").animate({
                  "left": _x + "px"
              },
              function() {
                  clickFlag1 = true;
              });
          });
      });




      // 热门专题切换
            $(function() {
                var step = 353;
                var posFlag = 0;
                var num = 3;
                var clickFlag1 = true;
                var clickFlag2 = true;
                $(".ject-left").on("click",
                function() {
                    if (!clickFlag2) {
                        return false;
                    }
                    posFlag = $(".ject-content")[0].offsetLeft;
                    var _x = posFlag + step;
                    if (_x > 0) {
                        $(".ject-content")[0].style.left = -(step * num) + "px";
                        posFlag = $(".ject-content")[0].offsetLeft;
                        _x = posFlag + step;
                    }
                    clickFlag2 = false;
                    $(".ject-contenter .ject-content").animate({
                        "left": _x + "px"
                    },
                    function() {
                        clickFlag2 = true;
                    });
                });
                $(".ject-right").on("click",
                function() {
                    if (!clickFlag1) {
                        return false;
                    }
                    posFlag = $(".ject-content")[0].offsetLeft;
                    var _x = posFlag - step;
                    if (_x < -(step * num)) {
                        $(".ject-content")[0].style.left = 0 + "px";
                        posFlag = $(".ject-content")[0].offsetLeft;
                        _x = posFlag - step;
                    }
                    clickFlag1 = false;
                    $(".ject-contenter .ject-content").animate({
                        "left": _x + "px"
                    },
                    function() {
                        clickFlag1 = true;
                    });
                });
            });









            // 合作伙伴切换
                  $(function() {
                      var step = 1002;
                      var posFlag = 0;
                      var num = 3;
                      var clickFlag1 = true;
                      var clickFlag2 = true;
                      $(".partner-left").on("click",
                      function() {
                          if (!clickFlag2) {
                              return false;
                          }
                          posFlag = $(".partner-content")[0].offsetLeft;
                          var _x = posFlag + step;
                          if (_x > 0) {
                              $(".partner-content")[0].style.left = -(step * num) + "px";
                              posFlag = $(".partner-content")[0].offsetLeft;
                              _x = posFlag + step;
                          }
                          clickFlag2 = false;
                          $(".partner-contenter .partner-content").animate({
                              "left": _x + "px"
                          },
                          function() {
                              clickFlag2 = true;
                          });
                      });
                      $(".partner-right").on("click",
                      function() {
                          if (!clickFlag1) {
                              return false;
                          }
                          posFlag = $(".partner-content")[0].offsetLeft;
                          var _x = posFlag - step;
                          if (_x < -(step * num)) {
                              $(".partner-content")[0].style.left = 0 + "px";
                              posFlag = $(".partner-content")[0].offsetLeft;
                              _x = posFlag - step;
                          }
                          clickFlag1 = false;
                          $(".partner-contenter .partner-content").animate({
                              "left": _x + "px"
                          },
                          function() {
                              clickFlag1 = true;
                          });
                      });
                  });
