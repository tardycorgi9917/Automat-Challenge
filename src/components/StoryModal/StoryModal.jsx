import React, { Component } from 'react';
import Modal from './../../components/Modal';
import Loading from './../../components/Loading';
import UserRow from './../../components/UserRow';
import './style.css';

const StoryModal = ({
    isOpen,
    story: { by, title, score, url, descendants },
    commenters,
    commentersProgress,
    onClose
}) => 
    <Modal isOpen={isOpen} handleCloseModal={onClose}>
        <div className={"story-modal-container"}>
            <h2>{title}</h2>
            <p>by {by}</p>
            <a href={url} target="_blank">{url}</a>
            {commenters.length ? 
                <div>
                    <h3>Top Commenters</h3>
                    {commenters.map( (c, i) => <UserRow id={c[0]} numComments={c[1]}/>)}
                </div>: 
                <div className={"loading-wrap"}>
                    {Math.round(commentersProgress*100/descendants)}%
                    <Loading color={"#f39c12"} type={"bars"}/>
                </div> }

            <button className="close-modal" onClick={onClose}>X</button>
        </div>
    </Modal>

export default StoryModal;