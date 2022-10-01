import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import './Modal.css'

const modalRoot = document.getElementById("modal-root");

const Modal = ({ closeModal, children }) => {

    const onClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onClose);
    return () => {
    document.removeEventListener("keydown", onClose);
    };
  });

    return createPortal(
    <div onClick={onClose} className="Overlay">
      <div className="Modal">
          <img src="" alt="" />
          {children}
      </div>
      </div>,
      modalRoot
  )
}

Modal.propTypes = {
  closeModal: propTypes.func
}

export default Modal;