import { AddItemButton } from '../AddItemButton/AddItemButton'
import { Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

export const ItemQuantitySelector = ({ quantity, setQuantity, onAdd }) => {

  const MIN = 1
  const MAX = 6

  const increase = () => {
    if (quantity < MAX) {
      setQuantity(quantity + 1)
    }
  }

  const decrease = () => {
    if (quantity > MIN) {
      setQuantity(quantity - 1)
    }
  }

 return (
  <div className="d-flex flex-column align-items-center gap-3">

  <ButtonGroup>
    <Button variant="outline-secondary" onClick={decrease}>
      <FontAwesomeIcon icon={faMinus} />
    </Button>

    <Button variant="light" className="fs-4" disabled>
      {quantity}
    </Button>

    <Button variant="outline-secondary" onClick={increase}>
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  </ButtonGroup>

  <div className="mt-auto">
    <AddItemButton onAdd={onAdd} />
  </div>

</div>
);
}