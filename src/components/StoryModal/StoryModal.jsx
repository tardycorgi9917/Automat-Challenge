import React, { Component } from 'react';
import Modal from './../../components/Modal';
import Loading from './../../components/Loading';
import UserRow from './../../components/UserRow';
import * as FontAwesome from 'react-icons/lib/fa';
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
            <div className={"details-wrap"}>
                <p>by {by}</p>
                <p className={'comment-count'}>comments: {descendants}</p>
            </div>
            <a href={url} target="_blank">{url}</a>
            {commenters.length ? 
                <div>
                    <h3>Top Commenters</h3>
                    {commenters.map((c, i) => <UserRow key={i} id={c[0]} numComments={c[1]}/>)}
                </div>: 
                <div className={"loading-wrap"}>
                    {/* I think there is a bug in the API, descendants field does not seem to match how many comments there are sometimes
                    Could also be an issue where comments are coming in after inital rendering */}
                    {Math.round(commentersProgress*100/descendants) < 100 ? 
                        Math.round(commentersProgress*100/descendants) : 100 }%
                    <Loading color={"#f39c12"} type={"bars"}/>
                </div> }

            <button className="close-modal" onClick={onClose}>X</button>
        </div>
    </Modal>

export default StoryModal;