import { useState } from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
import ProgressBar from './progressBar.js';

const UploadForm = () => {

  const [img, setImg] = useState(null);

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
      {img && <ProgressBar file={img} setFile={setImg} />}
    </Form>
  )
}

export default UploadForm;