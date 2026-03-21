import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../db/db'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    // simulacion de carga async
    const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = db.find(p => p.id === Number(id))
        item ? resolve(item) : reject('Producto no encontrado')
      }, 1000)
    })

    getProduct
      .then(data => setProduct(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))

  }, [id])

  if (loading) return <p>Cargando producto...</p>

  if (!product) return <p>Producto no encontrado</p>

  return <ItemDetail product={product} />
}