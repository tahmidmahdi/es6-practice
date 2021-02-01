class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'xyz school'; // shared property

    }
}

const student1 = new Student(12, 'abc');
const student2 = new Student(22, 'cde');
console.log(student1, student2);