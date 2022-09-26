// map() creates a new array from calling a function for every array element.
// It calls a function once for each element in an array.
// Syntax:
// array.map(function(currentValue, index, arr), thisValue)
// example:
// const arr1 = [1, 4, 9, 16];
// const arr2 = arr1.map(x => x ** 2);
// console.log(arr2);



// A ternary operator evaluates a condition and executes a block of code based on the condition.It is a simplified conditional operator like if / else.

// Syntax: condition ? <expression if true> : <expression if false></expression>
// For Example:
// with if-else:

// let score = 85;
// let grade;
// if(score >= 80){
//     grade = "A";
// } else {
//     grade = "B";
// }
// console.log(`Your exam grade is ${grade}`);

// with ternary operator:

// let score = 85;
// let grade = score >= 80 ? "A" : "B";
// console.log(`Your exam grade is ${grade}`);

// We are getting the same output in both cases(if-else as well as in ternary operator) but the 7-line code of if-else is reduced to 3-line code in ternary operator which is more readable than if-else conditions.