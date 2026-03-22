import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { useCartContext  } from "../../context/CartContext/CartContext";

export const Item = ({ product }) => {


  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <Card style={{ width: '18rem' }} className="h-100 text-center shadow-sm">

      <Card.Img 
        variant="top" 
        src={`/img/${product.image}.jpg`} 
        alt={product.name}
        style={{ height: '250px', objectFit: 'contain' }}
      />

      <Card.Body className="d-flex flex-column justify-content-between">

        <div>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
          <Button 
          as={Link} 
          to={`/item/${product.id}`} 
          variant="primary"
        >
          Ver detalle
        </Button>
        </div>
        <Button 
          variant="primary"
          className="mt-3 w-100"
          onClick={handleAddToCart}
        >
          <FontAwesomeIcon icon={faCartPlus} />
        </Button>
        
      </Card.Body>

    </Card>
  )
}