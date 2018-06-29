


const wrapper = document.querySelector('.cs-wrapper');
const box = document.querySelector('.box');
const video = document.querySelector('.cs-video');

const parah = document.querySelector('.cs-head');
const para = document.querySelector('.cs-para');
const btn = document.querySelector('.cs-btn');


// ======== //

(function(){
	wrapper.addEventListener('click', function() {
		this.classList.toggle('widen');
		box.classList.toggle('widen')
		parah.classList.toggle('fade-text');
		para.classList.toggle('fade-text');
		btn.classList.toggle('fade-text');

		setTimeout(() => {
			video.classList.toggle('show-video');
			togglePlay();
		}, 600);
});

let  isPlaying = false;
video.loop = true;

function togglePlay() {
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
};}())


// ======== //


const wrapper2 = document.querySelector('.cs-wrapper2');
const box2 = document.querySelector('.box2');
const video2 = document.querySelector('.cs-video2');

const parah2 = document.querySelector('.cs-head2');
const para2 = document.querySelector('.cs-para2');
const btn2 = document.querySelector('.cs-btn2');

(function(){
	wrapper2.addEventListener('click', function() {
		this.classList.toggle('widen');
		box2.classList.toggle('widen')
		parah2.classList.toggle('fade-text');
		para2.classList.toggle('fade-text');
		btn2.classList.toggle('fade-text');

		setTimeout(() => {
			video2.classList.toggle('show-video');
			togglePlay();
		}, 600);
});

let  isPlaying = false;
video2.loop = true;

function togglePlay() {
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
};}())


// ======== //

const wrapper3 = document.querySelector('.cs-wrapper3');
const box3 = document.querySelector('.box3');
const video3 = document.querySelector('.cs-video3');

const parah3 = document.querySelector('.cs-head3');
const para3 = document.querySelector('.cs-para3');
const btn3 = document.querySelector('.cs-btn3');

(function(){
	wrapper3.addEventListener('click', function() {
		this.classList.toggle('widen');
		box3.classList.toggle('widen')
		parah3.classList.toggle('fade-text');
		para3.classList.toggle('fade-text');
		btn3.classList.toggle('fade-text');

		setTimeout(() => {
			video3.classList.toggle('show-video');
			togglePlay();
		}, 600);
});

let  isPlaying = false;
video3.loop = true;

function togglePlay() {
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
};}())


// ===============

