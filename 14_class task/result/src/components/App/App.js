import React from 'react';
import './App.css';

import CountryDropDown from './../CountryDropDown/CountryDropDown';
import CountryFlag from './../CountryFlag/CountryFlag';
import CountryName from './../CountryName/CountryName';


function App(){

    let [state,setState]=React.useState({
        countryArray: [],
        selectedCountry: undefined
    });

   
    if(!state.countryArray.length){
        fetch("https://restcountries.eu/rest/v2/all?fields=name;flag")
        .then(res=>res.json())
        .then(body=>setState({ ...state ,countryArray: body }));
    }
  

    let countrySelectionHandler = (countryIndex) => {
        setState(
            {
                ...state,  
                selectedCountry: state.countryArray[countryIndex]
            });
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to Country - Info</h1>
            </header>

            <CountryDropDown
                countryArray={state.countryArray}
                countrySelectionHandler={countrySelectionHandler} />

            <hr />

            {
                state.selectedCountry ?
                    <div>
                        <CountryName countryName={state.selectedCountry.name} />
                        <CountryFlag countryFlag={state.selectedCountry.flag} />
                    </div>
                    :
                    <div> no country selected</div>
            }


        </div>
    );

}

export default App;
