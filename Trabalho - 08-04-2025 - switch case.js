let numero1 = 25
let numero2 = 5
let expression = "+"

switch (expression) {
  case '+':
    let resultado = numero1 + numero2
    console.log("o resultado é",resultado)
    break;
  case '-':
    let resultado2 = numero1 - numero2
    console.log("o resultado é",resultado2)
    break;
  case '*':
    let resultado3 = numero1 * numero2
    console.log("o resultado é",resultado3)
    break;
  case '/':
    let resultado4 = numero1 / numero2
    console.log("o resultado é",resultado4)
    break;
  default:
    // code
}