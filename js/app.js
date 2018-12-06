const browser = navigator.userAgent;
if (browser.includes('Android') || browser.includes('iPhone') && browser.includes('Mobile')) {
		$(window).scroll(function() {
			if (window.pageYOffset >= 275) {
				$('header').addClass('sticky');
				$('.logo').hide();
			}
			else {
				$('header').removeClass('sticky');
				$('.logo').show();
			}
		});
}