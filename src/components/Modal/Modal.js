import { Backdrop, ModalWindow } from './modal.styled';
import { createPortal } from 'react-dom';
import React from 'react';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.closeModal();
      }
    });
  }

  render() {
    return createPortal(
      <Backdrop className="overlay">
        <ModalWindow className="modal">
          <img src={this.props.image} alt="" />
          <button type="button" onClick={this.props.closeModal}>
            Close
          </button>
        </ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}
