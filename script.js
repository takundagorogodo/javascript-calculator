const buttonsEl = document.querySelectorAll(".buttons button");
const inputField = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;

        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        }else if(buttonValue === "Del"){
            deleteLast();
        }
         else {
            appendValue(buttonValue);
        }
    });
}
function deleteLast(){
      inputField.value = inputField.value.slice(0,-1);
}
function clearResult() {
    inputField.value = "";
}

function calculateResult() {
    
    try {
      inputField.value = eval(inputField.value);
    } catch {
      inputField.value = "Error";
    }
}

function appendValue(buttonValue) {
    inputField.value += buttonValue;
}