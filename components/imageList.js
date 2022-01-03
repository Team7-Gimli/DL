import {useState, useEffect} from 'react';
import ImageCard from './imageCard.js';

const ImageList = ({images}) => {



  return (
    <div className='imageList'>
      {images.map((img, index) =>
        <ImageCard key={index} img={img} />
      )}
    </div>
  )
}

export default ImageList;