import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
  <Container fluid className="px-3">

    <Navbar.Brand as={Link} to="/" className="me-3">
      <Image 
        src="/img/MundoGuitar.png" 
        alt="Logo" 
        style={{ height: '100px', objectFit: 'contain' }}
      />
    </Navbar.Brand>

    <Navbar.Toggle />

    <Navbar.Collapse className="justify-content-between">

      <Nav>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav>

      <CartWidget />

    </Navbar.Collapse>

  </Container>
</Navbar>
  )
}