import React from 'react';
import './UserInfo.css';

const UserInfo = (p) => {
    return (
        <div className="info">
            <p> <b> Id:</b> {p.user.id} </p>
            <p> <b> Name:</b> {p.user.name} </p>
            <p> <b> Email:</b> {p.user.email} </p>
            <p> <b> Phone:</b> {p.user.phone} </p>
            <p> <b> Address:</b> 
                <ul>
                    <li>street :{p.user.address.street}</li>
                    <li>suite :{p.user.address.suite}</li>
                    <li>city :{p.user.address.city}</li>
                </ul>
             </p>
        </div>
    )
};

export default UserInfo;


