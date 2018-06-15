    


    const box = document.querySelector('.box');
    const box2 = document.querySelector('.box2');
    const box3 = document.querySelector('.box3');

   
    const video = document.querySelector('.videobefore');
    const video2 = document.querySelector('.videobefore2');
    const video3 = document.querySelector('.videobefore3');


   	let  isPlaying = false;


    
    box.addEventListener('click', function() {
 	togglePlay();
      this.classList.toggle('opening');
       setTimeout(() => {
        this.classList.toggle('open');
      }, 500);
    });

    box2.addEventListener('click', function() {
 	togglePlay2();
      this.classList.toggle('opening');
       setTimeout(() => {
        this.classList.toggle('open');
      }, 500);
    });

    box3.addEventListener('click', function() {
 	togglePlay3();
      this.classList.toggle('opening');
       setTimeout(() => {
        this.classList.toggle('open');
      }, 500);
    });


    	

		function togglePlay() {
		  if (isPlaying) {
		    video.pause()
		    video.style.display = 'none';
		  } else {
		    video.play();
		    video.style.display = 'block';
		  }
		};
		video.onplaying = function() {
		  isPlaying = true;
		};
		video.onpause = function() {
		  isPlaying = false;
		};

			function togglePlay2() {
		  if (isPlaying) {
		    video2.pause()
		    video2.style.display = 'none';
		  } else {
		    video2.play();
		    video2.style.display = 'block';
		  }
		};
		video2.onplaying = function() {
		  isPlaying = true;
		};
		video2.onpause = function() {
		  isPlaying = false;
		};

			function togglePlay3() {
		  if (isPlaying) {
		    video3.pause()
		    video3.style.display = 'none';
		  } else {
		    video3.play();
		    video3.style.display = 'block';
		  }
		};
		video3.onplaying = function() {
		  isPlaying = true;
		};
		video3.onpause = function() {
		  isPlaying = false;
		};