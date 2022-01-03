import { Card, Image } from 'react-bootstrap';

const ImageCard = ({ img }) => {

  const imgClick = () => {
    window.open (img);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Image onClick={imgClick} src={img} />
    </Card>
  )
}

export default ImageCard;