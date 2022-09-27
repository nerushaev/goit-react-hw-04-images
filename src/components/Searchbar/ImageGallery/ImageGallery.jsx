import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import propTypes from 'prop-types'

export const ImageGallery = ({ data, onClick }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem onClick={onClick} data={data}/>
    </ul>
  )
}

ImageGallery.propTypes = {
  data: propTypes.array,
  onClick: propTypes.func,
}