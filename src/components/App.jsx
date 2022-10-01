import Searchbar from "./Searchbar/Searchbar";
import { searchImages } from "../API/API";
import './App.css';
import React, { useEffect, useState } from 'react'
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import Modal from "./Modal/Modal";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

export default function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    async function fetchImages () {
    setLoading(true);
    try {
      const data = await searchImages(search, page);
      setImages((prev) => {
        return [...prev, ...data.hits];
      })
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
    }
    fetchImages();
  }, [search, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    if (value.length !== 0 && value !== search) {
      setSearch(value);
      setImages([]);
      setPage(1);
    }
  }

  const LoadMore = () => {
    setPage((prev) => prev + 1);
  }

  const closeModal = () => {
    setModalOpen(false);
    setModalContent('');
  }

  const openModal = (modalContent) => {
    setModalOpen(true);
    setModalContent(modalContent.largeImageURL);
  }

  const isLoadMoreButton = ((images.length / page) === 12);
  console.log(error);

  return (
      <>
        {modalOpen && <Modal closeModal={closeModal}>
          <img src={modalContent} alt=""></img>
        </Modal>}
        <Searchbar onSubmit={handleSubmit} />
        {images.length !== 0 && <ImageGallery onClick={openModal} data={images} />}
        {isLoadMoreButton && <Button onClick={LoadMore} />}
        {loading && <Loader />}
        {images.length === 0 && <ErrorMessage />}
      </>
  )
};
