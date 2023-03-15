import React from 'react';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33034390-7e7038dc39440b662093bd231';
export class ImageGalleryItem extends React.Component {
  state = {
    images: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const searchValue = this.props.value;
    if (prevProps.value !== this.props.value) {
      const resp = await fetch(`${BASE_URL}?key=${KEY}&q=${searchValue}`);
      const data = await resp.json();
      const images = data.hits;
      this.setState({ images });
    }
  }

  render() {
    const { images } = this.state;
    if (!images) {
      return null;
    }
    return images.map(obj => {
      return (
        <li key={obj.id} className="gallery-item">
          <img src={obj.webformatURL} alt="" />
        </li>
      );
    });
  }
}
