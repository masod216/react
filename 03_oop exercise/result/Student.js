class Student extends Person {

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }


    get grade() {
        return this._grade;
    }
    set grade(grade) {
        this._grade = (grade>=0 && grade<=100)?grade:0;
    }


    toString() {
        return ` < ${super.toString()}, ${this.id}, ${this.grade} > `;
    }
}
