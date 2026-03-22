import { Button } from "react-bootstrap"

export const AddItemButton = ({ onAdd }) => {
  return (
    <Button onClick={onAdd}>
      Agregar al carrito
    </Button>
  )
}