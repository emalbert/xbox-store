import './NavBar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link className="navbar-brand" to='/'>Xbox Store Argentina</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className="nav-link" to='/'>Inicio</Link></Nav.Link>
                        <Nav.Link><Link className="nav-link" to='/gamepass'>Game Pass</Link></Nav.Link>
                        <NavDropdown className="nav-link" title="Categorías" id="basic-nav-dropdown">
                            <LinkContainer to='/category/1'>
                                <NavDropdown.Item className="nav-link-dropdown">
                                    Acción
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/category/2'>
                                <NavDropdown.Item className="nav-link-dropdown">
                                    Aventura
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/category/3'>
                                <NavDropdown.Item className="nav-link-dropdown">
                                    Conducción
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <Nav.Link><Link className="nav-link" to='/faq'>Preguntas Frecuentes</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>

        </Navbar>
    );
  }

  export default NavBar;