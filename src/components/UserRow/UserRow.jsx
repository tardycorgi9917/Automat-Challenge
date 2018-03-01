import React from 'react';
import './style.css';

const UserRow = ({
    id,
    karma,
    numComments,
}) =>
    <div className={"user-row-container"}>
        <p>{id}</p>
        <p>{numComments}</p>
    </div>

export default UserRow;