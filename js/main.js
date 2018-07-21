// ===== Case Studies Interactivity ====== //

(function(){
	const $outer = $('.outer');

	$outer.click(function() {
		const $this = $(this);

		$('html, body').animate({
			scrollTop: $this.offset().top
		}, 200);
		togglePlay($this);
	});

	function togglePlay($el) {
		const $inner = $el.children('.inner');
		const $video = $el.children('video');
		const playing = !($video.get(0).paused);
		if (playing) {
			$video.get(0).pause();
		} else {
			toggleClasses($el, $inner, $video);
			setTimeout(function() {
				$video.get(0).play();
				$video.one('pause', onPause);
				$video.one('click', function(e) {
					e.stopPropagation();
					this.pause();
				});
			}, 600);
		}

		function onPause() {
			console.log('pause');
			toggleClasses($el, $inner, $video);
		}
	}

	function toggleClasses($el, $inner, $video) {
			$inner.toggleClass('hide-text');
			$el.toggleClass('outer');
			$el.toggleClass('taller');
			$video.toggleClass('video-hide');
	}

})();

// ===== Reel Interactivity ====== //

(function(){
	var reelBtn = document.getElementById('reel-btn');
	var reelVideo = document.getElementById('reel-video');
	reelBtn.addEventListener('click', function(){
		reelVideo.play();
		reelVideo.setAttribute("controls", "");
		reelBtn.style.display = "none";
	});
})();



// ===== Scroll Interactivity ====== //
 const intitalOffset = $(".banner-content").offset().top;
 let scrollt = 0;
 // console.log(intitalOffest);


$(document).scroll(function () {
	scrollt = $(window).scrollTop();
	console.log("$scrollt");

    // $("#top").animate({margin: "95px 0px 0px 0px"}, 250);
    // $("#btm").animate({margin: "95px 0px 0px 0px"}, 250);
});

setInterval(function(){
	const $el = $(".banner-content");
	let style = $el.css("transform");
	const transform = style ? style.match(/matrix\(.+?\s([0-9]+)\)/) : null;
	const translateY = transform && transform.length > 1 ? Number(transform[1]) : 0;
	const target = scrollt;
	const delta = target - translateY;
	const ease = delta / 4;
	const result = translateY + ease;

	const bottom = $(".overlay").offset().top + $(".overlay").outerHeight(true);
	let opacity = 1 - (scrollt / bottom) * 2;
	$el.css("opacity", opacity);
	$el.css("transform", 'translateY(' + Math.ceil(result) + 'px)' );	
}, 1000/60);
