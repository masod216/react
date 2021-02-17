import React from 'react';
import InputName from './InputName';

function App() {

  let [state,setState]=React.useState({name:["Bob"]});

  let changeName=(newName)=>{setState({name:newName})};

  return (
    <div>
      <h1>Hello {state.name}!!!</h1>
      <hr/>
      <InputName func={changeName} />
    </div>
  );
}

export default App;
