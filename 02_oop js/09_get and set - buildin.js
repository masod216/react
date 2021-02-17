class Person {
    get age() {
        return this.__age;
    }
    set age(age) {
        this.__age = (age>=0 && age<=120)?age:0;
    }
}

let p=new Person();
p.age=12;
console.log(p.age);    // --> 12

console.log(p.__age);  // --> 12




