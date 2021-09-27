const bgm = new Audio("/Deannasaur/assets/audio/coconut-mall.mp3");
bgm.volume = 0.05;
const yay = new Audio("/Deannasaur/assets/audio/yay.mp3");
yay.volume = 0.2;

const bgmLoaded = (cb) => {
	bgm.oncanplay = cb();
};

const playBgm = () => {
	bgm.play();
};

const pauseBgm = () => {
	bgm.pause();
};

const playYay = () => {
	yay.play();
};

const registerSoundsOnBodyLoad = (args, cb) => {
	document.body.onload = () => {
		args.forEach((x) => {
			createjs.Sound.registerSound(x.path, x.id);
		});
		cb();
	};
};

const playSound = (id, volume = 1) => {
	let instance = createjs.Sound.play(id);
	instance.volume = volume;
};
