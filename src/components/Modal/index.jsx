import React from 'react';

const Modal = props => 
    <ReactModal 
        isOpen={props.showOn}
        contentLabel="Inline Styles Modal Example"
        className="modal"
        onAfterOpen={props.closeHamburgerMenu}
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={true}
        >
        {props.children}
    </ReactModal>

export default Modal;