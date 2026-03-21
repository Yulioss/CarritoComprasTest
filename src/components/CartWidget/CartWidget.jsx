import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/CartContext'
import { Nav, Badge } from 'react-bootstrap'

export const CartWidget = () => {

  const { cartLength } = useCartContext()

  return (
    <Nav.Link 
      as={Link} 
      to="/checkout"
      className="position-relative"
    >
      🛒

      {cartLength > 0 && (
        <Badge
          bg="warning"
          text="dark"
          pill
          className="position-absolute top-0 start-100 translate-middle"
        >
          {cartLength}
        </Badge>
      )}
    </Nav.Link>
  )
}