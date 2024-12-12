let operador = '';
let operan1 = '';
let operan2 = '';

// Funció per afegir números als inputs
function addNumber(num) {
  if (operador === '') {
    operan1 += num.toString();
    document.getElementById('operan1').value = operan1;
  } else {
    operan2 += num.toString();
    document.getElementById('operan2').value = operan2;
  }
}

// Funció per establir el operador (suma, resta, multiplicació, divisió)
function operacion(op) {
  if (operan1 !== '') {
    operador = op;
  }
}

// Funció per esborrar els valors
function clearInput() {
  operan1 = '';
  operan2 = '';
  operador = '';
  document.getElementById('operan1').value = '';
  document.getElementById('operan2').value = '';
  document.getElementById('result').value = '';
}

// Funció per realitzar el càlcul
function calculate() {
  let result = 0;
  const num1 = parseFloat(operan1);
  const num2 = parseFloat(operan2);

  switch (operador) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = 'Error';
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Error';
      break;
  }

  document.getElementById('result').value = result;
  operan1 = result.toString();
  operan2 = '';
  operador = '';
}
