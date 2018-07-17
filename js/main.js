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


$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
    $(".btm").css("opacity", 1 - $(window).scrollTop() / 250);
  });


 const intitalOffest = $("#top2").offset().top;
 let $scrollt = 0;
 // console.log(intitalOffest);


$(document).scroll(function () {
	$scrollt = $(window).scrollTop();
	console.log("$scrollt");

    // $("#top").animate({margin: "95px 0px 0px 0px"}, 250);
    // $("#btm").animate({margin: "95px 0px 0px 0px"}, 250);
});

setInterval(function(){
	// console.log(scrollt)
	// console.log(intitalOffest);
	console.log("scroll" + $scrollt);
	console.log("scrollinitial" + intitalOffest);
	$("#top2").css("transform", 'translateY(' + $scrollt + 'px)' );	
}, 1000/60);
