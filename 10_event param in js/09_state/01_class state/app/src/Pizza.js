import React from 'react';


function Pizza(p){

    //onClick - DONT ADD FUNCTION CALL (just pass a function) !!!
    return (
        <div>
            <p>Pizza price: {p.price} </p>
            <button onClick={()=>{p.discount(p.num,0.5);}}>get discount</button>
            <hr/>
        </div>
    )
};

export default Pizza;