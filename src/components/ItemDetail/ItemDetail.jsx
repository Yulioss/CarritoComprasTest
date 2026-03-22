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
  <Row className="align-items-center">

    {/* Imagen */}
    <Col md={6} className="text-center">
      <Image 
        src={`/img/${product.image}.jpg`} 
        alt={product.name} 
        fluid 
        rounded
        className="shadow"
        style={{ maxHeight: '400px', objectFit: 'contain' }}
      />
    </Col>

    {/* Info */}
    <Col md={6}>
      <Card className="h-100 shadow-sm">
        <Card.Body className="d-flex flex-column justify-content-center">

          <Card.Title as="h2">
            {product.name}
          </Card.Title>

          <Card.Text>
            {product.description}
          </Card.Text>

          <h3 >
            ${product.price}
          </h3>

          <ItemQuantitySelector 
            quantity={quantity}
            setQuantity={setQuantity}
            onAdd={handleAddToCart}
          />
        </Card.Body>
      </Card>
    </Col>

  </Row>
</Container>
  )
}