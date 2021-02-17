import React, { Component } from 'react';
import Pizza from './Pizza';

//class style component
class App extends Component {

    //state is a react keyword (extended from Component)
    //state can be used only in class component (in function component use "useState")
    //if the state values are changed - the DOM will be re-rendered
    state = { prices: [60, 65, 100] };

    //if the prices values are changed - the DOM will not be re-rendered
    localPrice = { prices: [60, 65, 100] };

    discountHandler=(index, discountPrecent)=>{
        console.log("before - discountHandler", this.localPrice.prices[index]);
        this.localPrice.prices[index] *= discountPrecent;
        console.log("after - discountHandler", this.localPrice.prices[index]);
    }

    discountStateHandler=(index, discountPrecent)=>{
        let {prices} = {...this.state};
        prices[index] *= discountPrecent;
        this.setState({ prices });
    }
    
    render=()=>{
        return (
            <div>
                <h1>Anna's Pizza</h1>
                <Pizza num="0" price={this.localPrice.prices[0]} discount={this.discountHandler} />
                <Pizza num="1" price={this.state.prices[1]} discount={this.discountStateHandler} />
                <Pizza num="2" price={this.state.prices[2]} discount={this.discountStateHandler} />
            </div>
        );
    }
}

export default App;

