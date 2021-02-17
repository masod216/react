class Student{

    static studentsCounter=0;
    static ageSum=0;

    constructor(age){
        Student.studentsCounter++;
        Student.ageSum+=age;
        this.age=age;
    }

    static getAgeAvg(){
        return Student.ageSum/Student.studentsCounter;
    }
}


console.log(Student.studentsCounter);   //--> 0

s1=new Student(12);
console.log(s1.age);                    //--> 12

console.log(Student.studentsCounter);   //--> 1


s2=new Student(40);
console.log(s2.age);                    //--> 40

console.log(Student.studentsCounter);   //--> 2

console.log(Student.getAgeAvg());       //--> 26