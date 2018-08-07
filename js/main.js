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

	function getPaused($video, videoElType) {
		return new Promise((resolve, reject) => {
			if (videoElType == 'video') {
				resolve($video.get(0).paused);
			} else {
				$video.vimeo.getPaused().then(resolve).catch(reject);
			}
		});
	}

	function togglePlay($el) {
		const $inner = $el.children('.inner');
		const $videoChild = $el.children('video');
		const $iframeChild = $el.children('iframe');
		let $video, videoElType;
		if ($el.children('video').length > 0) {
			$video = $videoChild;
			videoElType = 'video';
		} else {
			$video = {
				$: $iframeChild,
				vimeo: new Vimeo.Player($iframeChild.get(0))
			};
			videoElType = 'iframe';
			console.log($video);
		}
		// const playing = !($video.get(0).paused);
		getPaused($video, videoElType)
			.then(paused => {
				const playing = !paused;
				const $control = $video.vimeo || $video.get(0);
				if (playing) {
					$control.pause();
				} else {
					toggleClasses($el, $inner, $video);
					setTimeout(function() {
						$control.play();
						$control.on('pause', onPause);
						$control.on('click', onClick);
					}, 600);
				}

				function onClick(e) {
					e.stopPropagation();
					this.vimeo ? this.vimeo.pause() : this.pause();
					this.off('click', onClick);
				}

				function onPause() {
					console.log('pause');
					toggleClasses($el, $inner, $video);
					this.vimeo ? this.vimeo.off('pause', onPause) : this.off('pause', onPause);
					if (document.exitFullscreen) {
						document.exitFullscreen();
					} else if (document.webkitExitFullscreen) {
						document.webkitExitFullscreen();
					} else if (document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					} else if (document.msExitFullscreen) {
						document.msExitFullscreen();
					}
				}
			})
			.catch(console.warn);
	}

	function toggleClasses($el, $inner, $video) {
			$inner.toggleClass('hide-text');
			$el.toggleClass('outer');
			$el.toggleClass('taller');
			$video.$ ? $video.$.toggleClass('video-hide') : $video.toggleClass('video-hide');
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
	let opacity = 1 - (scrollt / bottom) * 3;
	$el.css("opacity", opacity);
	$el.css("transform", 'translateY(' + Math.ceil(result) + 'px)' );	
}, 1000/60);
