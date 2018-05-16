$(function(){
    //轮播
    (function(){
        var _index=-1;
        var _timer=0;
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
            if(_index>4){
                _index=0;
            }
            effect(_index);
            _timer=setTimeout(auto,3000);
        }
        auto();
        //鼠标悬浮停止定时器
        $(".player_center").mouseenter(function(){
            clearTimeout(_timer);
        });
        //鼠标离开开启定时器
        $(".player_center").mouseleave(function(){
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
                value.style.background = "";
                value.style.height = "30px";
                value.style.lineHeight="30px";
                // value.css("background","url(../../img201707/banner-listbg.png)");
            });
            $.each($(".tab_page span a"),function(i,value){
                value.style.color="#000";
                value.style.fontSize="16px";
            });
            //让当前背景变
            $(".tab_page span")[index].style.background="url(../../Skin/img201707/小白.png)";
            $(".tab_page span")[index].style.height="60px";
            $(".tab_page span")[index].style.lineHeight="60px";
            $(".tab_page span a")[index].style.color="#f00";
            $(".tab_page span a")[index].style.fontSize="20px";
        }
    })();

    // 侧边栏
    $(window).scroll(function () {
    if($(window).scrollTop()>=550) {
    $(".sidebar").fadeIn(400); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
    }else {
    $(".sidebar").fadeOut(400); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到
    顶部图标隐藏 */
    }
    });
  });




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
