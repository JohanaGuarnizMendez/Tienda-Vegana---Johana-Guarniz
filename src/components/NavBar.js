import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import Logo from '../asset/image/logo.png';
import CartWidget from '../layouts/CartWidget';


function NavBar() {
    return (
      <>
      <Navbar bg="light" variant="light">
        <Container>
                <Navbar.Brand href="#home" >
                    <img
                    src={Logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home">Tienda Vegana</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#features">Productos</Nav.Link>
                    <Nav.Link href="#pricing">Ofertas</Nav.Link>
                </Nav>
                <CartWidget/>
        </Container>
   
      </Navbar>
      
      </>
    );
  }
  
  export default NavBar;