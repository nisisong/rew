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
    $(document).ready(function(e) {
      $(".teakind1").click(function(e) {
          $(".city1 .more").toggle();
      });
      $(".teakind2").click(function(e) {
          $(".city2 .more").toggle();
      });
      $(".teakind3").click(function(e) {
          $(".city3 .more").toggle();
      });
      $(".teakind4").click(function(e) {
          $(".city4 .more").toggle();
      });
      $(".teakind5").click(function(e) {
          $(".city5 .more").toggle();
      });
      $(".teakind6").click(function(e) {
          $(".city6 .more").toggle();
      });
      $(".teakind7").click(function(e) {
          $(".city7 .more").toggle();
      });
      $(".teakind8").click(function(e) {
          $(".city8 .more").toggle();
      });
      $(".teakind9").click(function(e) {
          $(".city9 .more").toggle();
      });
      $(".teakind10").click(function(e) {
          $(".city10 .more").toggle();
      });
      $(".teakind11").click(function(e) {
          $(".city11 .more").toggle();
      });
      $(".teakind12").click(function(e) {
          $(".city12 .more").toggle();
      });
      $(".teakind13").click(function(e) {
          $(".city13 .more").toggle();
      });
      $(".teakind14").click(function(e) {
          $(".city14 .more").toggle();
      });
      $(".teakind15").click(function(e) {
          $(".city15 .more").toggle();
      });
      $(".teakind16").click(function(e) {
          $(".city16 .more").toggle();
      });
      $(".teakind17").click(function(e) {
          $(".city17 .more").toggle();
      });
      $(".teakind18").click(function(e) {
          $(".city18 .more").toggle();
      });
      $(".teakind19").click(function(e) {
          $(".city19 .more").toggle();
      });
      $(".teakind20").click(function(e) {
          $(".city20 .more").toggle();
      });
      $(".teakind21").click(function(e) {
          $(".city21 .more").toggle();
      });
      $(".teakind22").click(function(e) {
          $(".city22 .more").toggle();
      });
      $(".teakind23").click(function(e) {
          $(".city23 .more").toggle();
      });
      $(".teakind24").click(function(e) {
          $(".city24 .more").toggle();
      });
      $(".teakind25").click(function(e) {
          $(".city25 .more").toggle();
      });
      $(".teakind26").click(function(e) {
          $(".city26 .more").toggle();
      });
      $(".teakind27").click(function(e) {
          $(".city27 .more").toggle();
      });
      $(".teakind28").click(function(e) {
          $(".city28 .more").toggle();
      });
      $(".teakind29").click(function(e) {
          $(".city29 .more").toggle();
      });
      $(".teakind30").click(function(e) {
          $(".city30 .more").toggle();
      });
      $(".teakind31").click(function(e) {
          $(".city31 .more").toggle();
      });
      $(".teakind32").click(function(e) {
          $(".city32 .more").toggle();
      });
      $(".teakind33").click(function(e) {
          $(".city33 .more").toggle();
      });
      $(".teakind34").click(function(e) {
          $(".city34 .more").toggle();
      });
    });
  })

$(function(){
  $(".cha").click(function(){
    var _dataId = $(this).data("id")?0:1;
  $(this).data("id",_dataId);
    if(_dataId){
      $(this).text("收起");
    }else {
      $(this).text("查看全部");
    }
  })
})

 
