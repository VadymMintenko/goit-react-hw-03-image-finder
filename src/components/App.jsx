import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppStyled } from './App.styled';
export class App extends React.Component {
  state = {
    textSearch: '',
    showModal: false,
    largeImage: null,
  };

  handleTogle = image => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: image,
    }));
  };

  heandleSubmit = textSearch => {
    this.setState({ textSearch });
  };
  render() {
    return (
      <AppStyled>
        {this.state.showModal && (
          <Modal closeModal={this.handleTogle}>
            <img src={this.state.largeImage} alt="" />
          </Modal>
        )}

        <Searchbar onSearch={this.heandleSubmit} />
        <ImageGallery
          value={this.state.textSearch}
          openModal={this.handleTogle}
        />
      </AppStyled>
    );
  }
}
