import React from 'react';
import './style.css';
import moment from 'moment';

const StoryCard = ({
    by,
    score,
    time,
    title,
    url,
}) =>
    <div className={"story-card-container"}>
        <div className={'story-points'}><p>{score}</p></div>
        <div className={"story-info"}>
            <p className={"story-title"}>{title}</p>
            <p>{moment(time, "X").fromNow()}</p>
        </div>
    </div>

export default StoryCard;