import React from 'react';

function App() {

   // "React.useState" - Returns a stateful value, and a function to update it.
   let [state,setState] = React.useState({ name: "Bob" });

   let nameChangeHandler=(e)=>{setState({ name: e.target.value });};

   let ageChangeHandler=(e)=>{console.log(e.target.value)};
   

  return (
      <div>
        <h1>Hello {state.name}</h1>
        <div>
          <label>Age:</label>
          <input type="number" onChange={ageChangeHandler} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" onChange={nameChangeHandler} value={state.name} />
        </div>
      </div>
  );
}

export default App;
