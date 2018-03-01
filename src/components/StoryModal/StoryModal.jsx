import React, { Component } from 'react';
import Modal from './../../components/Modal';
import Loading from './../../components/Loading';
import './style.css';

const StoryModal = ({
    isOpen,
    story: { by, title, score, url},
    commenters,
    onClose
}) => 
    <Modal isOpen={isOpen} handleCloseModal={onClose}>
        <div className={"story-modal-container"}>
            <h2>{title}</h2>
            <p>{by}</p>
            {commenters.length ? 
                <div>{commenters.map( (c, i) => <h4>{c}</h4>)}</div>: 
                <div className={"loading-wrap"}>
                    <Loading color={"#f39c12"} type={"bars"}/>
                </div> }

            <button className="close-modal" onClick={onClose}>X</button>
        </div>
    </Modal>

export default StoryModal;