export const ImageGalleryItem = ({ openModal, images }) => {
  return images.map((obj, idx) => {
    return (
      <li
        className="gallery-item"
        key={`${obj.id}-${idx}`}
        onClick={() => {
          openModal(obj.largeImageURL);
        }}
      >
        <img src={obj.webformatURL} alt="" />
      </li>
    );
  });
};
