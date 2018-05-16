
    $(function(){
      $(".header .ryw-weibo").click(function(){
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




      $(function(){
        $(".sidebar .kf img").click(function(){
          $(".online").show();
        });
        $(".online .online-content .close span").click(function(){
          $(".online").hide();
        });
      });




      $(function(){
        $(".header .ryw-weix").on("mouseenter",function(){
            $(".heder_login .weix").show();
        });
        $(".header .ryw-weix").on("mouseleave",function(){
            $(".heder_login .weix").hide();
        });
      });



      $(function () {
              $(".open .banner").click(function () {
                  $('.downloadBox').show();
                  $(".tc").hide();
                  $(".download").show();
              });
              $(".download .title .close").click(function () {
                  $(".downloadBox").hide();
              });
              $(".tc .title .close").click(function () {
                  $(".downloadBox").hide();
              });
          });






          $(function(){
              //轮播
              (function(){
                  var _index=-1;
                  var _timer=0;
                  //点击左边按钮
                  $(".Tab_left").click(function(){
                      _index--;
                      if(_index<0){
                          _index=3;
                      }
                      effect(_index);
                  });
                  //点击右边按钮
                  $(".Tab_right").click(function(){
                      _index++;
                      if(_index>3){
                          _index=0;
                      }
                      effect(_index);
                  });
                  //鼠标悬浮分页器上变换图片
                  //先给所有的分页器加个index属性
                  $.each($(".Tab_spot span"),function(n,value){
                      value.num=n;//注意这里给dom元素加的属性
                  });
                  $(".Tab_spot span").mouseenter(function(){
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
                  //效果函数
                  function effect(index){
                      //隐藏所有图片
                      //用$.each()方法
                      $.each($(".Banner .Switch"),function(i,value){
                          $(value).css("display","none").css("opacity",1);
                      });
                      //显示当前元素
                      $(".Banner .Switch")[index].style.display="block";
                      //透明度累加
                      var _timer=0;
                      var _opacity=0.2;
                      (function opacity() {
                          clearTimeout(_timer);
                          _opacity+=0.05;
                          if(_opacity<1){
                              $(".Banner .Switch")[index].style.opacity=_opacity;
                              _timer=setTimeout(opacity,30);
                          }else{
                              _opacity=0.2;
                          }
                      })();
                      //让分页器变化
                      //先让所有背景变为原来的颜色
                      $.each($(".Tab_spot span"),function(i,value){
                          value.style.backgroundColor="#303030";
                      });
                      //让当前背景变
                      $(".Tab_spot span")[index].style.backgroundColor="#c7c7c7";
                  }
              })();
            });







            // 切换
            $(function(){
              $('.header .tab ul li').click(function(){
              	$(this).addClass('add').siblings().addClass('active');
                $('.header .tab ul li').removeClass('add').eq($(this).index()).addClass('add').siblings();
              	$('.taBer').hide().eq($(this).index()).show();
              });
            });
