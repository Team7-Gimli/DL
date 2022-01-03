import { Card, Image } from 'react-bootstrap';

const ImageCard = ({ img }) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Image src={img} />
    </Card>
  )
}

export default ImageCard;