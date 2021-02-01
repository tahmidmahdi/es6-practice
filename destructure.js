const person = {name:"Tom", age:17, job:'facebooker', phone:11111111};
const age = person.age;
console.log(person.age);

const arr = ['rahim','karim','abc','xyz','pqr'];
const [firstFriend, secondFriend, ...rest] = arr;
console.log(firstFriend, secondFriend, rest);

const complexObject =  {
    name = 'abc',
    info :{
        address: "kolabagan",
        leader : 'tiger',
    }

}

const {leader} = complexObject.info;