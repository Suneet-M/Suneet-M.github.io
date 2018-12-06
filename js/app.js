const browser = navigator.userAgent;
if (browser.includes('Android') || browser.includes('iPhone') && browser.includes('Mobile')) {
		$(window).scroll(function() {
			if (window.pageYOffset >= $('header').offset().top) {
				$('header').addClass('sticky');
				$('.logo').hide();
			}
			if(!$(window).scrollTop()) {
				$('header').removeClass('sticky');
				$('.logo').show();
			}
		});
}