import React from 'react';
import ReactModal from 'react-modal';
import './style.css';

const Modal = ({
    isOpen,
    children,
    handleCloseModal
}) => 
    <ReactModal 
        isOpen={isOpen}
        className="modal"
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        >
        {children}
    </ReactModal>

export default Modal;