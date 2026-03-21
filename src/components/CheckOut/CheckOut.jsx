import { useCartContext } from '../../context/CartContext/CartContext'
import { Container, Row, Col, ListGroup, Button, Card } from 'react-bootstrap'

export const CheckOut = () => {

  const { cart, cartTotal, clearCart, isEmpty } = useCartContext()

  if (isEmpty) {
    return (
      <Container className="mt-4">
        <h3>Tu carrito está vacío 🛒</h3>
      </Container>
    )
  }

  const handleCheckout = () => {
    alert('Compra finalizada 🎉')
    clearCart()
  }

  return (
    <Container className="mt-4">

      <h2 className="mb-4">Resumen de compra</h2>

      <Row>
        
        {/* Lista de productos */}
        <Col md={8}>
          <ListGroup>
            {cart.map(item => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >

                <div>
                  <h5 className="mb-1">{item.name}</h5>
                  <small>Cantidad: {item.quantity}</small>
                </div>

                <strong>
                  ${item.price * item.quantity}
                </strong>

              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Total */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total</Card.Title>

              <h3 className="mb-3">
                ${cartTotal}
              </h3>

              <Button
                variant="success"
                className="w-100"
                onClick={handleCheckout}
              >
                Finalizar compra
              </Button>

            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  )
}