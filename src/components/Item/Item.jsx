import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }} className="h-100">

      <Card.Img 
        variant="top" 
        src={`/img/${product.image}.jpg`} 
        alt={product.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />

      <Card.Body className="d-flex flex-column justify-content-between">

        <div>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
        </div>

        <Button 
          as={Link} 
          to={`/item/${product.id}`} 
          variant="primary"
        >
          Ver detalle
        </Button>

      </Card.Body>

    </Card>
  )
}