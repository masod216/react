class Proffesor extends Person {

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    toString() {
        return `<${super.toString()}, ${this.state}>`;
    }
}
