import React from 'react';
import ReactModal from 'react-modal';
import './style.css';

const Modal = ({
    showOn,
    children
}) => 
    <ReactModal 
        isOpen={showOn}
        className="modal"
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={true}
        >
        {children}
    </ReactModal>

export default Modal;