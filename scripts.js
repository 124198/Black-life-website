// scripts.js

const video = document.getElementById('video-player');
const playPauseButton = document.getElementById('play-pause');

playPauseButton.addEventListener('click', function () {
    if (video.paused || video.ended) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
});
