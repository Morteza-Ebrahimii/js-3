/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/

const calculate = (a, b) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        reject("you rejected");
      } else {
        resolve(a + b);
      }
    }, 1000);
  });
};

calculate(-1, 1)
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((data) => {
    console.log(data);
    return data;
  });
