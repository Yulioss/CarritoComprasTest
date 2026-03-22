import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/CartContext'
import { Nav, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {

  const { cartLength } = useCartContext()

  return (
    <Nav.Link 
      as={Link} 
      to="/checkout"
      className="position-relative"
    >
      <div className="position-relative d-inline-block">
        <FontAwesomeIcon icon={faCartShopping} size="2x" color='white'/>

        {cartLength > 0 && (
          <Badge
            bg="warning"
            text="dark"
            pill
            className="position-absolute top-0 start-100"
            style={{
              transform: "translate(-40%, -40%)",
              fontSize: "0.65rem"
        }}
          >
            {cartLength}
          </Badge>
        )}
      </div>
    </Nav.Link>
  )
}