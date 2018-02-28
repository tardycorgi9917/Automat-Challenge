import React, { Component } from 'react';
import Modal from './../../components/Modal';
import './style.css';

const StoryModal = ({
    showOn,
    story,
    commenters
}) => 
    <Modal showOn={true}>
        <div>Hello World</div>
    </Modal>

export default StoryModal;