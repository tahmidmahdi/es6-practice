// EXAMPLE 1

const hobby = "Gardening";
// hobby = "Reading Books"; // it wont work because the variable is constant and we know we cant change constant 
console.log(hobby);


// EXAMPLE 2
const array = [1, 2, 3, 4];
array[2] = 88;      // We can change array property if we use const. it wont make any problem. array[2] was 3 but now 88
array.push(77);     // we can also do push and pop
// array = ["rahim",'korim','zooz'];        // but we can not change the whole array as it is const 
console.log(array);



// EXAMPLE 3 FOR LET AND ITS BEHAVIOUR 
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;                  //let will work on its scope and it wont leek from its scope.. i has the scope for for-loop. and the console log is outside from the scope so it wont work
    
}
console.log(i);