const numberBtn = document.querySelectorAll(".numberBtn");
const screen = document.querySelector(".currentValue");
const operatorBtn = document.querySelectorAll(".operator");
const previousValueElem = document.querySelector(".previousValue");

let optState = false;
let opt = "";
let final = 0;

numberBtn.forEach((number) => {
  number.addEventListener("click", showNumber);

  function showNumber() {
    if (screen.value == "0" || optState) {
      screen.value = "";
    }
    screen.value += this.textContent;
    optState = false;
  }
});

operatorBtn.forEach((operator) => {
  operator.addEventListener("click", calculator);

  function calculator() {
    optState = true;
    let newOpt = this.textContent;
    switch (opt) {
      case "+":
        screen.value = final + Number(screen.value);
        break;
      case "-":
        screen.value = final - Number(screen.value);
        break;
      case "*":
        screen.value = final * Number(screen.value);
        break;
      case "/":
        screen.value = final / Number(screen.value);
        break;
      case "=":
        final = Number(screen.value);
        break;
    }
    final = Number(screen.value);
    opt = newOpt;
  }
});

// delete entered values

const clearButtons = document.querySelectorAll(".clear, .clearEntry");
clearButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    screen.value = 0;
    previousValueElem.textContent = "";
    if (event.target.classList.contains("clear")) {
      final = "";
    }
  });
});

// delete the last entered value

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", () => {
  screen.value = screen.value.slice(0, -1);
  if (!screen.value.length) screen.value = 0;
});

// Making the value plus and minus

const signChangeBtn = document.querySelector(".signChange");
signChangeBtn.addEventListener("click", () => {
  screen.value = parseFloat(screen.value) * -1;
});
