import { useState } from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NaviBar from '../components/NaviBar.js';


const HomePage = () => {
  return (
    <div>
      <div className='homeTitle'>
        <Container>
        <h2>How dead can you be</h2>
        </Container>
      </div>
      <div className='naviBar'>
        <NaviBar />
      </div>
    </div>
  )
}

export default HomePage;