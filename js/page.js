var gallery;
var galleryOpened = false;
var galleryLoaded = false;

var openPhotoSwipe = function() {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	var items = [
	{
		mediumImage: {
			src: 'img/_gallery/gallery_2.jpg',
			w: 848,
			h: 1000
		},
		originalImage: {
			src: 'img/_gallery/gallery_2.jpg',
			w: 1264,
			h: 2000
		}
	},
	{
		mediumImage: {
			src: 'img/_gallery/gallery_2.jpg',
			w: 1200,
			h: 815
		},
		originalImage: {
			src: 'img/_gallery/gallery_2.jpg',
			w: 2000,
			h: 1358
		}
	},
	{
		mediumImage: {
			src: 'img/_gallery/gallery_3.jpg',
			w: 1000,
			h: 655
		},
		originalImage: {
			src: 'img/_gallery/gallery_3.jpg',
			w: 2100,
			h: 1373
		}
	},
	{
		mediumImage: {
			src: 'img/_gallery/gallery_2.jpg',
			w: 1200,
			h: 727
		},
		originalImage: {
			src: 'img/_gallery/gallery_2.jpg',
			w: 2200,
			h: 1333
		}
	},
	{
		mediumImage: {
			src: 'img/_gallery/gallery_2.jpg',
			w: 848,
			h: 1000
		},
		originalImage: {
			src: 'img/_gallery/gallery_2.jpg',
			w: 1695,
			h: 2000
		}
	}
	];

	var options = {
		history: false,
		focus: false,
		zoomEl: false,
		loop: false,
		modal: false,
		tapToClose: false,
		timeToIdle: 99999,
		timeToIdleOutside: 99999,
		barsSize: {top:0, bottom:0}, 
		pinchToClose: false,
		arrowKeys: false,
		escKey: false,
		closeOnScroll: false,
		closeOnVerticalDrag: false,
		showAnimationDuration: 0,
		hideAnimationDuration: 0

	};

	gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

	var realViewportWidth,
	useLargeImages = false,
	firstResize = true,
	imageSrcWillChange;

	gallery.listen('beforeResize', function() {


		realViewportWidth = gallery.viewportSize.x * window.devicePixelRatio;


		if(useLargeImages && realViewportWidth < 1000) {
			useLargeImages = false;
			imageSrcWillChange = true;
		} else if(!useLargeImages && realViewportWidth >= 1000) {
			useLargeImages = true;
			imageSrcWillChange = true;
		}

		if(imageSrcWillChange && !firstResize) {

			gallery.invalidateCurrItems();
		}

		if(firstResize) {
			firstResize = false;
		}

		imageSrcWillChange = false;

	});

	gallery.listen('afterChange', function() {
		$('.gallery-button--left, .gallery-button--right').removeClass('disabled');

		if (gallery.getCurrentIndex() == 0) {
			$('.gallery-button--left').addClass('disabled');
		}
		if (gallery.getCurrentIndex() == (gallery.options.getNumItemsFn() - 1)) {
			$('.gallery-button--right').addClass('disabled');
		}
	});

	gallery.listen('imageLoadComplete', function(index, item) { 
		if (!galleryLoaded) {
			setTimeout(function() {
				$('.gallery-button--close').addClass('open');
				galleryLoaded = true;
			}, 300);
		}

	});

	$('.gallery-button--left').click(function(){
		if (!$(this).hasClass('disabled')) {
			gallery.prev();	
		} else {
			event.stopPropagation();
		}
	}); 

	$('.gallery-button--right').click(function() {
		if (!$(this).hasClass('disabled')) {
			gallery.next();
		}
		else {
			event.stopPropagation();
		}
	}); 


	gallery.listen('gettingData', function(index, item) {

		if( useLargeImages ) {
			item.src = item.originalImage.src;
			item.w = item.originalImage.w;
			item.h = item.originalImage.h;
		} else {
			item.src = item.mediumImage.src;
			item.w = item.mediumImage.w;
			item.h = item.mediumImage.h;
		}

	});
	gallery.init();
};


