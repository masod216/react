import React from 'react';

function InputName(p) {

  let handleChange=(e)=>{p.func(e.target.value);}

  return (
    <div>
      <label>Enter name:</label>
      <input type="text" onChange={handleChange}/>
    </div>
  );
}

export default InputName;
