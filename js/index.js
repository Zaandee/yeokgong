


$(document).ready(function () {

	$(window).scroll(function(){
		var menu =$(this).scrollTop();
		
		if(menu>900) {

			$(".header_cover").css("background-color","#fff")
			$(".header_cover>nav>ul>li>a, .header_cover>ul>li>a").css("color","#000")
			
		}
		else if(menu<900){
			$(".header_cover").css("background-color","transparent")
			$(".header_cover>nav>ul>li>a, .header_cover>ul>li>a").css("color","#fff")
			
		};
	
	});
	
	
	$(".intro1").hide(); 	
		$(window).scroll(function () {

			if ($(this).scrollTop() > 700) { // 스크롤 내릴 표시
				$('.intro1').fadeIn(1000);
			}
			
		});     
	


	$('.slide_box').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		
	});





$('.card').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
  });


$(".hidden_card").css("left",($(".era_card").width()-300)/2);

$(window).resize( function() {
	$(".hidden_card").css("left",($(".era_card").width()-300)/2);
  } );


});


