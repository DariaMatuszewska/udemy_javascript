const addBtn = document.querySelector(".add");
const deleteAllBtn = document.querySelector(".delete");
const deleteNoteBtn = document.getElementsByClassName("delete-note");
const category = document.querySelector("#category");
const textNote = document.querySelector("#text");
const pError = document.querySelector(".error");
const saveNoteBtn = document.querySelector(".save");
const cancelNoteBtn = document.querySelector(".cancel");
const noteArea = document.querySelector(".note-area");
const panelArea = document.querySelector(".note-panel");


let selectedValue;
let noteID = 0;

const showPanel = () => {
	panelArea.style.display = "flex";
};

const closePanel = () => {
	panelArea.style.display = "none";
	pError.style.visibility = "hidden";
	textNote.value = "";
	category.selectedIndex = 0;
};

const addNote = () => {
	if (
		category.options[category.selectedIndex].value == "0" ||
		textNote.value == ""
	) {
		pError.style.visibility = "visible";
	} else {
		pError.style.visibility = "hidden";
		createNote();
	}
};

const createNote = () => {
	const newNote = document.createElement("div");
	newNote.classList.add("note");
	newNote.id = noteID.toString()

	const deleteBtn = document.createElement("button");
	deleteBtn.className = "delete-note";
	deleteBtn.innerHTML = '<i class="fas fa-times icon"></i>';
	deleteBtn.addEventListener("click", () => deleteNote(newNote.id));

	newNote.innerHTML = `
    <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
    </div>
    <div class="note-body">
        ${textNote.value}
    </div>        
     `;
	newNote.querySelector(".note-header").appendChild(deleteBtn);
	noteArea.appendChild(newNote);
	noteID++;
	checkColor(newNote);

	textNote.value = "";
	category.selectedIndex = "0";
	panelArea.style.display = "none";
};

const selectCategory = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = note => {
	switch (selectedValue) {
		case "Zakupy":
			note.style.backgroundColor = "rgb(72, 255, 0)";
			break;
		case "Praca":
			note.style.backgroundColor = "rgb(255, 243, 0)";
			break;
		case "Inne":
			note.style.backgroundColor = "rgb(0, 170,255)";
			break;
	}
};

const deleteNote = id => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
	noteArea.textContent = "";
};
addBtn.addEventListener("click", showPanel);
cancelNoteBtn.addEventListener("click", closePanel);
saveNoteBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);
category.addEventListener("change", selectCategory);
