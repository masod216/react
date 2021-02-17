//-----------------------NON-PRIVATE------------------------

function Coffee1(amountOfCoffee){
    this.coffeeAmount=amountOfCoffee;
}


let c1=new Coffee1(2);
console.log(c1.coffeeAmount);  //--> 2
c1.coffeeAmount=5;
console.log(c1.coffeeAmount);  //--> 5


//-----------------------PRIVATE-BY-UNDERSCORE------------------------

function Coffee2(amountOfCoffee){
    this._coffeeAmount=amountOfCoffee;
}


let c2=new Coffee2(2);
console.log(c2._coffeeAmount);  //--> 2
c2.coffeeAmount=5;
console.log(c2._coffeeAmount);  //--> 5



//-----------------------PRIVATE-BY-CLOSURE------------------------

function Coffee3(amountOfCoffee){

    //this is only accessable in the function
    let coffeeAmount=amountOfCoffee;


    this.getCoffeAmount=()=>{
        return coffeeAmount;
    }
}


let c3=new Coffee3(2);
console.log(c3.getCoffeAmount());  //--> 2
console.log(c3.coffeeAmount);  //--> undefined 





