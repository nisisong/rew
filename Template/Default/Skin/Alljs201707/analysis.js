var doscroll = function(){
     var $parent = $('.js-slide-list');
     var $first = $parent.find('li:first');
     var height = $first.height();
     $first.animate({
         marginTop: -height + 'px'
       }, 500, function() {
         $first.css('marginTop', 0).appendTo($parent);
     });
};
setInterval(function(){doscroll()}, 3000);

function lxfEndtime(){
  $t=$('#t').html();
  if($t!=0){
    $('#t').html($t-1);
    $i=setTimeout("lxfEndtime()",1000);
  }else{
    $('.xlBox').fadeOut("slow");
    $('.bt1').fadeIn("2000");
    $('.group').hide();
    $('#t').html(8);
    clearTimeout($i);
  }
};
$()
$(document).ready(function(){
  $('.bt1').click(function(){
    $(this).fadeOut("2000");
    $('.xlBox').fadeIn("2000");
    $('.group').show();
    lxfEndtime();
  })
  lxfEndtime();
  $('.close').click(function(){
    $('.xlBox').fadeOut("slow");
    $('.bt1').fadeIn("2000");
    $('.group').hide();
    $('#t').html(8);
    clearTimeout($i);
  })
});
