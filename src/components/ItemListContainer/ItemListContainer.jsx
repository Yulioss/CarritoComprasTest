import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { db } from '../../db/db'
import { Container } from 'react-bootstrap'

export const ItemListContainer = ({ greeting, category }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    // simulacion de carga async
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(db)
      }, 1000)
    })

    getProducts
      .then(data => {
        //filtro por categoría si existe
        const filtered = category
          ? data.filter(p => p.category === category)
          : data

        setProducts(filtered)
      })
      .finally(() => setLoading(false))

  }, [category])

  return (
    <div>
      <h2>{greeting}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <Container className="mt-4">
          <ItemList products={products} />
        </Container>
      )}
    </div>
  )
}