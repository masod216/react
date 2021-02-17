let array=["A","B","C"];

let a=array;
console.log(a);  //--> [ A,B,C ]
console.log(typeof(a)); //--> object


let [b0]=array;
console.log(b0);  //--> A 
console.log(typeof(b0)); //--> string


let [c0,c1,c2,c3]=array;
console.log(c0);  //--> A
console.log(c1);  //--> B
console.log(c2);  //--> C
console.log(c3);  //--> undefined



let [d0,d2]=array;
console.log(d0);  //--> A
console.log(d2);  //--> B


let [e0,,e2]=array;
console.log(e0);  //--> A
console.log(e2);  //--> C
