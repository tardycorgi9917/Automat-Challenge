import React, { Component } from 'react';
import Modal from './../../components/Modal';
import './style.css';

const StoryModal = ({
    isOpen,
    story,
    commenters,
    onClose
}) => 
    <Modal isOpen={isOpen}>
        <div>Hello World</div>
        <button className="close-modal" onClick={onClose}>X</button>
    </Modal>

export default StoryModal;