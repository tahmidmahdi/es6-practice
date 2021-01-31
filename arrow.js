// function doubleIt(num) {
//     return num*2;
// }
// const doubleIt = function myFunc(num) {
//     return num*2;
// }

// in ES6

const doubleIt = num => num * 2; // for 1 parameter
const add = (x, y) => x + y;      // use bracket with comma for 2 parameter
const give5 = () => 5;            // use only bracket for no parameter

const doMath =(x, y) => {      // multiple operation rules for arrow function
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(50, 70);
const result1 = add(50, 70);
const result2 = give5();
const result3 = doMath(7, 5)

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);