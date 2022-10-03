let buffer = "0";
let onGoingResult = 0;
let previousOperation = null;

let calcResult = document.querySelector(".calc__result");

// When some button is clicked the value of the screen is refreshed tih the value in the buffer.
// We try to handle differently nuumbers and symbols
// We use procesNumbers(), its do nothing when we click 0 initially. It concatenates numbers  otherwise.
// We use procesSymbol () fot the other buttons. The AC button clear the screen. The C button has to remove only
// the last element of the string.
// The math symbols +-*/ should refresh the screen after click a new number.

function buttonClick(value) {
  if (isNaN(parseFloat(value))) {
    procesSymbol(value);
  } else {
    procesNumber(value);
  }
  screenRefresh();
}

function procesNumber(number) {
  if (buffer == "0") {
    buffer = number;
  } else {
    buffer = buffer + number;
  }
}

function procesSymbol(symbol) {
  switch (symbol) {
    case "AC":
      buffer = "0";
      onGoingResult = 0;
      previousOperation = null;
      break;
    case "C":
      if (buffer.length === 1) {
        buffer = 0;
      } else buffer = buffer.substring(0, buffer.length - 1);
      console.log("C");
      break;
    case ",":
      console.log("coma");
      break;
    case "=":
      if (previousOperation === null) {
        return;
      }
      doOperation(parseFloat(buffer));
      previousOperation = null;
      buffer = "" + onGoingResult;
      onGoingResult = 0;

      console.log("igual");
      break;
    case "%":
      console.log("%");
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      procesMath(symbol);

      break;
  }
}

function procesMath(value) {
  previousOperation = value;
  if (buffer === 0) {
    //we dont add, substract,multiply nor divide zero
    return;
  }
  if (onGoingResult === 0) {
    onGoingResult = parseFloat(buffer);
  } else {
    doOperation(parseFloat(buffer));
  }

  buffer = "0";
}

function doOperation(value) {
  switch (previousOperation) {
    case "+":
      onGoingResult = onGoingResult + value;
    case "-":
      onGoingResult = onGoingResult - value;
    case "*":
      onGoingResult = onGoingResult * value;
    case "/":
      onGoingResult = onGoingResult / value;
  }
  console.log("the value is" + value);
  console.log("ongoingresult=" + onGoingResult);
}

function screenRefresh() {
  calcResult.innerText = buffer;
}

function init() {
  const buttonList = document.querySelectorAll("button");
  const buttonArray = Array.from(buttonList);

  buttonArray.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    })
  );
}

init();
