const soundOn = document.querySelector(".soundToggler__itemOn");
const soundOff = document.querySelector(".soundToggler__itemOff");
const phaseOne = document.querySelector(".mainContent__phaseOne");
const phaseTwo = document.querySelector(".mainContent__phaseTwo")
const startFarm = document.querySelector(".mainContent__startBtn");
const stopFarm = document.querySelector(".mainContent__backBtn");
const sayCat = document.querySelector(".mainContent__sayBtn");
const catIdle = document.getElementById("catIdle");
const catActive = document.getElementById("catActive");
const burger = document.querySelector(".header__mobileBurger-btn");
const mobileMenu = document.querySelector(".header__mobileMenu");
const burgerLink = document.querySelector(".header__mobileMenu-links");

// https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg
// meow.mp3
let audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg');
function soundPlay() {    
    audio.play();
}
function toggleMuteAllSounds() {
audio.muted = !audio.muted;
}
 
if (soundOn) {
    soundOn.addEventListener("click", function(e) {
        soundOn.classList.remove("_active");   
        soundOn.classList.add("_hide");   
        soundOff.classList.remove("_hide");   
        soundOff.classList.add("_active");
        toggleMuteAllSounds();
    })
}
if (soundOff) {
    soundOff.addEventListener("click", function(e) {
        soundOn.classList.add("_active");   
        soundOn.classList.remove("_hide");   
        soundOff.classList.add("_hide");   
        soundOff.classList.remove("_active"); 
        toggleMuteAllSounds();
    })
}
if (startFarm) {
    startFarm.addEventListener("click", function (e) {
        phaseTwo.classList.add("_active");
        phaseOne.classList.add("_hide");
    })
}
if (stopFarm) {
    stopFarm.addEventListener("click", function (e) {
        phaseTwo.classList.remove("_active");
        phaseOne.classList.remove("_hide");
        catActive.classList.remove("_active");
        catIdle.classList.remove("_hide");
        catActive.classList.add("_hide");
        catIdle.classList.add("_active");
    })
}
if (burger) {
    burger.addEventListener("click", function(e) {
        burger.classList.toggle('is-active');
        e.stopPropagation();
        mobileMenu.classList.toggle('_active');
    })
}    
document.addEventListener('click', function (event) {
    if (event.target !==  mobileMenu) {
        burger.classList.remove('is-active');
        mobileMenu.classList.remove('_active');
    }
});

if (burgerLink) {
    burgerLink.addEventListener("click", function(e) {
        // e.stopPropagation();
        burger.classList.remove('is-active');
        mobileMenu.classList.remove('_active');
    })
}
function coinLogic() {
    let limit = parseFloat(document.getElementById("progressCount").innerHTML, 10);
    let currCoins = parseFloat(document.getElementById("coinAmount").innerHTML, 10);
    let energyStatus = document.getElementById("filledBar");    
    let energyRemaining = energyStatus.value;

    let energyLimit = energyStatus.max;

    let coinPerClick = 1;
    let energyGain = 1;

    function energyRegeneration() {
        if (energyStatus.value < energyStatus.max) {
            setInterval(() => {
                energyStatus.value = energyStatus += energyGain
            }, 1000);
        }
    }    

    if (parseFloat(energyStatus.value) < parseFloat(energyStatus.max)) {
        energyRegeneration();
    }  

    sayCat.addEventListener("click", (function () {  
        catActive.classList.remove("_hide");
        catActive.classList.add("_active");
        catIdle.classList.add("_hide");
        catIdle.classList.remove("_active");

    document.getElementById("progressCount").innerHTML = limit -= coinPerClick;
    energyStatus.value = energyRemaining -= coinPerClick;
    document.getElementById("coinAmount").innerHTML = currCoins += coinPerClick;

    soundPlay();
    })) 
}
coinLogic();