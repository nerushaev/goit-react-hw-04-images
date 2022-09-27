import Searchbar from "./Searchbar/Searchbar/Searchbar";
import { searchImages } from "./Searchbar/API/API";
import './Searchbar/styles.css';
import React, { Component } from 'react'
import { ImageGallery } from "./Searchbar/ImageGallery/ImageGallery";
import { Button } from "./Searchbar/Button/Button";
import { Loader } from "./Searchbar/Loader/Loader";
import Modal from "./Searchbar/Modal/Modal";

export default class App extends Component {
    state = {
    images: [],
    search: '',
    error: null,
    loading: false,
    page: 1,
    modalOpen: false,
    modalContent: ''
    }
  
  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if ((search && prevState.search !== search) || page > prevState.page) {
      this.fetchImages(search, page)
    }
  }
  
  async fetchImages() {
    const { search, page } = this.state;
    this.setState({
      loading: true
    })

    try {
      const data = await searchImages(search, page);
      this.setState(({ images }) => {
        return {
          images: [...images, ...data.hits]
        }
      })
    } catch (error) {
      this.setState({
        error
      })
    } finally {
      this.setState({
        loading: false
      })
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { value, name } = e.target.elements.search;
    if (value.length !== 0 && value !== this.state.search) {
      this.setState({
      [name]: value,
      images: []
    })
    }
  }

  LoadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1
      }
    })
  }

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: ''
    })
  }

  openModal = (modalContent) => {
    this.setState({
      modalOpen: true,
      modalContent: modalContent.largeImageURL
    })
  }
  
  render() {
    const { handleSubmit, LoadMore, closeModal, openModal } = this;
    const { images, loading, modalOpen, modalContent } = this.state;
    return (
      <>
        {modalOpen && <Modal closeModal={closeModal}>
          <img src={modalContent}></img>
        </Modal>}
        <Searchbar onSubmit={handleSubmit} />
        {images.length !== 0 && <ImageGallery onClick={openModal} data={images} />}
        {images.length !== 0 && <Button onClick={LoadMore} />}
        {loading && <Loader />}
      </>
  )
  }
}
