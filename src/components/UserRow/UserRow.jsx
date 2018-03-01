import React from 'react';
import './style.css';

const UserRow = ({
    id,
    karma,
    numComments,
}) =>
    <div className={"user-row-container"}>
        <p className={"id-text"}>{id}</p>
        <p className={"num-text"}><span>{numComments}</span> comments</p>
    </div>

export default UserRow;