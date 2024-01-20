// ? Question-1:follow these steps:
//todo-1:Write a function called "calculate" that takes 4 parameters.
//todo-2:The first and seconde parameters should be numbers.
//todo-3:The third parameter should be a string indicating either "add => addition" or "multiply => multiplication".
//todo-4:The fourth parameter should be a function that log the result of the calculation.

function calculate(num1, num2, para, result) {
  const Array = [num1, num2];
  result = Array.reduce((num1, num2) => {
    if (para === "add") {
      return num1 + num2;
    }
    if (para === "multiply") {
      return num1 * num2;
    }
  });
  return result;
}
console.log(calculate(5, 3, "add",));
console.log(calculate(4, 6, "multiply",));

//handleCalculationResult
