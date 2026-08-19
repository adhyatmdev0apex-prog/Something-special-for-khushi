/*=========================================================
                AUDIO ENGINE
=========================================================*/

function playPiano(){

    const audio = document.getElementById("piano");

    if(!audio) return;

    audio.volume = 0.4;
    audio.loop   = false;

    audio.play().catch(() => {});

}

function stopPiano(){

    const audio = document.getElementById("piano");

    if(!audio) return;

    audio.pause();
    audio.currentTime = 0;

}
