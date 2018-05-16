$(function(){
    //轮播
    (function(){
        var _index=-1;
        var _timer=0;
        //鼠标悬浮分页器上变换图片
        //先给所有的分页器加个index属性
        $.each($(".tabBar_page span"),function(n,value){
            value.num=n;//注意这里给dom元素加的属性
        });
        $(".tabBar_page span").mouseenter(function(){
            _index=$(this)[0].num;//所以这里要把jQuery元素转换成dom元素
            effect(_index);
        });
        //自动变换
        function auto(){
            clearTimeout(_timer);
            _index++;
            if(_index>1){
                _index=0;
            }
            effect(_index);
            _timer=setTimeout(auto,3000);
        }
        auto();
        //鼠标悬浮停止定时器
        $(".br-player").mouseenter(function(){
            clearTimeout(_timer);
        });
        //鼠标离开开启定时器
        $(".br-player").mouseleave(function(){
            _timer=setTimeout(auto,2000);
        });
        //效果函数
        function effect(index){
            //隐藏所有图片
            //用$.each()方法
            $.each($(".br-player .switch"),function(i,value){
                $(value).css("display","none").css("opacity",1);
            });
            //显示当前元素
            $(".br-player .switch")[index].style.display="block";
            //透明度累加
            var _timer=0;
            var _opacity=0.2;
            (function opacity() {
                clearTimeout(_timer);
                _opacity+=0.05;
                if(_opacity<1){
                    $(".br-player .switch")[index].style.opacity=_opacity;
                    _timer=setTimeout(opacity,30);
                }else{
                    _opacity=0.2;
                }
            })();
            //让分页器变化
            //先让所有背景变为原来的颜色
            $.each($(".tabBar_page span"),function(i,value){
                value.style.backgroundColor="#fff";
            });
            //让当前背景变
            $(".tabBar_page span")[index].style.backgroundColor="#ed1a1a";
        }
    })();
  });






$(function(){
    //轮播
    (function(){
        var _index=-1;
        var _timer=0;
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
                value.style.backgroundColor="#fff";
            });
            //让当前背景变
            $(".tab_page span")[index].style.backgroundColor="#ed1a1a";
        }
    })();
  });



  $(function() {
      var step = 290;
      var posFlag = 0;
      var num = 3;
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




// 无缝滚动

// $(function (){
// var demo = document.getElementById("demo");
// var demo1 = document.getElementById("demo1");
// var demo2 = document.getElementById("demo2");
// demo2.innerHTML=document.getElementById("demo1").innerHTML;
// function Marquee(){
// if(demo.scrollLeft-demo2.offsetWidth>=0){
//  demo.scrollLeft-=demo1.offsetWidth;
// }
// else{
//  demo.scrollLeft++;
// }
// }
// var myvar=setInterval(Marquee,30);
// demo.onmouseout=function (){myvar=setInterval(Marquee,30);}
// demo.onmouseover=function(){clearInterval(myvar);}
// })
//
// $(function (){
// var demo = document.getElementById("demoBox");
// var demo1 = document.getElementById("demoOne");
// var demo2 = document.getElementById("demoTwo");
// function Marquee(){
// if(demo.scrollLeft-demo2.offsetWidth>=0){
//  demo.scrollLeft-=demo1.offsetWidth;
// }
// else{
//  demo.scrollLeft++;
// }
// }
// var myvar=setInterval(Marquee,30);
// demo.onmouseout=function (){myvar=setInterval(Marquee,30);}
// demo.onmouseover=function(){clearInterval(myvar);}
// })
