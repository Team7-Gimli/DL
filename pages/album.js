import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import ImageList from '../components/imageList.js';
import { readImgURL } from '../db/firebase/images.js';


const Album = ({}) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    readImgURL(setImages);
  }, []);

  return (
    <div>
       <ImageList images={images}></ImageList>
       <Button href='./'> Back</Button>
    </div>
  )

}

export default Album;