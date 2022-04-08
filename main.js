
const tick = new Audio("sounds/tick.mp3");

const tock = new Audio("sounds/tock.mp3");

const kickDrum = new Audio("sounds/kick-drum.mp3");

const snareDrum = new Audio("sounds/snare-drum.mp3");


const hiHat = new Audio("sounds/hi-hat.mp3");

let tickCounter = 0;


const counter = document.querySelector(".counter");

const setTempoText = document.querySelector("#set-tempo-text");
const setTempoButton = document.querySelector("#set-tempo-button");


const metronomeCheck = document.querySelector("#metronome-drum");

const kickDrumCheck = document.querySelector("#kick-drum");
const kickDrumTiming = document.querySelector("#kick-drum-timing");

const snareDrumCheck = document.querySelector("#snare-drum");
const snareDrumTiming = document.querySelector("#snare-drum-timing");

const hiHatCheck = document.querySelector("#hi-hat");
const hiHatTiming = document.querySelector("#hi-hat-timing");


function update() {
	tickCounter++;
	if (tickCounter < 5) {
		counter.innerHTML = tickCounter;
	}

	if (kickDrumCheck.checked) {
		if (Number(kickDrumTiming.value) === tickCounter) {
			kickDrum.play();
		} else if (Number(kickDrumTiming.value) === 0) {
			kickDrum.play();
		}
	}

	
	if (snareDrumCheck.checked) {
		if (Number(snareDrumTiming.value) === tickCounter) {
			snareDrum.play();
		} else if (Number(snareDrumTiming.value) === 0) {
			snareDrum.play();
		}
	}

	
	if (hiHatCheck.checked) {
		if (Number(hiHatTiming.value) === tickCounter) {
			hiHat.load();
			hiHat.play();
		} else if (Number(hiHatTiming.value) === 0) {
			hiHat.load();
			hiHat.play();
		}
	}

	if (metronomeCheck.checked) {
		if (tickCounter % 4 === 0) {
			tock.play();
			tickCounter = 0;
		} else {
			tick.play();
		}
	} else {
		if (tickCounter % 4 === 0) {
			tickCounter = 0;
		}
	}
}

function setupUpdate() {
	setInterval(update, 600);
}


setTimeout(setupUpdate, 300);

