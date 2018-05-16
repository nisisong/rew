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
                value.style.backgroundColor="#fff";
            });
            //让当前背景变
            $(".tab_page span")[index].style.backgroundColor="#ed1a1a";
        }
    })();
  });










  function lxfEndtime(){
    $t=$('#t').html();
    if($t!=0){
      $('#t').html($t-1);
      $i=setTimeout("lxfEndtime()",1000);
    }else{
      $('.tcBox').animate({"left":"-2000px"},1000);
      $('.adBox .btn1').animate({"left":"0"},500);
      $('#t').html(5);
      clearTimeout($i);
    }
  };
  $()
  $(document).ready(function(){
    $('.adBox .btn1').click(function(){
      $('.tcBox').animate({"left":"0"},500);
      $(this).animate({"left":"-60px"},500);
      lxfEndtime();
    })
    lxfEndtime();
    $('.close').click(function(){
      $('.tcBox').animate({"left":"-2000px"},1000);
      $('.adBox .btn1').animate({"left":"0"},500);;
      $('#t').html(5);
      clearTimeout($i);
    })
  });
