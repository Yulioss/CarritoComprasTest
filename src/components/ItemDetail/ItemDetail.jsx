import { useState } from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import { ItemQuantitySelector } from '../ItemQuantitySelector/ItemQuantitySelector'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap'
export const ItemDetail = ({ product }) => {

  const { addToCart } = useCartContext()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addToCart(product, quantity) 
  }

  return (
    <Container className="mt-4">

      <Row>

        {/* Imagen */}
        <Col md={6}>
          <Image 
            src={`/img/${product.image}.jpg`} 
            alt={product.name} 
            fluid 
            rounded
          />
        </Col>

        {/* Info */}
        <Col md={6}>
          <Card>
            <Card.Body>

              <Card.Title as="h2">
                {product.name}
              </Card.Title>

              <Card.Text>
                {product.description}
              </Card.Text>

              <h3 className="text-warning mb-3">
                ${product.price}
              </h3>

              {/* Selector */}
              <ItemQuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
                onAdd={handleAddToCart}
              />

              {/* Botón */}
              <Button 
                variant="primary"
                className="mt-3 w-100"
                onClick={handleAddToCart}
              >
                Agregar al carrito
              </Button>

            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  )
}