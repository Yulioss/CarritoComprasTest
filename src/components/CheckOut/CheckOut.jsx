import { Container, Row, Col, ListGroup, Card, Button, Image } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export const CheckOut = () => {

  const { increaseQuantity, decreaseQuantity, clearCart, isEmpty, cart, cartTotal, removeFromCart } = useCartContext();

  if (isEmpty) {
    return (
      <Container className="mt-5 text-center">
        <FontAwesomeIcon icon={faCartShopping} size="3x" className="mb-3" />
        <h3>Tu carrito está vacío </h3>
      </Container>
    );
  }

  const handleCheckout = () => {
    alert('Compra finalizada ');
    clearCart();
  };

  return (
    <Container className="mt-5">

      <h2 className="mb-4 text-center">Resumen de compra</h2>

      <Row className="g-4">

        {/* Productos */}
        <Col md={8}>
          <ListGroup>

            {cart.map(item => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >

                {/*imagen + info */}
                <div className="d-flex align-items-center gap-3">

                  <Image
                    src={`/img/${item.image}.jpg`}
                    style={{ width: "70px", objectFit: "contain" }}
                  />

                  <div>
                    <h6 className="mb-1">{item.name}</h6>

                    {/* Selector de cantidad */}
                    <div className="d-flex align-items-center gap-2">

                      <Button
                        variant="outline-dark"
                        size="sm"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>

                      <span className="fw-bold fs-5">
                        {item.quantity}
                      </span>

                      <Button
                        variant="outline-dark"
                        size="sm"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>

                    </div>
                  </div>

                </div>

                {/* precio + eliminar */}
                <div className="d-flex align-items-center gap-3">

                  <strong className="fs-5">
                    ${item.price * item.quantity}
                  </strong>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>

                </div>

              </ListGroup.Item>
            ))}

          </ListGroup>
        </Col>

        {/* Resumen */}
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>

              <Card.Title>Resumen</Card.Title>

              <hr />

              <div className="d-flex justify-content-between mb-2">
                <span>Productos</span>
                <span>{cart.length}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Total</span>
                <strong>${cartTotal}</strong>
              </div>

              <Button
                variant="success"
                className="w-100 mb-2"
                onClick={handleCheckout}
              >
                Finalizar compra
              </Button>

              <Button
                variant="outline-danger"
                className="w-100"
                onClick={clearCart}
              >
                Vaciar carrito
              </Button>

            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
};