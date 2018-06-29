var $video = $("#click"), //jquery-wrapped video element
        mousedown = false;

    $video.click(function(){
        if (this.paused) {
            this.play();
            return false;
        }
        return true;
    });

    $video.on('mousedown', function () {
        mousedown = true;
    });

    $(window).on('mouseup', function () {
        mousedown = false;
    });

    $video.on('play', function () {
        $video.attr('controls', '');
    });

    $video.on('pause', function () {
        if (!mousedown) {
            $video.removeAttr('controls');
        }
    });
