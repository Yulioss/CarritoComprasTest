import { Card, ListGroup } from 'react-bootstrap'

export const Brief = ({ cart }) => {

  const formatPrice = (value) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP'
    }).format(value)

  return (
    <Card className="mt-4">

      <Card.Body>
        <Card.Title>Resumen de productos</Card.Title>
      </Card.Body>

      <ListGroup variant="flush">
        {cart.map(item => {
          const subtotal = item.price * item.quantity

          return (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <div className="fw-bold">{item.name}</div>
                <small className="text-muted">
                  Cantidad: {item.quantity}
                </small>
              </div>

              <div className="fw-bold text-warning">
                {formatPrice(subtotal)}
              </div>
            </ListGroup.Item>
          )
        })}
      </ListGroup>

    </Card>
  )
}