import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartContext'
import { Container } from "react-bootstrap";
import { NavBar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CheckOut } from './components/CheckOut/CheckOut'

function App() {
  return (
<CartProvider>
  <BrowserRouter>

    <div className="d-flex flex-column min-vh-100">

      <NavBar />

      <main className="flex-grow-1">
        <Routes>          
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenido a el mundo de la guitarra" />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer greeting="Productos por categoría" />
            }
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />
          <Route
            path="/checkout"
            element={<CheckOut />}
          />
        </Routes>
      </main>

      <footer className="bg-dark py-4">
        <Container>
          <p className="text-white text-center m-0">
            Copyright © 2026 un proyecto de Julian Rangel
          </p>
        </Container>
      </footer>

    </div>

  </BrowserRouter>
</CartProvider>
  )
}

export default App