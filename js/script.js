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

		 $('a[href*=#]').each(function () {
            if (filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
                var $targetId = $(this.hash),
                    $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
                var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;

                if ($target) {

                    $(this).click(function () {

                        //Hack collapse top navigation after clicking
                        topMenu.parent().attr('style', 'height:0px').removeClass('in'); //Close navigation
                        $('.navbar .navbar-toggle').addClass('collapsed');

                        var targetOffset = $target.offset().top - 63;
                        $('html, body').animate({
                            scrollTop: targetOffset
                        }, 800);
                        return false;
                    });
                }
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
		/*project grid animation*/
		$('#project-grid').mixItUp({
			animation: {
				duration: 400,
				effects: 'fade translateZ(-360px) stagger(34ms)',
				easing: 'ease'
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
		/*waypoints*/
		$('.waypoint-1').waypoint(function() {
			$(this).addClass('animated fadeInUp');
		}, {
			offset: '75%'
		});

		$('.waypoint-2').waypoint(function(){
			$(this).addClass('animated fadeInUp');
		}, {
			offset: '75%'
		});

		$('.waypoint-3').waypoint(function() {
			$(this).addClass('animated fadeInUp')
		}, {
			offset: '75%'
		});

		/*disable right click*/
		function clickIE() {if (document.all) {(message);return false;}} 
		function clickNS(e) {if 
		(document.layers||(document.getElementById&&!document.all)) { 
		if (e.which==2||e.which==3) {(message);return false;}}} 
		if (document.layers) 
		{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;} 
		else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;} 
		document.oncontextmenu=new Function("return false");
	});


})(jQuery);
function filterPath(string) {
	return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
}