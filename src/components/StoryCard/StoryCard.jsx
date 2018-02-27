import React from 'react';
import './style.css';

const StoryCard = ({
    by,
    score,
    time,
    title,
    url,
}) =>
    <div className={"story-card-container"}>
        <p className={"story-title"}>{title}</p>
    </div>

export default StoryCard;