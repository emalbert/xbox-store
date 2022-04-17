import './NavBar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to='/' className="navbar-brand">Xbox Store Argentina</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link to='/gamepass' className="nav-link">Game Pass</Link>
                        {/*<Link to='/category/1' className="nav-link">Acción</Link>
                        <Link to='/category/2' className="nav-link">Aventura</Link>
                        <Link to='/category/3' className="nav-link">Conducción</Link> */}
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
                        <Link className="nav-link" to='/faq'>Preguntas Frecuentes</Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>

        </Navbar>
    );
  }

  export default NavBar;