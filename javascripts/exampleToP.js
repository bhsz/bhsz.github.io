import { startTimerOnPage, getTimeOnPage } from "./aToP.js";

startTimerOnPage();

let ToP = document.getElementById("time-on-page");
setInterval(() => {
	ToP.innerHTML = getTimeOnPage();
}, 1000);
