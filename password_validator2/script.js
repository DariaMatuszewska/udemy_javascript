const nameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const passwordInput2 = document.querySelector("#password2");
const emailInput = document.querySelector("#email");
const pError = document.querySelector(".error-text");
const clearBtn = document.querySelector(".clear");
const closeBtn = document.querySelector(".close");
const sendBtn = document.querySelector(".send");
const popupInfo = document.querySelector(".popup");

const showError = (input, msg) => {
	const formBox = input.parentElement;
    const errorMsg = formBox.querySelector(".error-text");

	formBox.classList.add("error");
	errorMsg.textContent = msg;
};
const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove("error");
};

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} musi się skladać z minimum ${min} znaków.`
		);
	}
};

const checkPassword = (pass1, pass2) => {
	if (pass1 !== pass2) {
		showError(pass2, "Hasła do siebie nie pasują");
	}
};


const checkEmail = email => {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(email.value)) {
        clearError(email);
    } else {
        showError(email, "mail jest niepoprawny");
    }
};


const checkForm = input => {
	input.forEach(el => {
		if (el.value === "") {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkError = () => {
	const inputs = document.querySelectorAll(".form-box");
	let countErrors = 0;


	inputs.forEach(el => {
		if (el.classList.contains("error")) {
			countErrors++;
		}
	});

	if(countErrors===0){
	    popupInfo.classList.add('show-popup')
	}
	
};


sendBtn.addEventListener("click", e => {
	e.preventDefault();

	checkForm([nameInput, passwordInput, passwordInput2, emailInput]);
	checkLength(nameInput, 3);
	checkLength(passwordInput, 8);
	checkPassword(passwordInput.value, passwordInput2.value);
	checkEmail(emailInput);
    checkError();
});

clearBtn.addEventListener("click", e => {
	e.preventDefault();

	[nameInput, passwordInput, passwordInput2, emailInput].forEach(el => {
		el.value = "";
		clearError(el);
	});
});
