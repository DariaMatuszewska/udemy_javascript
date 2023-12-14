const input = document.querySelector(".search");
const liList = document.querySelectorAll("li");

const drinkSearch = e => {
	const text = e.target.value.toLowerCase();

	liList.forEach(li => {
		if (li.textContent.toLowerCase().indexOf(text) !== -1) {
			li.style.display = "block";
		} else {
			li.style.display = "none";
		}
	});
};

input.addEventListener("keyup", drinkSearch);
