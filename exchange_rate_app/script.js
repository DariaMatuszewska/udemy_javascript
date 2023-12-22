const amountOne = document.querySelector(".amount-one");
const amountTwo = document.querySelector(".amount-two");
const currencyOne = document.querySelector("#currency-one");
const currencyTwo = document.querySelector("#currency-two");
const swapBtn = document.querySelector(".swap");
const info = document.querySelector(".rate-info");

const API_KEY = "";

const currencyExchange = () => {
	fetch(
		`https://api.exchangeratesapi.io/v1/endpoint?access_key=${API_KEY}&from=${currencyOne.value}&to=${currencyTwo.value}&amount=${amountOne.value} `
	)
		.then(res => res.json())
		.then(data => {
			const currency1 = currencyOne.value;
			const currency2 = currencyTwo.value;

			const rate = data.rates[currency2];
			info.textContent = `1${currency1} = ${rate.toFixed(4)} ${currency2}`;
			amountTwo.value = (amountOne.value * rate).toFixed(2);
		});
};

const swap = () => {
	oldValue = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = oldValue;
};

currencyOne.addEventListener("change", currencyExchange);
currencyTwo.addEventListener("change", currencyExchange);
amountOne.addEventListener("input", currencyExchange);

currencyExchange();
