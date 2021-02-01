class Parent{
    constructor(){
        this.fatherName = 'xyz';
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Child("arnold");
const baby2 = new Child("tom");

console.log(baby);
console.log(baby2);