$('#storyButton').click(function(){ 
	$("#story-wrapper").addClass('page-wrapper--open');
});

$('#home').click(function(){ 
	$("#story-wrapper").removeClass('page-wrapper--open');
});

$('.gallery-image-grid-item').click(function(){ 
	$("#gallery-wrapper").addClass('page-wrapper--open');
	$('.navbar').css('z-index', '0');
	$('#gallery_sec').css('top', '0px');
	$("body").css("overflow", "hidden");
	
	if (!galleryOpened) {
		setTimeout(function() {
			openPhotoSwipe();
		}, 1200);
		galleryOpened = true;
	}
});

$('.gallery-button--close').click(function(){ 
	$("#gallery-wrapper").removeClass('page-wrapper--open');
	$('.navbar').css('z-index', '11');
	$("body").css("overflow", "visible");
	setTimeout(function() {
		gallery.goTo(0);
	}, 1200);
});

$('.button-item--legal').click(function(){ 
	$("#footer-wrapper").addClass('page-wrapper--open');
});

$('#footerClose').click(function(){ 
	$("#footer-wrapper").removeClass('page-wrapper--open');
});

$('#tickets').mouseenter(function(){ 
	$("#plane-image").css({'transform': 'rotate(-35deg)'});
});

$('#tickets').mouseleave(function(){ 
	$("#plane-image").css({'transform': 'rotate(0deg)'});
});

$('#trailer').mouseenter(function(){ 
	$("#plane-image").css({'transform': 'rotate(35deg)'});
});

