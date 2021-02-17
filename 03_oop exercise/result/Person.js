class Person {
    
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
   
    
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = (age>=0 && age<=120)?age:0;
    }

    toString() {
        return ` ${this.name},  ${this.age} `;
    }
}
