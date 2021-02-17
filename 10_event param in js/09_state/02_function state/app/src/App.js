import React from 'react';
import Pizza from './Pizza';

//function style component
function App(){

    // "React.useState" - Returns a stateful value, and a function to update it.
    const [state,setState] = React.useState({ prices: [60, 65, 100] });

    //if the prices values are changed - the DOM will not be re-rendered
    const localPrice = { prices: [60, 65, 100] };

    function discountHandler(index, discountPrecent){
        console.log("before - discountHandler", localPrice.prices[index]);
        localPrice.prices[index] *= discountPrecent;
        console.log("after - discountHandler", localPrice.prices[index]);
    };

    function discountStateHandler(index, discountPrecent){
        let {prices} = {...state};
        prices[index] *= discountPrecent;
        setState({ prices });
    }
    
    return(
            <div>
                <h1>Anna's Pizza</h1>
                <Pizza num="0" price={localPrice.prices[0]} discount={discountHandler} />
                <Pizza num="1" price={state.prices[1]} discount={discountStateHandler} />
                <Pizza num="2" price={state.prices[2]} discount={discountStateHandler} />
            </div>
        );
}

export default App;

