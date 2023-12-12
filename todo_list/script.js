let toDoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;
let popup, popupInfo, todoToEdit, popupInput, popupAddBtn, popupCloseBtn;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	toDoInput = document.querySelector(".todo-input");
	errorInfo = document.querySelector(".error-info");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");
	popup = document.querySelector(".popup");
	popupInfo = document.querySelector(".popup-info");
	popupInput = document.querySelector(".popup-input");
	popupAddBtn = document.querySelector(".accept");
	popupCloseBtn = document.querySelector(".cancel");
};

const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addNewTodo);
	ulList.addEventListener("click", checkClick);
	popupCloseBtn.addEventListener("click", cancelFn);
	popupAddBtn.addEventListener("click", addEditPopup);
    toDoInput.addEventListener('keyup', enterKeyCheck)
};

const addNewTodo = () => {
	if (toDoInput.value !== "") {
		newTodo = document.createElement("li");
		ulList.append(newTodo);
		newTodo.textContent = toDoInput.value;

		createToolsArea();

		toDoInput.value = "";
		errorInfo.textContent = "";
	} else {
		errorInfo.textContent = "wpisz treść zadania!";
	}
};

const createToolsArea = () => {
	toolsPanel = document.createElement("div");
	toolsPanel.classList.add("tools");
	newTodo.append(toolsPanel);

	const completeBtn = document.createElement("button");
	completeBtn.classList.add("complete");
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';
	const editBtn = document.createElement("button");
	editBtn.classList.add("edit");
	editBtn.textContent = "EDIT";
	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete");
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = e => {
	if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed");
		e.target.classList.toggle("completed");
	} else if (e.target.matches(".edit")) {
		editTodo(e);
	} else if (e.target.matches(".delete")) {
		deleteFn(e);
	}
};

const editTodo = e => {
	todoToEdit = e.target.closest("li");
	popupInput.value = todoToEdit.firstChild.textContent;
	popup.style.display = "flex";
};

const cancelFn = () => {
	popup.style.display = "";
	popupInfo.textContent = "";
};

const addEditPopup = () => {
	if (popupInput.value !== "") {
		todoToEdit.firstChild.textContent = popupInput.value;
		popup.style.display = "";
		popupInfo.textContent = "";
	} else {
		popupInfo.textContent = "wprowadź tekst";
	}
};

const deleteFn = e => {
	e.target.closest("li").remove();
	const allTools = ulList.querySelectorAll("li");
	if (allTools.length === 0) {
		errorInfo.textContent = "brak zadań na liście";
	}
};

const enterKeyCheck = (e) => {
    if(e.key==='Enter')
    addNewTodo()
}

document.addEventListener("DOMContentLoaded", main);
