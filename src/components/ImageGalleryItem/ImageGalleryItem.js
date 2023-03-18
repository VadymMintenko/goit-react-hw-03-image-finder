import React from 'react';
import { Loader } from 'components/Loader/Loader';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33034390-7e7038dc39440b662093bd231';
export class ImageGalleryItem extends React.Component {
  state = {
    images: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const inputValue = this.props.value;
    if (prevProps.value !== this.props.value) {
      this.setState({ loading: true });

      fetch(`${BASE_URL}?key=${KEY}&q=${inputValue}`)
        .then(resp => resp.json())
        .then(data => {
          if (data.totalHits === 0) {
            return alert('За вашм запитом нычого не знайдено');
          }
          this.setState({ images: data.hits });
        })
        .catch(() => alert('Sorry'))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    const { images } = this.state;
    if (!images) {
      return null;
    }
    return images.map(obj => {
      return (
        <React.Fragment key={obj.id}>
          {this.state.loading && <Loader />}
          <li className="gallery-item">
            <img
              src={obj.webformatURL}
              alt=""
              onClick={() => {
                this.props.openModal(obj.largeImageURL);
              }}
            />
          </li>
        </React.Fragment>
      );
    });
  }
}
