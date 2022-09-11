export { startTimerOnPage, getTimeOnPage, clearTimerOnPage };

let timeOnPage = 0;
let timer = null;

const runTimer = () => {
	return setInterval(() => {
		++timeOnPage;
	}, 1000);
};

const clearWrapper = (runner) => {
	clearInterval(runner);
	return false;
};

const startTimerOnPage = () => {
	// Initial setup
	timer = runTimer();

	// Event listeners
	window.onfocus = (e) => {
		// Conditional execution are for cross browser compatibility on focus event
		timer = timer ? timer : runTimer();
	};

	window.onblur = (e) => {
		timer = clearWrapper(timer);
	};
};

const getTimeOnPage = () => {
	return timeOnPage;
};

const clearTimerOnPage = () => {
	if (timer) {
		timer = clearWrapper(timer);
	}
};
