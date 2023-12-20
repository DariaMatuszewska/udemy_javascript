const pTime = document.querySelector(".time");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const archiveBtn = document.querySelector(".archive");
const modalShadow = document.querySelector(".modal-shadow");
const timeList = document.querySelector(".time-list");
const infoBtn = document.querySelector(".fa-question");
const closeBtn = document.querySelector(".close");
const stopwatch = document.querySelector(".stopwatch");

const colorBtn = document.querySelector(".fa-paint-brush");
const colorPanel = document.querySelector(".colors");
const colorOne = document.querySelector(".one");
const colorTwo = document.querySelector(".two");
const colorThree = document.querySelector(".three");
let root = document.documentElement;

let showTime;
let minutes = 0;
let seconds = 0;
let isRunning = false;
let timesArr = [];

// const startFuntion = () => {
// 	if (isRunning) return;

// 	isRunning = true;
// 	showTime = setInterval(() => {
// 		if (seconds <= 9) {
// 			seconds++;
// 			stopwatch.textContent = `${minutes}:0${seconds}`;
// 		} else if (seconds > 9 && seconds < 59) {
// 			seconds++;
// 			stopwatch.textContent = `${minutes}:${seconds}`;
// 		} else {
// 			minutes++;
// 			seconds = 0;
// 			stopwatch.textContent = `${minutes}:00`;
// 		}
// 	}, 1000);
// };

const startFuntion = () => {
	if (isRunning) return;
	isRunning = true;

	displayTime();
	showTime = setInterval(() => {
		displayTime();
	}, 1000);
};

const displayTime = () => {
	if (seconds < 59) {
		seconds++;
	} else {
		minutes++;
		seconds = 0;
	}
	const displaySeconds = seconds <= 9 ? `0${seconds}` : `${seconds}`;
	stopwatch.textContent = `${minutes}:${displaySeconds}`;
};

const pauseFunction = () => {
	clearInterval(showTime);
	isRunning = false;
};

const stopFunction = () => {
	pTime.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;
	if (stopwatch.textContent !== "0:00") {
		pTime.style.visibility = "visible";
		timesArr.push(stopwatch.textContent);
	}

	clearAll();
};

const resetFunction = () => {
	clearAll();
	pTime.style.visibility = "hidden";
	timesArr = [];
};

const clearAll = () => {
	clearInterval(showTime);
	stopwatch.textContent = "0:00";
	seconds = 0;
	minutes = 0;
	timeList.textContent = "";
	isRunning = false;
};

const showHistory = () => {
	timeList.textContent = "";
	let num = 1;
	timesArr.forEach(time => {
		const newTime = document.createElement("li");
		newTime.innerHTML = `pomiar nr ${num} <span>${time}</span>`;
		timeList.appendChild(newTime);
		num++;
	});
};

const showModal = () => {
    console.log('stfd');
	modalShadow.style.display = "block";
	modalShadow.classList.add("shadow-animation");

};

const closeModal = () => {
	modalShadow.style.display = "none";
	modalShadow.classList.remove("shadow-animation");
	//void infoBtn.offsetWidth
};
startBtn.addEventListener("click", startFuntion);
pauseBtn.addEventListener("click", pauseFunction);
stopBtn.addEventListener("click", stopFunction);
resetBtn.addEventListener("click", resetFunction);
archiveBtn.addEventListener("click", showHistory);
infoBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
// window.addEventListener("click", e =>
// 	e.target === modalShadow ? closeModal() : false
// );

colorBtn.addEventListener("click", () => {
	colorPanel.classList.toggle("show-colors");
});

colorOne.addEventListener("click", () => {
	root.style.setProperty("--first-color", "rgb(250, 20, 6)");
	root.style.setProperty("--hover-color", "rgb(209, 33, 24)");
});

colorTwo.addEventListener("click", () => {
	root.style.setProperty("--first-color", "rgb(6, 173, 250)");
	root.style.setProperty("--hover-color", "rgb(28, 145, 199)");
});

colorThree.addEventListener("click", () => {
	root.style.setProperty("--first-color", "rgb(0, 255, 42)");
	root.style.setProperty("--hover-color", "rgb(28, 209, 58)");
});

