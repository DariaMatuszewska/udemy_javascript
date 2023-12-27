const income = document.querySelector(".income-area");
const expenses = document.querySelector(".expenses-area");
const pAvailableMoney = document.querySelector(".available-money");
const addBtn = document.querySelector(".add-transaction");
const deleteAllBtn = document.querySelector(".delete-all");
const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");
const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const category = document.querySelector("#category");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const addTransactionPanel = document.querySelector(".add-transaction-panel");
const deleteBtn = document.querySelector(".delete");

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [];

const clearInputs = () => {
	nameInput.value = "";
	amountInput.value = "";
	category.value = "none";
};
const addTransaction = () => {
	addTransactionPanel.style.display = "flex";
};

const cancelTransaction = () => {
	addTransactionPanel.style.display = "none";
	clearInputs();
};

const checkForm = () => {
	if (
		nameInput.value !== "" &&
		amountInput.value !== "" &&
		category.value !== "none"
	) {
		createTransaction();
	} else {
		alert("Wypełnij wszystkie pola!");
	}
};

const createTransaction = () => {
	checkCategory(category.innerText);

	const newTransaction = document.createElement("div");
	newTransaction.classList.add("transaction");
	newTransaction.setAttribute("id", ID);

	const deleteBtn = document.createElement("button");
	deleteBtn.className = "delete";
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
	deleteBtn.addEventListener("click", () =>
		deleteTransaction(newTransaction.id)
	);

	newTransaction.innerHTML = `
		<p class='transaction-name'> ${categoryIcon} ${nameInput.value}</p>
		<p class='transaction-amount'> ${amountInput.value} </p> `;

	newTransaction.querySelector(".transaction-amount").appendChild(deleteBtn);

	amountInput.value > 0
		? income.appendChild(newTransaction) &&
		  newTransaction.classList.add("income")
		: expenses.appendChild(newTransaction) &&
		  newTransaction.classList.add("expenses");

	moneyArr.push(parseFloat(amountInput.value));

	countingMoney();
	cancelTransaction();
	ID++;
};

const checkCategory = () => {
	selectedCategory = category.value;
	switch (selectedCategory) {
		case "income":
			categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
			break;
		case "schopping":
			categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
			break;
		case "food":
			categoryIcon = '<i class="fas fa-hamburger"></i>';
			break;
		case "cinema":
			categoryIcon = '<i class="fas fa-film"></i>';
			break;
	}
};

const countingMoney = () => {
	const result = moneyArr.reduce((a, b) => a + b, 0);
	pAvailableMoney.textContent = `${result} zł`;
};

const deleteTransaction = id => {
	const transactionToDelete = document.getElementById(id);
	const transactionAmount = parseFloat(
		transactionToDelete.querySelector(".transaction-amount").innerText
	);
	const indexOfTransaction = moneyArr.indexOf(transactionAmount);

	moneyArr.splice(indexOfTransaction, 1);

	transactionToDelete.classList.contains("income")
		? income.removeChild(transactionToDelete)
		: expenses.removeChild(transactionToDelete);

	countingMoney();
};

const deleteAll = () => {
	income.innerHTML = "<h3>Przychód:</h3>";
	expenses.innerHTML = "<h3>Wydatki:</h3>";
	pAvailableMoney.textContent = "0zł";
	moneyArr = [];
};

const lightStyle = () => {
	root.style.setProperty("--first-color", "#f9f9f9");
	root.style.setProperty("--second-color", "#14161f");
	root.style.setProperty("--border-color", "rgba(0, 0, 0, 0.2)");
};

const darkStyle = () => {
	root.style.setProperty("--first-color", "#14161f");
	root.style.setProperty("--second-color", "#f9f9f9");
	root.style.setProperty("--border-color", "rgba(255, 255, 255, 0.4)");
};

addBtn.addEventListener("click", addTransaction);
cancelBtn.addEventListener("click", cancelTransaction);
saveBtn.addEventListener("click", checkForm);
category.addEventListener("change", checkCategory);
deleteAllBtn.addEventListener("click", deleteAll);
lightBtn.addEventListener("click", lightStyle);
darkBtn.addEventListener("click", darkStyle);
