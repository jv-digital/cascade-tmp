// ===== Fade Text ====== //

const playBtn = document.getElementById('playBtn');
const heading = document.getElementById('heading');


// ===== Selectors ====== //
const outer = document.querySelector('#outer1');
const inner = document.querySelector('#inner1');
const video = document.querySelector('#video1');

const outer2 = document.querySelector('#outer2');
const inner2 = document.querySelector('#inner2');
const video2 = document.querySelector('#video2');

const outer3 = document.querySelector('#outer3');
const inner3 = document.querySelector('#inner3');
const video3 = document.querySelector('#video3');

const reelVideo = document.querySelector('#reel-video');
const reelBtn = document.querySelector('#reel-btn');


let playBtnVisible = true;
let  isPlaying = false;
// video.loop = true;


// ===== IIFE ====== //

(function(){
	outer.addEventListener('click', function(){
	 	inner.classList.toggle('hide-text');
	 	outer.classList.toggle('outer');
	 	outer.classList.toggle('taller');
			setTimeout(() => {
			video.classList.toggle('video-hide');
			togglePlay1();
		}, 600);

	});

})();

// 2

(function(){
	outer2.addEventListener('click', function(){
	 	inner2.classList.toggle('hide-text');
	 	outer2.classList.toggle('outer');
	 	outer2.classList.toggle('taller');
			setTimeout(() => {
			video2.classList.toggle('video-hide');
			togglePlay2();
		}, 600);

	});
})();

// 3

(function(){
	outer3.addEventListener('click', function(){
	 	inner3.classList.toggle('hide-text');
	 	outer3.classList.toggle('outer');
	 	outer3.classList.toggle('taller');
			setTimeout(() => {
			video3.classList.toggle('video-hide');
			togglePlay3();
		}, 600);

	});

})();

// ===== Toggle Videos ====== //

function togglePlay1() {
  if (isPlaying) {
    video.pause()
  } else {
    video.play();
  }
};

video.onplaying = function() {
  isPlaying = true;
};

video.onpause = function() {
  isPlaying = false;
	inner.classList.toggle('hide-text');
	outer.classList.toggle('outer');
	outer.classList.toggle('taller');
		setTimeout(() => {
		video.classList.toggle('video-hide');
	}, 600);
}

// 2

function togglePlay2() {
  if (isPlaying) {
    video2.pause()
  } else {
    video2.play();
  }
};

video2.onplaying = function() {
  isPlaying = true;
};

video2.onpause = function() {
  isPlaying = false;
	inner2.classList.toggle('hide-text');
	outer2.classList.toggle('outer');
	outer2.classList.toggle('taller');
		setTimeout(() => {
		video2.classList.toggle('video-hide');
	}, 600);
}



// 3

function togglePlay3() {
  if (isPlaying) {
    video3.pause()
  } else {
    video3.play();
  }
};

video3.onplaying = function() {
  isPlaying = true;
};

video3.onpause = function() {
  isPlaying = false;
	inner3.classList.toggle('hide-text');
	outer3.classList.toggle('outer');
	outer3.classList.toggle('taller');
		setTimeout(() => {
		video3.classList.toggle('video-hide');
	}, 600);
}

var ctrl = false;

(function(){
	reelBtn.addEventListener('click', function(){
	reelVideo.setAttribute("controls", "");
	ctrl = true;
	reelVideo.play();
	reelBtn.style.display = "none";
	});
})();


$('.outerClass1').click(function (event) {
 event.preventDefault();
 $('html, body').animate({
     scrollTop: $('.test').offset().top
   }, 1000);
});

$('.outerClass2').click(function (event) {
 event.preventDefault();
 $('html, body').animate({
     scrollTop: $('.test2').offset().top
   }, 1000);
});

$('.outerClass3').click(function (event) {
 event.preventDefault();
 $('html, body').animate({
     scrollTop: $('.test3').offset().top
   }, 1000);
});




// ====




// window.onscroll = function() {
// };


// function centerVideo() {
//   if (window.pageYOffset >= 500) {

//     }
//   if (window.pageYOffset < 499) {
//     }
// }

// function topFunction() {
//     if (window.pageYOffset > 0) {
//       window.scrollBy(0, -40);
//     }
// }


// $(window).scroll(function() {

// })





