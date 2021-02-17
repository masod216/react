import React from 'react';

const IdDropDown = (p) => {

    let numbers=[1,2,3,4,5,6,7,8,9,10];

    return (<select onChange={(e) => {p.updateIdHandler(e.target.value) }}>

        {
            numbers.map((elemnt, index) => (
                <option value={elemnt} key={index} >
                    {elemnt}
                </option>
            ))
        }
        
    </select>)
};

export default IdDropDown;
