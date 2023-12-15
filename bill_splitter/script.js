const countBtn = document.querySelector(".count");
const pError = document.querySelector(".error");
const costElement = document.querySelector(".cost");  // Renamed to avoid conflict with variable 'cost' in the counting function
const peopleInput = document.querySelector("#people");
const priceInput = document.querySelector("#price");
const tipSelect = document.querySelector("#tip");
const costInfo = document.querySelector(".cost-info");

const checkFilling = () => {
	if (peopleInput.value == "" || priceInput.value == "" || tipSelect == 0) {
		pError.textContent = "wypełnij wszystkie pola!";
		costInfo.style.display="none";
	} else {
		pError.textContent = ''
		counting();
	}
};

const counting = () => {
	const people = parseInt(peopleInput.value);
	const price = parseFloat(priceInput.value);
	const tip = parseFloat(tipSelect.value);

	const cost = (price + (price * tip)) / people;

		costInfo.style.display="block";
		costElement.textContent=cost.toFixed(2)

		
};


countBtn.addEventListener('click', checkFilling);