$('#trailer').mouseleave(function(){ 
	$("#plane-image").css({'transform': 'rotate(0deg)'});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBnYWxsZXJ5O1xudmFyIGdhbGxlcnlPcGVuZWQgPSBmYWxzZTtcbnZhciBnYWxsZXJ5TG9hZGVkID0gZmFsc2U7XG5cbnZhciBvcGVuUGhvdG9Td2lwZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgcHN3cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHN3cCcpWzBdO1xuXG5cdHZhciBpdGVtcyA9IFtcblx0e1xuXHRcdG1lZGl1bUltYWdlOiB7XG5cdFx0XHRzcmM6ICdpbWcvX2dhbGxlcnkvZ2FsbGVyeV8yLmpwZycsXG5cdFx0XHR3OiA4NDgsXG5cdFx0XHRoOiAxMDAwXG5cdFx0fSxcblx0XHRvcmlnaW5hbEltYWdlOiB7XG5cdFx0XHRzcmM6ICdpbWcvX2dhbGxlcnkvZ2FsbGVyeV8yLmpwZycsXG5cdFx0XHR3OiAxMjY0LFxuXHRcdFx0aDogMjAwMFxuXHRcdH1cblx0fSxcblx0e1xuXHRcdG1lZGl1bUltYWdlOiB7XG5cdFx0XHRzcmM6ICdpbWcvX2dhbGxlcnkvZ2FsbGVyeV8yLmpwZycsXG5cdFx0XHR3OiAxMjAwLFxuXHRcdFx0aDogODE1XG5cdFx0fSxcblx0XHRvcmlnaW5hbEltYWdlOiB7XG5cdFx0XHRzcmM6ICdpbWcvX2dhbGxlcnkvZ2FsbGVyeV8yLmpwZycsXG5cdFx0XHR3OiAyMDAwLFxuXHRcdFx0aDogMTM1OFxuXHRcdH1cblx0fSxcblx0e1xuXHRcdG1lZGl1bUltYWdlOiB7XG5cdFx0XHRzcmM6ICdpbWcvX2dhbGxlcnkvZ2FsbGVyeV8zLmpwZycsXG5cdFx0XHR3OiAxMDAwLFxuXHRcdFx0aDogNjU1XG5cdFx0fSxcblx0XHRvcmlnaW5hbEltYWdlOiB7XG5cdFx0XHRzcmM6ICdpbWcvX2dhbGxlcnkvZ2FsbGVyeV8zLmpwZycsXG5cdFx0XHR3OiAyMTAwLFxuXHRcdFx0aDogMTM3M1xuXHRcdH1cblx0fSxcblx0e1xuXHRcdG1lZGl1bUltYWdlOiB7XG5cdFx0XHRzcmM6ICdpbWcvX2dhbGxlcnkvZ2FsbGVyeV8yLmpwZycsXG5cdFx0XHR3OiAxMjAwLFxuXHRcdFx0aDogNzI3XG5cdFx0fSxcblx0XHRvcmlnaW5hbEltYWdlOiB7XG5cdFx0XHRzcmM6ICdpbWcvX2dhbGxlcnkvZ2FsbGVyeV8yLmpwZycsXG5cdFx0XHR3OiAyMjAwLFxuXHRcdFx0aDogMTMzM1xuXHRcdH1cblx0fSxcblx0e1xuXHRcdG1lZGl1bUltYWdlOiB7XG5cdFx0XHRzcmM6ICdpbWcvX2dhbGxlcnkvZ2FsbGVyeV8yLmpwZycsXG5cdFx0XHR3OiA4NDgsXG5cdFx0XHRoOiAxMDAwXG5cdFx0fSxcblx0XHRvcmlnaW5hbEltYWdlOiB7XG5cdFx0XHRzcmM6ICdpbWcvX2dhbGxlcnkvZ2FsbGVyeV8yLmpwZycsXG5cdFx0XHR3OiAxNjk1LFxuXHRcdFx0aDogMjAwMFxuXHRcdH1cblx0fVxuXHRdO1xuXG5cdHZhciBvcHRpb25zID0ge1xuXHRcdGhpc3Rvcnk6IGZhbHNlLFxuXHRcdGZvY3VzOiBmYWxzZSxcblx0XHR6b29tRWw6IGZhbHNlLFxuXHRcdGxvb3A6IGZhbHNlLFxuXHRcdG1vZGFsOiBmYWxzZSxcblx0XHR0YXBUb0Nsb3NlOiBmYWxzZSxcblx0XHR0aW1lVG9JZGxlOiA5OTk5OSxcblx0XHR0aW1lVG9JZGxlT3V0c2lkZTogOTk5OTksXG5cdFx0YmFyc1NpemU6IHt0b3A6MCwgYm90dG9tOjB9LCBcblx0XHRwaW5jaFRvQ2xvc2U6IGZhbHNlLFxuXHRcdGFycm93S2V5czogZmFsc2UsXG5cdFx0ZXNjS2V5OiBmYWxzZSxcblx0XHRjbG9zZU9uU2Nyb2xsOiBmYWxzZSxcblx0XHRjbG9zZU9uVmVydGljYWxEcmFnOiBmYWxzZSxcblx0XHRzaG93QW5pbWF0aW9uRHVyYXRpb246IDAsXG5cdFx0aGlkZUFuaW1hdGlvbkR1cmF0aW9uOiAwXG5cblx0fTtcblxuXHRnYWxsZXJ5ID0gbmV3IFBob3RvU3dpcGUocHN3cEVsZW1lbnQsIFBob3RvU3dpcGVVSV9EZWZhdWx0LCBpdGVtcywgb3B0aW9ucyk7XG5cblx0dmFyIHJlYWxWaWV3cG9ydFdpZHRoLFxuXHR1c2VMYXJnZUltYWdlcyA9IGZhbHNlLFxuXHRmaXJzdFJlc2l6ZSA9IHRydWUsXG5cdGltYWdlU3JjV2lsbENoYW5nZTtcblxuXHRnYWxsZXJ5Lmxpc3RlbignYmVmb3JlUmVzaXplJywgZnVuY3Rpb24oKSB7XG5cblxuXHRcdHJlYWxWaWV3cG9ydFdpZHRoID0gZ2FsbGVyeS52aWV3cG9ydFNpemUueCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG5cblx0XHRpZih1c2VMYXJnZUltYWdlcyAmJiByZWFsVmlld3BvcnRXaWR0aCA8IDEwMDApIHtcblx0XHRcdHVzZUxhcmdlSW1hZ2VzID0gZmFsc2U7XG5cdFx0XHRpbWFnZVNyY1dpbGxDaGFuZ2UgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZighdXNlTGFyZ2VJbWFnZXMgJiYgcmVhbFZpZXdwb3J0V2lkdGggPj0gMTAwMCkge1xuXHRcdFx0dXNlTGFyZ2VJbWFnZXMgPSB0cnVlO1xuXHRcdFx0aW1hZ2VTcmNXaWxsQ2hhbmdlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZihpbWFnZVNyY1dpbGxDaGFuZ2UgJiYgIWZpcnN0UmVzaXplKSB7XG5cblx0XHRcdGdhbGxlcnkuaW52YWxpZGF0ZUN1cnJJdGVtcygpO1xuXHRcdH1cblxuXHRcdGlmKGZpcnN0UmVzaXplKSB7XG5cdFx0XHRmaXJzdFJlc2l6ZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGltYWdlU3JjV2lsbENoYW5nZSA9IGZhbHNlO1xuXG5cdH0pO1xuXG5cdGdhbGxlcnkubGlzdGVuKCdhZnRlckNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5nYWxsZXJ5LWJ1dHRvbi0tbGVmdCwgLmdhbGxlcnktYnV0dG9uLS1yaWdodCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuXG5cdFx0aWYgKGdhbGxlcnkuZ2V0Q3VycmVudEluZGV4KCkgPT0gMCkge1xuXHRcdFx0JCgnLmdhbGxlcnktYnV0dG9uLS1sZWZ0JykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHRcdGlmIChnYWxsZXJ5LmdldEN1cnJlbnRJbmRleCgpID09IChnYWxsZXJ5Lm9wdGlvbnMuZ2V0TnVtSXRlbXNGbigpIC0gMSkpIHtcblx0XHRcdCQoJy5nYWxsZXJ5LWJ1dHRvbi0tcmlnaHQnKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHR9XG5cdH0pO1xuXG5cdGdhbGxlcnkubGlzdGVuKCdpbWFnZUxvYWRDb21wbGV0ZScsIGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7IFxuXHRcdGlmICghZ2FsbGVyeUxvYWRlZCkge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnLmdhbGxlcnktYnV0dG9uLS1jbG9zZScpLmFkZENsYXNzKCdvcGVuJyk7XG5cdFx0XHRcdGdhbGxlcnlMb2FkZWQgPSB0cnVlO1xuXHRcdFx0fSwgMzAwKTtcblx0XHR9XG5cblx0fSk7XG5cblx0JCgnLmdhbGxlcnktYnV0dG9uLS1sZWZ0JykuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcblx0XHRcdGdhbGxlcnkucHJldigpO1x0XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSk7IFxuXG5cdCQoJy5nYWxsZXJ5LWJ1dHRvbi0tcmlnaHQnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcblx0XHRcdGdhbGxlcnkubmV4dCgpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSk7IFxuXG5cblx0Z2FsbGVyeS5saXN0ZW4oJ2dldHRpbmdEYXRhJywgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcblxuXHRcdGlmKCB1c2VMYXJnZUltYWdlcyApIHtcblx0XHRcdGl0ZW0uc3JjID0gaXRlbS5vcmlnaW5hbEltYWdlLnNyYztcblx0XHRcdGl0ZW0udyA9IGl0ZW0ub3JpZ2luYWxJbWFnZS53O1xuXHRcdFx0aXRlbS5oID0gaXRlbS5vcmlnaW5hbEltYWdlLmg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGl0ZW0uc3JjID0gaXRlbS5tZWRpdW1JbWFnZS5zcmM7XG5cdFx0XHRpdGVtLncgPSBpdGVtLm1lZGl1bUltYWdlLnc7XG5cdFx0XHRpdGVtLmggPSBpdGVtLm1lZGl1bUltYWdlLmg7XG5cdFx0fVxuXG5cdH0pO1xuXHRnYWxsZXJ5LmluaXQoKTtcbn07XG5cblxuJCgnI3N0b3J5QnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKXsgXG5cdCQoXCIjc3Rvcnktd3JhcHBlclwiKS5hZGRDbGFzcygncGFnZS13cmFwcGVyLS1vcGVuJyk7XG59KTtcblxuJCgnI2hvbWUnKS5jbGljayhmdW5jdGlvbigpeyBcblx0JChcIiNzdG9yeS13cmFwcGVyXCIpLnJlbW92ZUNsYXNzKCdwYWdlLXdyYXBwZXItLW9wZW4nKTtcbn0pO1xuXG4kKCcuZ2FsbGVyeS1pbWFnZS1ncmlkLWl0ZW0nKS5jbGljayhmdW5jdGlvbigpeyBcblx0JChcIiNnYWxsZXJ5LXdyYXBwZXJcIikuYWRkQ2xhc3MoJ3BhZ2Utd3JhcHBlci0tb3BlbicpO1xuXHQkKCcubmF2YmFyJykuY3NzKCd6LWluZGV4JywgJzAnKTtcblx0JCgnI2dhbGxlcnlfc2VjJykuY3NzKCd0b3AnLCAnMHB4Jyk7XG5cdCQoXCJib2R5XCIpLmNzcyhcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIpO1xuXHRcblx0aWYgKCFnYWxsZXJ5T3BlbmVkKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdG9wZW5QaG90b1N3aXBlKCk7XG5cdFx0fSwgMTIwMCk7XG5cdFx0Z2FsbGVyeU9wZW5lZCA9IHRydWU7XG5cdH1cbn0pO1xuXG4kKCcuZ2FsbGVyeS1idXR0b24tLWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKXsgXG5cdCQoXCIjZ2FsbGVyeS13cmFwcGVyXCIpLnJlbW92ZUNsYXNzKCdwYWdlLXdyYXBwZXItLW9wZW4nKTtcblx0JCgnLm5hdmJhcicpLmNzcygnei1pbmRleCcsICcxMScpO1xuXHQkKFwiYm9keVwiKS5jc3MoXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIik7XG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0Z2FsbGVyeS5nb1RvKDApO1xuXHR9LCAxMjAwKTtcbn0pO1xuXG4kKCcuYnV0dG9uLWl0ZW0tLWxlZ2FsJykuY2xpY2soZnVuY3Rpb24oKXsgXG5cdCQoXCIjZm9vdGVyLXdyYXBwZXJcIikuYWRkQ2xhc3MoJ3BhZ2Utd3JhcHBlci0tb3BlbicpO1xufSk7XG5cbiQoJyNmb290ZXJDbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7IFxuXHQkKFwiI2Zvb3Rlci13cmFwcGVyXCIpLnJlbW92ZUNsYXNzKCdwYWdlLXdyYXBwZXItLW9wZW4nKTtcbn0pO1xuXG4kKCcjdGlja2V0cycpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKXsgXG5cdCQoXCIjcGxhbmUtaW1hZ2VcIikuY3NzKHsndHJhbnNmb3JtJzogJ3JvdGF0ZSgtMzVkZWcpJ30pO1xufSk7XG5cbiQoJyN0aWNrZXRzJykubW91c2VsZWF2ZShmdW5jdGlvbigpeyBcblx0JChcIiNwbGFuZS1pbWFnZVwiKS5jc3Moeyd0cmFuc2Zvcm0nOiAncm90YXRlKDBkZWcpJ30pO1xufSk7XG5cbiQoJyN0cmFpbGVyJykubW91c2VlbnRlcihmdW5jdGlvbigpeyBcblx0JChcIiNwbGFuZS1pbWFnZVwiKS5jc3Moeyd0cmFuc2Zvcm0nOiAncm90YXRlKDM1ZGVnKSd9KTtcbn0pO1xuXG4kKCcjdHJhaWxlcicpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKXsgXG5cdCQoXCIjcGxhbmUtaW1hZ2VcIikuY3NzKHsndHJhbnNmb3JtJzogJ3JvdGF0ZSgwZGVnKSd9KTtcbn0pOyJdLCJmaWxlIjoicGFnZS5qcyJ9
