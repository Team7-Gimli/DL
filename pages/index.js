import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

import NaviBar from '../components/NaviBar.js';


const HomePage = () => {
  return (
    <div>
      <div className='homeTitle'>
        <Container>
          <Row>
          <Col>
          <h2>Dead Stare</h2>
          </Col>
          <Col>
            <Button variant='dark' id='login'><Link href='/login'><a className='login'>Login</a></Link></Button>
          </Col>
          </Row>
        </Container>
      </div>
      <div className='naviBar'>
        <NaviBar />
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