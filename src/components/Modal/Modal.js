import { Backdrop, ModalWindow } from './modal.styled';
import { createPortal } from 'react-dom';
import React from 'react';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackDropClic = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <Backdrop className="overlay" onClick={this.handleBackDropClic}>
        <ModalWindow className="modal">{this.props.children}</ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}
