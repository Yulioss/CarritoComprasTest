import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartContext'

import { NavBar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CheckOut } from './components/CheckOut/CheckOut'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        {/* 🔹 Navbar global */}
        <NavBar />

        {/* 🔹 Rutas */}
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenido a la tienda" />
            }
          />

          {/* Categorías */}
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer greeting="Productos por categoría" />
            }
          />

          {/* Detalle de producto */}
          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />

          {/* Checkout */}
          <Route
            path="/checkout"
            element={<CheckOut />}
          />

        </Routes>

      </BrowserRouter>
    </CartProvider>
  )
}

export default App