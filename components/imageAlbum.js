import {useState, useEffect} from 'react';
import ImageList from './imageList.js';
import {Button, Card, Image} from 'react-bootstrap';
import Link from 'next/link';


const ImageAlbum = ({images}) => {


  return (
    <div className='imageAlbum'>
      <Card>
        <Image src={images[0]} ></Image>
        <Link href={{pathname: '/album', query: images}}>
          <Button>Go</Button>
        </Link>
      </Card>
    </div>

  )
}

export default ImageAlbum;