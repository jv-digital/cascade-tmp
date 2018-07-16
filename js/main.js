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