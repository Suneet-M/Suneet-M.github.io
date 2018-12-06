const browser = navigator.userAgent;
if (browser.includes('Android') || browser.includes('iPhone') && browser.includes('Mobile')) {
		const titleOffset = $('.title').offset().top;
		$(window).scroll(function() {
			if (window.pageYOffset >= titleOffset) {
				$('header').addClass('sticky');
				$('.logo').hide();
			}
			else {
				$('header').removeClass('sticky');
				$('.logo').show();
			}
		});
}