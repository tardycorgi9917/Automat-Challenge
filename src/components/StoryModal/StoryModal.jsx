import React, { Component } from 'react';
import Modal from './../../components/Modal';
import './style.css';

const StoryModal = ({
    isOpen,
    story: { by, title},
    commenters,
    onClose
}) => 
    <Modal isOpen={isOpen}>
        <div>{title}</div>
        <button className="close-modal" onClick={onClose}>X</button>
    </Modal>

export default StoryModal;