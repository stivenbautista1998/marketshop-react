import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className="centerPosition">
            {children}
        </div>,
        document.getElementById("modal")
    );
};

export { Modal };