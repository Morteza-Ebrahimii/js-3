// ? Question-3: Write a function that simulates the filter function using a callback function:
// todo-1: Your function should take an array and a callback function as arguments.
// todo-2: It should return the result of filtering based on the callback.
// todo-3: In the callback function, check if the number is greater than 2.

const numbers = [1, 2, 3, 4, 5];

const moreThantwo = (num) => {
    let result = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 2) {
            result.push(num[i]);
        }
    }
    return result;
};

const evenNumbers = function simulateFilter(number, callback) {
return callback(number)
};

console.log(evenNumbers(numbers,moreThantwo)); //>>> [3, 4, 5]


