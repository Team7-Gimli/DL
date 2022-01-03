import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { readImgURL } from '../db/firebase/images.js';

import NaviBar from '../components/NaviBar.js';
import { auth } from '../db/firebase/config.js';
import UploadForm from '../components/uploadForm.js';
import ImageList from '../components/imageList.js';



const HomePage = () => {

  const [user, setUser] = useState (null);
  const [images, setImages] = useState([]);

  onAuthStateChanged (auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async () => {
    await signOut(auth);
  }

  useEffect(() => {
    readImgURL(setImages);
  }, []);

  return (
    <div>
      <div className='homeTitle'>
        <Container>
          <Row>
            <Col>
              <h2>Dead Stare</h2>
            </Col>
            <Col>
             {user ? <Link href='/profile'><a id='login'>{user.email}</a></Link> : <Button variant='dark' id='login'><Link href='/login'><a className='login'>Login</a></Link></Button>}
            </Col>
          </Row>
        </Container>
      </div>
      <div className='naviBar'>
        <NaviBar user={user} logout={logOut} />
      </div>
      <div>
        <Container>
          {user && <UploadForm setImages={setImages}/>}
        </Container>
      </div>
      <div>
        <Container>
        <ImageList images={images} />
        </Container>
      </div>
    </div>
  )
}

export default HomePage;