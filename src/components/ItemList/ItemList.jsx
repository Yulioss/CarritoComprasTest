import { Item } from '../Item/Item'

export const ItemList = ({ products }) => {

  return (
    <div className="item-list">
      {products.map(product => (
        <Item 
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}