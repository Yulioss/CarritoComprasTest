import { Row, Col } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({ products }) => {
  return (
    <Row className="justify-content-center">
      {products.map(product => (
        <Col 
          key={product.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex justify-content-center mb-4"
        >
          <Item product={product} />
        </Col>
      ))}
    </Row>
  )
}