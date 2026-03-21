import { useState, useEffect, useMemo  } from 'react'
import {db} from '../db/db.js'
export const useCart = () =>{
    
    const initialCart =()=>{
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart):[]
      }
    
      const [data] = useState(db)
      const [cart, setCart] = useState(initialCart)
      const maxItems = 6
      const minItems = 1
    
      useEffect(()=> {
        localStorage.setItem('cart', JSON.stringify(cart))
      }, [cart])
    
      function addToCart(item){
        const itemExists = cart.findIndex(product=> product.id === item.id)
        if(itemExists >= 0)
        {
          if( cart[itemExists].quantity >=  maxItems) return
          const updateCart = [...cart]
          updateCart[itemExists].quantity++
          setCart(updateCart)
        }else 
        {
          item.quantity = 1
          setCart([...cart, item])
        }
      }
    
      function removeFromCart(id){
        setCart(preveCart => preveCart.filter(product => product.id !== id ))
      }
    
      function increaseQuantity(id){
        const updateCart = cart.map(item => {
          if(item.id === id)
          {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })
        setCart(updateCart)
      }
    
    
      function decreaseQuantity(id){
        const updateCart = cart.map(item => {
          if(item.id === id && item.quantity > minItems)
          {
            return {
              ...item,
              quantity: item.quantity - 1
            }
          }
          return item
        })
        setCart(updateCart)
      }
    
      function clearCard(){
        setCart([])
      }

      const isEmpty = useMemo(() => cart.length === 0,[cart] )
      const cartLength = useMemo(() => cart.length,[cart])
      const cartTotal = useMemo (() => cart.reduce((total,item) => total + (item.quantity * item.price), 0),[cart])

    return{
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCard,
        isEmpty,
        cartLength,
        cartTotal
    }
}