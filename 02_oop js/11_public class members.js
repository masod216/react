class Person {

    // optional to give value in declartion line
    personAge=40

    get age() {
        return this.personAge;
    }
    set age(age) {
        this.personAge = (age>=0 && age<=120)?age:0;
    }
}

let p=new Person();
console.log(p.age);  // --> 40
p.age=12;
console.log(p.age);  // --> 12

console.log(p.personAge);  // --> 12
