
var leftHand = '';
var operator = '';
var rightHand = '';
var result = '';

var clearButton = document.getElementById('clear_button');
var equalButton = document.getElementById('equal_button');
var numberButtons = document.getElementsByClassName('number_button');
var operatorButtons = document.getElementsByClassName('op_button');
var screen = document.getElementById('screen');

// TODO: wire up clear button event listener

// TODO: set screen should set to result, pass an argument
function setScreen() {
  screen.innerText = leftHand + operator + rightHand
}

for(var i = 0; i < clearButton.length; i++) {
  var button = clearButton[i];
  button.addEventListener('click', function() {
    console.log(this.innerText);
  });
}

for(var i = 0; i < operatorButtons.length; i++) {
  var button = operatorButtons[i];
  button.addEventListener('click', function() {
    operator = this.innerText;
    setScreen();
  });
}

for(var i = 0; i < numberButtons.length; i++) {
  var button = numberButtons[i];
  button.addEventListener('click', function() {
    if(operator.length)
      // TODO: do not allow divide by 0
      rightHand += this.innerText
    else
      leftHand += this.innerText;
    setScreen()
  });
}

equalButton.addEventListener('click', function() {
  console.log(leftHand);
  console.log(operator);
  console.log(rightHand);

  if(leftHand && operator && rightHand) {
    switch(operator) {
      case '+':
        result = leftHand + rightHand;
        break;
      case '-':
        result = leftHand - rightHand;
        break;
      case 'X':
        result = leftHand * rightHand;
        break;
      case '/':
        result = leftHand / rightHand;
        break;
      default:
      alert('Invalid Operator!!!')
    }
  } else {
    alert('Invalid Equation!!!!')
  }
});
