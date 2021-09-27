// Setup
const squares = document.querySelectorAll(".square");
const time = document.getElementById("time");
const score = document.getElementById("score");
const startBtn = document.getElementById("start");
const question = document.getElementById("q-and-a");
const input = document.getElementById("question");
const submit = document.getElementById("submit");
const bonkId = "bonkSFX";
const yayId = "yaySFX";

registerSoundsOnBodyLoad(
	[{ path: "/Deannasaur/assets/audio/bonk-sfx.mp3", id: bonkId }],
	() => {
		bgmLoaded(() => {
			startBtn.disabled = false;
		});
	}
);

submit.addEventListener("click", (_) => {
	if (input.value === "2352") {
		window.location.replace("/Deannasaur/jumping-don/");
	} else {
		input.style.borderColor = "red";
	}
});

// Game
let result = 0;
let timeLeft = 30;
let hitPosition = "";

const putDon = () => {
	squares.forEach((s) => {
		s.classList.remove("don");
		s.classList.remove("bonk");
	});
	let randomSquare = squares[Math.floor(Math.random() * 16)];
	randomSquare.classList.add("don");

	hitPosition = randomSquare.id;
};

squares.forEach((s) => {
	s.addEventListener("mouseup", () => {
		if (s.id == hitPosition && !s.classList.contains("bonk") && timeLeft >= 0) {
			playSound(bonkId, 0.1);
			score.textContent = ++result;
			s.classList.replace("don", "bonk");
		}
	});
});

const runGame = () => {
	let game = setInterval(putDon, 1000);
	let timer = setInterval(() => {
		let currTime = --timeLeft;
		if (currTime < 0) {
			pauseBgm();
			clearInterval(game);
			clearInterval(timer);
			if (result >= 21) {
				playYay();
				question.style.display = "block";
				alert("Congrats, you won! Answer the question to proceed.");
			} else {
				alert("Aw man :( Please refresh the page to try again :>");
			}
		} else {
			time.textContent = timeLeft;
		}
	}, 1000);
};

startBtn.addEventListener("click", () => {
	startBtn.disabled = true;
	playBgm();
	runGame();
});
