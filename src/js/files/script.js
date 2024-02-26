// import { Connection, Keypair } from '@solana/web3.js'
// // import * as bs58 from "bs58";

// const wallet = Keypair.generate();
// console.log(wallet);
// // console.log("public key:" ${wallet.publicKey.toBase58()});
// const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
// console.log(connection);


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

let maximumEnergy = parseInt(document.getElementById("maximumEnergy").innerHTML)
let currEnergy = parseInt(document.getElementById("energyCount").innerHTML);
let currCoins = parseInt(document.getElementById("coinAmount").innerHTML);
let energyBar = document.getElementById("filledBar");
let energyLimit = parseInt(document.getElementById("filledBar").max); 
let energyStatus = parseInt(document.getElementById("filledBar").value); 

let coinPerClick = 1;
let energyGain = 1;

energyStatus = currEnergy;
currEnergy = energyStatus;

let enValue = energyStatus;
let enMax = energyLimit;

function coinLogic() {
    sayCat.addEventListener("click", (function () {  
        catActive.classList.remove("_hide");
        catActive.classList.add("_active");
        catIdle.classList.add("_hide");
        catIdle.classList.remove("_active");
        document.getElementById("energyCount").innerHTML = currEnergy -= coinPerClick;
        document.getElementById("filledBar").value = enValue -= coinPerClick;
        document.getElementById("coinAmount").innerHTML = currCoins += coinPerClick;
        // energyUpdate()
        soundPlay();
    })) 
}
coinLogic()
// Energy regeneration
// function energyUpdate() {   
//     const energyRegenerationInterval = setInterval(function() {
//         if (enValue < enMax) {
//             document.getElementById("filledBar").value = enValue += energyGain;
//             document.getElementById("energyCount").innerHTML = currEnergy += energyGain;
//             console.log(enValue);
//         } else if (enValue >= enMax) {
//             clearInterval(energyRegenerationInterval);
//             console.log('interval demounted');
//         }
//     }, 1000);   
// }   


// }  
