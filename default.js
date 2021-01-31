function add(num1, num2=15 ) { //third method is assign parameter value into function

    // 1st method to solve this problem
    // if(num2 == undefined){
    //     num2 = 0;       // it means if we haven't give any value of num 2 then we have assigned 0 to num2. Thats what undefined means 
    // }

    // num2 = num2 || 0;  // the variable that contains no value it is called fallsi variable
    return num1 + num2;
}

const addition =  add(15);
console.log(addition);