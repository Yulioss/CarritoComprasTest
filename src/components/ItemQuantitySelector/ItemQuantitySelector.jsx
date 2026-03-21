import { AddItemButton } from '../AddItemButton/AddItemButton'

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
    <div className="quantity-selector">
      <div className="quantity-selector__controls">
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>      
      <AddItemButton onAdd={onAdd} />
    </div>
  )
}