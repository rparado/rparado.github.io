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
			if ($(this).scrollTop() > 50) {
			    $('.navbar').addClass('sticky animated fadeInDown');
			     $('.scrollup').fadeIn();
			} else {
			    $('.navbar').removeClass('sticky animated fadeInDown');
			    $('.scrollup').fadeOut();
			}

			var fromTop = $(this).scrollTop() + topMenuHeight + 10;

			// Get id of current scroll item
			var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop)
				return this;
			});

			// Get the id of the current element
			cur = cur[cur.length - 1];
			var id = cur && cur.length ? cur[0].id : "";

			if (lastId !== id) {
				lastId = id;
				// Set/remove active class
				menuItems
				.parent().removeClass("active")
				.end().filter("[href=#" + id + "]").parent().addClass("active");
			}
		});

		$('.skills > li > span').one('inview', function (event, visible) {
	        if (visible == true) {
	            $(this).each(function () {
	                $(this).animate({
	                    width: $(this).attr('data-width')
	                }, 3000);
	            });
	        }
	    });

		$('#project-grid').mixItUp({
			animation: {
				enable: false
			},
			callbacks: {
				onMixLoad: function(){
					$(this).mixItUp('setOptions', {
						animation: {
							enable: true,
							effects: 'fade scale',
							duration: 600,
							easing: 'ease'	
						},
					});
				}
			}
		});

		/*scroll to top*/
		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});

		/*animate thumbnail*/
		$('.thumbnail').one('inview', function (event, visible) {
			if (visible == true) {
				$(this).addClass("animated fadeInDown");
			} else {
				$(this).removeClass("animated fadeInDown");
			}
		});
	});
})(jQuery);