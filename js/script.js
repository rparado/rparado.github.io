(function($) {

	'use strict';

	$(function() {
		var lastId,
		topMenu = $("#top-navigation"),
		topMenuHeight = topMenu.outerHeight(),
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function () {
		var item = $($(this).attr("href"));
			if (item.length) {
			    return item;
			}
		});

		$(window).scroll(function () {

			//Display or hide scroll to top button 
			if ($(this).scrollTop() > 100) {
			    $('.scrollup').fadeIn();
			} else {
			    $('.scrollup').fadeOut();
			}

			if ($(this).scrollTop() > 50) {
			    $('.navbar').addClass('animated fadeInDown');
			} else {
			    $('.navbar').removeClass('animated fadeInDown');
			}
		});

	});
})(jQuery);