import React from 'react';
import './App.css';
import IdDropDown from './IdDropDown'
import UserInfo from './UserInfo'

function App(){

    let [state,setState]=React.useState({user:undefined});

    let updateIdHandler=async (id)=>{
        let user=await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json();
        setState({user});
    }
    
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to User - Info</h1>
            </header>

            <IdDropDown updateIdHandler={updateIdHandler} />
           
           {
               state.user? 
               <UserInfo user={state.user}/> :
               <p>No User is selected</p>
           }
        </div>
    );

}

export default App;
