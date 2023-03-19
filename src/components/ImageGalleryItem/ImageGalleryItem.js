export const ImageGalleryItem = ({ openModal, images }) => {
  return images.map(obj => {
    return (
      <li
        className="gallery-item"
        key={obj.id}
        onClick={() => {
          openModal(obj.largeImageURL);
        }}
      >
        <img src={obj.webformatURL} alt="" />
      </li>
    );
  });
};
