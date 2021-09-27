const game = document.getElementById("game");
const pipe = document.getElementById("pipe");
const hole = document.getElementById("hole");
const don = document.getElementById("don");
const time = document.getElementById("time");
const question = document.getElementById("q-and-a");
const input = document.getElementById("question");
const submit = document.getElementById("submit");
const jumpSFX = "jumpSFX";

let jumping = false;
let jumpInterval;

let timeLeft = 21;
let ran = false;
let timer;
let main;

submit.addEventListener("click", (_) => {
	if (input.value.toLowerCase() === "ho soon zhi") {
		window.location.replace(
			"https://drive.google.com/file/d/1ZW2WPQAerbR7gg0umBVoAFGykLH40dn8/view?usp=sharing"
		);
	} else {
		input.style.borderColor = "red";
	}
});

const endGame = () => {
	pauseBgm();
	pipe.style.animation = "";
	hole.style.animation = "";
	clearInterval(main);
	main = null;
	clearInterval(timer);
};

const runGame = () => {
	ran = true;

	playBgm();

	pipe.style.animation = "move 2s linear infinite";
	hole.style.animation = "move 2s linear infinite";

	// Animation
	hole.addEventListener("animationiteration", (_) => {
		const offset = Math.floor(Math.random() * 150) + 250;
		hole.style.top = `-${offset}px`;
	});

	// Game
	timer = setInterval(() => {
		if (timeLeft === 0) {
			question.style.display = "block";
			playYay();
			endGame();
			alert("Congrats, you won! Answer the question to proceed.");
		} else {
			time.textContent = --timeLeft;
		}
	}, 1000);

	main = setInterval(() => {
		const donTop = don.getBoundingClientRect().top;
		const donBot = don.getBoundingClientRect().bottom;
		const donRight = don.getBoundingClientRect().right;
		const holeBot = hole.getBoundingClientRect().bottom;
		const holeTop = hole.getBoundingClientRect().top;
		const holeLeft = hole.getBoundingClientRect().left;
		const gameBot = game.getBoundingClientRect().bottom;

		// Gravity
		if (!jumping) {
			const newTop = donTop + 2;
			don.style.top = `${newTop}px`;
		}

		// Collision detection
		if (
			donBot > gameBot ||
			(holeLeft < donRight && (donTop <= holeTop || donBot >= holeBot))
		) {
			don.style.backgroundImage =
				"url(/Deannasaur/assets/images/flappy-don-lose.jpg)";
			endGame();
			alert("Aw man :( Please refresh the page to try again :>");
		}
	}, 10);
};

// Jump function
const jump = () => {
	playSound(jumpSFX, 0.005);
	jumping = true;
	let jumpCount = 0;
	if (jumpInterval) {
		clearInterval(jumpInterval);
	}
	jumpInterval = setInterval(() => {
		if (++jumpCount == 20 || !main) {
			jumping = false;
			clearInterval(jumpInterval);
		}
		const newTop = don.getBoundingClientRect().top - 2;
		don.style.top = `${newTop < 8 ? 8 : newTop}px`;
	}, 10);
};

registerSoundsOnBodyLoad(
	[{ path: "/Deannasaur/assets/audio/jump.mp3", id: jumpSFX }],
	() => {
		// Event listener
		document.addEventListener("keyup", (e) => {
			if (e.code === "Space") {
				if (!ran && !main) {
					runGame();
				} else {
					if (main) {
						jump();
					}
				}
			}
		});
	}
);
