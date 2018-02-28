import React from 'react';
import ReactModal from 'react-modal';
import './style.css';

const Modal = ({
    isOpen,
    children
}) => 
    <ReactModal 
        isOpen={isOpen}
        className="modal"
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={true}
        >
        {children}
    </ReactModal>

export default Modal;