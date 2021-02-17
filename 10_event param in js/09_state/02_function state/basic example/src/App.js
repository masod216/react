import React from 'react';

function App() {

  let [state,setState]=React.useState({count:0});

  function updateCnt(){
    setState({"count":state.count+1})
  }

  return (
    <div>
      <p>My count is: {state.count}</p>
      <button onClick={updateCnt}>inc count</button>
    </div>
  );
}

export default App;
