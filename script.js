const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');





// Play and Pause Video Status
function toggleVideoStatus() {
   return true;
}


// Update Play/Pause Icon
function updatPlayIcon() {
    return true;
}


// Update Progress and Timestamp
function updateProgress() {
    return true;
}


// Set Video Time to Progress
function setVideoProgress() {
    return true;
}





// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatPlayIcon);
video.addEventListener('play', updatPlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);