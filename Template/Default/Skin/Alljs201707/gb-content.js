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




  $(function(){
      //轮播
      (function(){
          var _index=-1;
          var _timer=0;
          //鼠标悬浮分页器上变换图片
          //先给所有的分页器加个index属性
          $.each($(".teb_page span"),function(n,value){
              value.num=n;//注意这里给dom元素加的属性
          });
          $(".teb_page span").mouseenter(function(){
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
          $(".play").mouseenter(function(){
              clearTimeout(_timer);
          });
          //鼠标离开开启定时器
          $(".play").mouseleave(function(){
              _timer=setTimeout(auto,2000);
          });
          //效果函数
          function effect(index){
              //隐藏所有图片
              //用$.each()方法
              $.each($(".play .slide"),function(i,value){
                  $(value).css("display","none").css("opacity",1);
              });
              //显示当前元素
              $(".play .slide")[index].style.display="block";
              //透明度累加
              var _timer=0;
              var _opacity=0.2;
              (function opacity() {
                  clearTimeout(_timer);
                  _opacity+=0.05;
                  if(_opacity<1){
                      $(".play .slide")[index].style.opacity=_opacity;
                      _timer=setTimeout(opacity,30);
                  }else{
                      _opacity=0.2;
                  }
              })();
              //让分页器变化
              //先让所有背景变为原来的颜色
              $.each($(".teb_page span"),function(i,value){
                  value.style.backgroundColor="#fff";
              });
              //让当前背景变
              $(".teb_page span")[index].style.backgroundColor="#ed1a1a";
          }
      })();
    });


    $(function(){

      $(".hand-expire").on("click",function () {
        $(".hand-expire").css("background","url(../../Skin/img201707/gb-jce.png) no-repeat center");
        $(".hand-turn").css("background","url(../../Skin/img201707/gb-fl.png) no-repeat center");
        $(".hand-careful").css("background","url(../../Skin/img201707/gb-pt.png) no-repeat center");
          $(".cut-content").css("display","block");
          $(".cut-content2").css("display","none");
          $(".cut-content3").css("display","none");
      });

      $(".hand-turn").on("click",function () {
        $(".hand-expire").css("background","url(../../Skin/img201707/gb-jc.png) no-repeat center");
        $(".hand-turn").css("background","url(../../Skin/img201707/gb-fle.png) no-repeat center");
        $(".hand-careful").css("background","url(../../Skin/img201707/gb-pt.png) no-repeat center");
          $(".cut-content").css("display","none");
          $(".cut-content3").css("display","none");
          $(".cut-content2").css("display","block");

      });

      $(".hand-careful").on("click",function () {
        $(".hand-expire").css("background","url(../../Skin/img201707/gb-jc.png) no-repeat center");
        $(".hand-turn").css("background","url(../../Skin/img201707/gb-fl.png) no-repeat center");
        $(".hand-careful").css("background","url(../../Skin/img201707/gb-pte.png) no-repeat center");
          $(".cut-content3").css("display","block");
          $(".cut-content2").css("display","none");
          $(".cut-content").css("display","none");
      })

    });



    $(function(){
      $(document).ready(function(e) {
        $(".teakind1").click(function(e) {
            $(".city1 .more").toggle();
            $(this).hide();
            $(".shou1").show();
        });
        $(".shou1").click(function(e) {
            $(".city1 .more").toggle();
            $(this).hide();
            $(".teakind1").show();
        });
      });
  });
