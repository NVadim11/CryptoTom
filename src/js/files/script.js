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

let audio = new Audio('meow.mp3');
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
    })
}
if (sayCat) {
    sayCat.addEventListener("click", function (e) {
        catActive.classList.add("_active");
        catIdle.classList.add("_hide");
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
if(sayCat) {
    let limit = parseInt(document.getElementById("progressCount").innerHTML, 10);
    let currCoins = parseInt(document.getElementById("coinAmount").innerHTML, 10);
    let filledBar = document.getElementById("filledBar");

    sayCat.addEventListener("click", (function () {
    let energyProgress = filledBar.value;
    document.getElementById("progressCount").innerHTML = --limit;
    filledBar.value = --energyProgress;
    document.getElementById("coinAmount").innerHTML = ++currCoins;
    soundPlay();
    })) 
} 