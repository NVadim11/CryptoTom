// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const play = document.querySelector(".soundToggler__itemOn");
const pause = document.querySelector(".soundToggler__itemOff");

function toggleMute() {
    var myAudio = document.getElementById('audio');
    myAudio.muted = !myAudio.muted;
 }

