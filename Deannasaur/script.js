const input = document.getElementById("question");
const submit = document.getElementById("submit");

submit.addEventListener("click", (_) => {
	let answer = input.value.toLowerCase();
	if (answer && answer !== "4" && answer !== "four") {
		window.location.replace("/Deannasaur/whack-a-don");
	} else {
		alert("WRONG ANSWERS ONLY!");
	}
});
