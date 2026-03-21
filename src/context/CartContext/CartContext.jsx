import { createContext, useContext, useReducer, useMemo, useEffect } from 'react'

// 🔹 constantes
const MAX_ITEMS = 6
const MIN_ITEMS = 1

// 🔹 contexto
const CartContext = createContext()

// 🔹 initializer (localStorage)
const initialCart = () => {
  const localStorageCart = localStorage.getItem('cart')
  return localStorageCart ? JSON.parse(localStorageCart) : []
}

// 🔹 reducer
const cartReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_TO_CART': {
      const itemExists = state.findIndex(p => p.id === action.payload.id)

      if (itemExists >= 0) {
        const updatedCart = [...state]

        if (updatedCart[itemExists].quantity >= MAX_ITEMS) return state

        updatedCart[itemExists].quantity += action.payload.quantity || 1
        return updatedCart
      }

      return [
        ...state,
        { ...action.payload, quantity: action.payload.quantity || 1 }
      ]
    }

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload)

    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload && item.quantity < MAX_ITEMS
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload && item.quantity > MIN_ITEMS
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )

    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}

// 🔹 provider
export const CartProvider = ({ children }) => {

  const [cart, dispatch] = useReducer(cartReducer, [], initialCart)

  // persistencia
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // 🔹 actions
  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity }
    })
  }

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id })
  }

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  // 🔹 derivados
  const cartLength = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  )

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  )

  const isEmpty = useMemo(() => cart.length === 0, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartLength,
        cartTotal,
        isEmpty
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 🔹 hook custom
export const useCartContext = () => useContext(CartContext)