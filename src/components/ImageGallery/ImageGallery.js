import React from 'react';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33034390-7e7038dc39440b662093bd231';

export class ImageGallery extends React.Component {
  state = {
    images: [],
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const inputValue = this.props.value;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}?key=${KEY}&q=${inputValue}&page=${this.state.page}`
        );
        const data = await response.json();
        if (data.totalHits === 0) {
          return alert('За вашм запитом нічого не знайдено');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      } catch (error) {
        alert('Sorry');
      } finally {
        this.setState({ loading: false });
      }
    };

    if (prevProps.value !== inputValue) {
      this.setState({ loading: true, images: [], page: 1 }, fetchData);
    }

    if (prevState.page !== this.state.page) {
      this.setState({ loading: true }, fetchData);
    }

    console.log(this.state.page);
  }

  onPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('component', this.state.page);
  };

  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        <ul className="gallery">
          {this.state.images && (
            <ImageGalleryItem
              openModal={this.props.openModal}
              images={this.state.images}
            />
          )}
        </ul>
        {this.state.images.length > 0 && <Button page={this.onPage} />}
      </>
    );
  }
}
