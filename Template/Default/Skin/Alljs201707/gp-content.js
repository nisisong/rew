$(function() {
    var t = $(".banner-nav").offset().top;
    // 固定
    $(window).scroll(function() {
        if ($(window).scrollTop() >= t) {
            $(".banner-nav").addClass("fixd");
        } else {
            $(".banner-nav").removeClass("fixd");
        }
    });
});



$(function() {
	$(window).on('scroll', function() {
		var $scroll = $(this).scrollTop();
		$('.louti').each(function() {
			var $loutitop = $('.louti').eq($(this).index()).offset().top+70 ;

			if($loutitop > $scroll) {
				$('.banner-navcenter ul li').removeClass('Bnractive');
				$('.banner-navcenter ul li').eq($(this).index()).addClass('Bnractive');
				return false;
			}
		});
	});

	var $loutili = $('.banner-navcenter ul li').not('.one');
	$loutili.on('click', function() {
		$(this).addClass('Bnractive').siblings().removeClass('Bnractive');
		var $loutitop = $('.louti').eq($(this).index()).offset().top-70;

		$('html,body').animate({
			scrollTop: $loutitop
		})
	});
});
