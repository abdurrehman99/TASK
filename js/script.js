(function task2() {
	//getting elements from DOM
	const addNewButton = document.querySelector(".add-new-button");
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

(function task3() {
	//getting elements from DOM
	const reverseStringInput = document.querySelector(".reverse-string-input");
	const reverseStringButton = document.querySelector(".reverse-string-button");
	const reverseString = document.querySelector(".reverse-string");

	//stack initilization
	let stack = [];

	//event listener for button click
	reverseStringButton.addEventListener("click", () => {
		//push all chars into stack
		for (let i = 0; i < reverseStringInput.value.length; i++) {
			stack.push(reverseStringInput.value[i]);
		}
		//pop all chars to get reveresed string
		let reversedValue = "";
		for (let i = 0; i < reverseStringInput.value.length; i++) {
			reversedValue += stack.pop(reverseStringInput.value[i]);
		}
		reverseString.innerHTML = reversedValue;
		reverseStringInput.value = "";
	});
})();
