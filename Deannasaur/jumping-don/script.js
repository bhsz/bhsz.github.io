// Setup
const time = document.getElementById("time");
const bean = document.getElementById("obstacle");
const don = document.getElementById("character");
const question = document.getElementById("q-and-a");
const input = document.getElementById("question");
const submit = document.getElementById("submit");
const boingSFX = "boingSFX";

let hasGame = false;
let timeLeft = 21;
let timer;

registerSoundsOnBodyLoad(
	[{ path: "/Deannasaur/assets/audio/boing-sfx.mp3", id: boingSFX }],
	() => {
		bgmLoaded(() => {
			// Event listeners
			document.addEventListener("keyup", (e) => {
				if (e.code === "Space") {
					if (!hasGame) {
						hasGame = true;
						playBgm();
						setTimeout(() => {
							bean.classList.add("move");
							timer = setInterval(() => {
								time.textContent = --timeLeft;
							}, 1000);
						}, 1000);
					} else {
						playSound(boingSFX, 0.025);
						don.animate(
							[
								{ transform: "translateY(0px)" },
								{ transform: "translateY(-100px)" },
								{ transform: "translateY(-100px)" },
								{ transform: "translateY(0px)" },
							],
							650
						);
					}
				}
			});
		});
	}
);

submit.addEventListener("click", (_) => {
	let answer = input.value;
	if (answer === "21/05/2013") {
		window.location.replace("/Deannasaur/flappy-don/");
	} else {
		input.style.borderColor = "red";
	}
});

// Game logic
const runGame = () => {
	let oriDonTop = don.getBoundingClientRect().top;
	let end = "";

	let check = setInterval(() => {
		let donTop = don.getBoundingClientRect().top;
		let beanLeft = bean.getBoundingClientRect().left;

		if (beanLeft <= 80 && beanLeft > 0 && oriDonTop - donTop < 70) {
			// Collision check
			don.style.backgroundImage =
				"url(/Deannasaur/assets/images/don-bb-sad.jpg)";
			end = "Aw man :( Please refresh the page to try again :>";
		} else if (timeLeft === 0) {
			don.style.backgroundImage =
				"url(/Deannasaur/assets/images/don-bb-good.jpg)";
			end = "Congrats, you won! Answer the question to proceed.";
		}

		// Stop the game
		if (end) {
			clearInterval(check);
			clearInterval(timer);
			pauseBgm();
			bean.classList.remove("move");
			if (end.includes("won")) {
				playYay();
				question.style.display = "block";
			}
			alert(end);
		}
	}, 10);
};
runGame();
