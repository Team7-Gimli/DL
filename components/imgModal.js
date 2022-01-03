import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { writeImgURL, readImgURL } from '../db/firebase/images.js';

const ImgMdoal = ({ show, url, onHide, setImages }) => {

  const saveAndExit = () => {
    writeImgURL(url);
    onHide();
    readImgURL(setImages);
  };

  return (
    <Modal show={show} size='xl' onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>New Stare</Modal.Title>
      </Modal.Header>
      <Modal.Body><img className='modal-img' src={url} /></Modal.Body>
      <Button onClick={saveAndExit} variant='dark' id='add-btn' >Add to Feed</Button>
    </Modal>
  )
}

export default ImgMdoal;