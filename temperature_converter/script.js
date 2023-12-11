const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const btnConv = document.querySelector(".conv");
const btnReset = document.querySelector(".reset");
const btnChange = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let fahrenheit;
let celsius;

const swap = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
	} else {
		one.textContent = "°C";
		two.textContent = "°F";
	}
};

const celToFar = () => {
	fahrenheit = converter.value * 1.8 + 32;
	result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
	converter.value = "";
};

const farToCel = () => {
	celsius = (converter.value - 32) / 1.8;
	result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
	converter.value = "";
};

const reset = () => {
	converter.value = "";
	result.textContent = "";
};

const check = () => {
	if (converter.value !== "") {
		if (one.textContent === "°C") {
			celToFar();
		} else {
			farToCel();
		}
	} else {
		result.textContent = "podaj jakąś wartość";
	}
};

btnChange.addEventListener("click", swap);
btnConv.addEventListener("click", check);
btnReset.addEventListener('click', reset)

// °F = (°C × 1.8) + 32
// °C = (°F − 32) /1.8
