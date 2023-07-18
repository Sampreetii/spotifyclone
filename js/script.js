function playpause(){
    let songState = document.getElementById("songState");
    let song = document.getElementById("song-asset");
    let playbtn = document.getElementById("play-icon");
    let pausebtn = document.getElementById("pause-icon");
    if(!(songState.value === 'playing')) {
        song.play();
        songState.value = 'playing';
        playbtn.style.display = "none";
        pausebtn.style.display = "block";
    } else {
        song.pause();
        songState.value = 'paused';
        playbtn.style.display = "block";
        pausebtn.style.display = "none";
    }
}