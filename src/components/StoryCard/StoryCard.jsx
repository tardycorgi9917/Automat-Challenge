import React from 'react';
import './style.css';
import moment from 'moment';

const StoryCard = ({
    by,
    score,
    time,
    title,
    url,
    onSelect,
    kids
}) =>
    <div className={"story-card-container"} onClick={() => onSelect()}>
        <div className={"story-info"}>
            <p className={"story-author"}>by {by}</p>
            <p className={"story-author"}>{moment(time, "X").fromNow()}</p>
        </div>
        <div className={"story-header"}>
            <div className={"story-points"}><p>{score}</p><span>points</span></div>
            <div className={"title-wrap"}><p className={"story-title"}>{title}</p></div>
        </div>
    </div>

export default StoryCard;