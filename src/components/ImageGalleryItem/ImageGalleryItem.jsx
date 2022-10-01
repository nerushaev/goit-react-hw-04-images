import { nanoid } from 'nanoid'
import propTypes from 'prop-types'
import './ImageGalleryItem.css'


const ImageGalleryItem = ({ data, onClick }) => {
  const elements = data.map(({ id, webformatURL, largeImageURL }) => {
    return <li onClick={() => onClick(({largeImageURL}))} key={id} className="ImageGalleryItem">
            <img alt="" className="ImageGalleryItem-image" src={webformatURL} />
          </li>
  })
  return elements;
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  data: propTypes.array,
  onClick: propTypes.func,
}