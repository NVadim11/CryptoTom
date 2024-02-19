const play = document.querySelector(".soundToggler__itemOn");
const pause = document.querySelector(".soundToggler__itemOff");

const phaseOne = document.querySelector(".mainContent__phaseOne");
const phaseTwo = document.querySelector(".mainContent__phaseTwo")
const startFarm = document.querySelector(".mainContent__startBtn");

function toggleMute() {
    let myAudio = document.getElementById('audio');
    myAudio.muted = !myAudio.muted;
 }

// show hide state
if (startFarm) {
    startFarm.addEventListener("click", function (e) {
        phaseTwo.classList.add("_active");
        phaseOne.classList.add("_hide");
    })
}