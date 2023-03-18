import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';
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
      <div>
        {this.state.showModal && (
          <Modal image={this.state.largeImage} closeModal={this.handleTogle} />
        )}

        <Searchbar onSearch={this.heandleSubmit} />

        <ImageGalleryItem
          value={this.state.textSearch}
          openModal={this.handleTogle}
        />
      </div>
    );
  }
}
