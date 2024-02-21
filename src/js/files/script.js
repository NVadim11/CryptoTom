const play = document.querySelector(".soundToggler__itemOn");
const pause = document.querySelector(".soundToggler__itemOff");
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

function toggleMute() {
}

if (play) {
    play.addEventListener("click", function(e) {
        play.classList.remove("_active");   
        play.classList.add("_hide");   
        pause.classList.remove("_hide");   
        pause.classList.add("_active");   
    })
}
if (pause) {
    pause.addEventListener("click", function(e) {
        play.classList.add("_active");   
        play.classList.remove("_hide");   
        pause.classList.add("_hide");   
        pause.classList.remove("_active");         
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

// Coin clicker
if(sayCat) {
    // Energy bar
    let limit = parseInt(document.getElementById("progressCount").innerHTML, 10);
    let currCoins = parseInt(document.getElementById("coinAmount").innerHTML, 10);
    let filledBar = document.getElementById("filledBar");

    sayCat.addEventListener("click", (function () {
    let energyProgress = filledBar.value;
    document.getElementById("progressCount").innerHTML = --limit;
    filledBar.value = --energyProgress;
    document.getElementById("coinAmount").innerHTML = ++currCoins;
    })) 
} 