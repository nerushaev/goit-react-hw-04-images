import propTypes from 'prop-types'

export const ImageGalleryItem = ({ data, onClick }) => {
  const elements = data.map(({ id, webformatURL, largeImageURL }) => {
    return <li onClick={() => onClick(({largeImageURL}))} key={id} className="ImageGalleryItem">
            <img className="ImageGalleryItem-image" src={webformatURL} />
          </li>
  })
  return elements;
}

ImageGalleryItem.propTypes = {
  data: propTypes.array,
  onClick: propTypes.func,
}