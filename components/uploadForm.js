import { useState } from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';

const UploadForm = () => {

  const [img, setImg] = useState(null);

  return (
    <Form>
      <Form.Group>
        <Form.Control type='file' accept="image/*" />
      </Form.Group>
    </Form>
  )
}

export default UploadForm;