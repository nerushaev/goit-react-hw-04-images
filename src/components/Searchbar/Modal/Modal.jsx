import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {

  componentDidMount() {
    document.addEventListener("keydown", this.onClose)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onClose)
  }

  onClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      this.props.closeModal();
    }
  }

  render() {
    const { children } = this.props;
    const { onClose } = this;
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
}

Modal.propTypes = {
  closeModal: propTypes.func
}