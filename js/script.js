(function task1() {
  //getting elements from DOM
  const uploadButton = document.querySelector(".upload-file-input");
  const fileContentDiv = document.querySelector(".file-content");

  //event listener for button click
  uploadButton.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file.type === "text/csv") {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = () => {
        let fileData = fileReader.result;
        let rows = fileData.split("\n");
        let tabledata = [];
        rows.forEach((r) => {
          tabledata.push(`<tr><td>${r.split(",").join("</td><td>")}</td></tr>`);
        });
        tabledata = `<table>${tabledata.join("")}</table>`;
        fileContentDiv.innerHTML = tabledata;
      };

      fileReader.onerror = () => {
        alert(fileReader.error);
      };
    } else {
      alert("Please upload CSV file");
    }
  });
})();
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
  const stack = [];

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

(function task4() {
  class Sum {
    constructor() {
      //getting elements from DOM
      this.sumButton = document.querySelector(".sum-button");
      this.input1 = document.querySelector(".sum-input-1");
      this.input2 = document.querySelector(".sum-input-2");
      this.sumString = document.querySelector(".sum-string");
      //event listener for button click
      this.sumButton.addEventListener("click", () => this.calculateSum(this));
    }

    calculateSum() {
      const calculatedSum =
        Number(this.input1.value) + Number(this.input2.value);
      this.sumString.innerHTML = calculatedSum;
    }
  }

  new Sum();
})();
