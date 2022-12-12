const toggleButton = document.querySelector(".toggleButton");
const toggleButtonBox = document.querySelector(".toggleButtonBox");

toggleButtonBox.addEventListener("click", () => {
  toggleButton.classList.toggle("toggleOption");
  rockPaperScissors.classList.toggle("displayNone");
  jsCalculator.classList.toggle("displayNone");
});

const jsCalculator = document.querySelector(".jsCalculator");

const keys = document.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-display");
const calculator = document.querySelector(".calculator");

const calculate = (a, operator, b) => {
  const firstNum = parseFloat(a);
  const secondNum = parseFloat(b);
  if (operator === "add") return firstNum + secondNum;
  if (operator === "subtract") return firstNum - secondNum;
  if (operator === "multiply") return firstNum * secondNum;
  if (operator === "divide") return firstNum / secondNum;
};

keys.addEventListener("click", (e) => {
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;
  const previousKeyType = calculator.dataset.previousKeyType;
  if (e.target.matches("button")) {
    if (!action) {
      if (
        displayedNum === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      Array.from(key.parentNode.children).forEach((k) =>
        k.classList.remove("is-depressed")
      );
      calculator.dataset.previousKeyType = "number";
      console.log("number key!");
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (
        firstValue &&
        operator &&
        previousKeyType !== "operator" &&
        previousKeyType !== "calculate"
      ) {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }

      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.operator = action;
      console.log("operator key!");
    }
    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      } else if (
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = "0.";
      }
      calculator.dataset.previousKeyType = "decimal";
      console.log("decimal key!");
    }
    if (action !== "clear") {
      const clearButton = calculator.querySelector("[data-action=clear]");
      clearButton.textContent = "CE";
    }
    if (action === "clear") {
      if (key.textContent === "AC") {
        calculator.dataset.firstValue = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
      } else {
        key.textContent = "AC";
      }
      display.textContent = 0;
      calculator.dataset.previousKeyType = "clear";
    }

    if (action === "calculate") {
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      let secondValue = displayedNum;
      if (firstValue) {
        if (previousKeyType === "calculate") {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }
        display.textContent = calculate(firstValue, operator, secondValue);
      }
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = "calculate";
      console.log("equal key!");
    }
  }
});
