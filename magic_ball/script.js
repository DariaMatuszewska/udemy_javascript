const ballImg = document.querySelector("img");
const input = document.querySelector("#question");
const pAnswer = document.querySelector(".answer");
const pError = document.querySelector(".error");

// pierwszy sposób użycie void offsetWidth, ktra zmusza przeglądarkę do wykonania animacji
// const animation = () => {
// 	ballImg.classList.remove("shake-animation");
//     void ballImg.offsetWidth
// 	ballImg.classList.add("shake-animation");
// 	pAnswer.textContent = "";
// 	pError.textContent = "";
// 	randomAnswer();
// };

//drugi sposób opóźnienie funkcji, żeby najpierw aniamcja sięwykonała i usunęła w kolejnej funkcji
const animation = () => {
	ballImg.classList.add("shake-animation");
	pAnswer.textContent = "";
	pError.textContent = "";
	setTimeout(randomAnswer, 1000);
};

const randomAnswer = () => {
    const answers = ["tak",	"może",	"nie chcesz znać odpowiedzi", "nie", "dobre pytanie"];
	const randomAnswer = Math.floor(Math.random() * answers.length);
	question(answers[randomAnswer]);
};

const question = answer => {
    ballImg.classList.remove("shake-animation");	
	if (input.value!== "" && input.value.charAt(input.value.length - 1) === "?") {
		//// input.value.slice(-1) === '?'
		pAnswer.innerHTML = `<span>odpowiedź:</span> ${answer}`;
	} else if (input.value !== "") {
		pError.textContent = 'pytanie musi się kończyć "?"';
	} else {
		pError.textContent = "zadaj pytanie";
	}
};


ballImg.addEventListener("click", animation);

/* 
addEventLisener na zdjecie
dodanie animacji 
1.funkcja jezeli input !== '' pAnswer
jezeli pusty lub bez ? to error
jezeli ok to przekierowanie do funkcji losujacej odpowiedz
*/
