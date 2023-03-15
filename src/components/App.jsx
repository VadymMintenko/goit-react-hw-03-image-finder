import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends React.Component {
  state = {
    textSearch: '',
  };

  heandleSubmit = textSearch => {
    this.setState({ textSearch });
  };
  render() {
    return (
      <div>
        <Searchbar onSearch={this.heandleSubmit} />
        <ImageGalleryItem value={this.state.textSearch} />
      </div>
    );
  }
}
