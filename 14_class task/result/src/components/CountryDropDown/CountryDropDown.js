import React from 'react';

const countryDropDown = (p) => (
    <select onChange={(e) => {p.countrySelectionHandler(e.target.value) }}>

        {
            p.countryArray.map((elemnt, index) => (
                <option value={index} key={index} >
                    {elemnt.name}
                </option>
            ))
        }
        
    </select>
);

export default countryDropDown;
