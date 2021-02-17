class Person {
    getAge() {
        return this.__age;
    }
    setAge(age) {
        this.__age = (age>=0 && age<=120)?age:0;
    }
}

let p=new Person();
p.setAge(12);
console.log(p.getAge());  // --> 12

console.log(p.__age);     // --> 12




