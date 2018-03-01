import React, { Component } from 'react';
import Modal from './../../components/Modal';
import './style.css';

const StoryModal = ({
    isOpen,
    story: { by, title, score, url},
    commenters,
    onClose
}) => 
    <Modal isOpen={isOpen} handleCloseModal={onClose}>
        <div>{title}</div>
        <div>{by}</div>
        <button className="close-modal" onClick={onClose}>X</button>
    </Modal>

export default StoryModal;