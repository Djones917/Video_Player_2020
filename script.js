const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');



// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatPlayIcon);
video.addEventListener('play', updatPlayIcon);
video.addEventListener('timeupdate', updateProgress);