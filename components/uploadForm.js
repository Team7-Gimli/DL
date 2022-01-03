import { useState } from 'react';
import { Form, Container, Col, Row, Modal } from 'react-bootstrap';
import ProgressBar from './progressBar.js';
import useStorage from '../hooks/useStorage.js';
import ImgModal from './imgModal.js';

const UploadForm = ({ setImages }) => {
  const [url, setURL] = useState(null);
  const [img, setImg] = useState(null);
  const [show, setShow] = useState(false);

  const upload = (e) => {
    let image = e.target.files[0];

    if (image) {
      setImg(image)
    } else {
      setImg(null);
    }
  }

  return (
    <Form>
      <Form.Group>
        <Form.Control onChange={upload} type='file' accept="image/*" />
      </Form.Group>
      {img && <ProgressBar file={img} setFile={setImg} setURL={setURL} setShow={setShow} />}
      {url && <ImgModal setImages={setImages} url={url} show={show} fullscreen={true} onHide={() => setShow(false)} />}
    </Form>
  )
}

export default UploadForm;