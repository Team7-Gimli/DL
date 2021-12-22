import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import NaviBar from '../components/NaviBar.js';
import { auth } from '../db/firebase/config.js';



const HomePage = () => {

  const [user, setUser] = useState (null);
  onAuthStateChanged (auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async () => {
    await signOut(auth);
  }

  return (
    <div>
      <div className='homeTitle'>
        <Container>
          <Row>
            <Col>
              <h2>Dead Stare</h2>
            </Col>
            <Col>
             {user ? <Link href='/'><a id='login'>{user.email}</a></Link> : <Button variant='dark' id='login'><Link href='/login'><a className='login'>Login</a></Link></Button>}
            </Col>
          </Row>
        </Container>
      </div>
      <div className='naviBar'>
        <NaviBar user={user} logout={logOut} />
      </div>
      <div>
        <Container>
          main page content
        </Container>
      </div>
    </div>
  )
}

export default HomePage;