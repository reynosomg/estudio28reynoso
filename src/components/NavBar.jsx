import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Estudio28"
              src="./logo28.png"
              width="50"
              height="50"
              className="d-inline-block"
            />{' '}Estudio 28</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#neon">Neon</Nav.Link>
          <Nav.Link href="#relojes">Relojes</Nav.Link>
          <Nav.Link href="#deco">Deco</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>

          <CartWidget />
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar;