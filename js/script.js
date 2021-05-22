(function task2() {
	const addNewButton = document.querySelector(".add-new-btn");
	const inputBox = document.querySelector(".container-input");

	//event listener for button click
	addNewButton.addEventListener("click", () => {
		//create input element
		const newInput = document.createElement("input");
		//adding atttributes
		newInput.type = "text";
		newInput.className = "input-text";
		//put it in DOM
		inputBox.appendChild(newInput);
	});
})();
