import { Container, Navbar, Nav } from "react-bootstrap";
import "../css/Navbar1.css";
import logo from "../assets/logo1.jpg";
function Header() {
  return (
    <Navbar className="navbar" bg="none" expand="lg" variant="secondary">
      <Container className="navbar-container">
        <Navbar.Brand href="/">
          <img
            alt="Srisarvam"
            src={logo}
            width="150"
            height="50"
            className="d-inline-block align-top brand-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse collapseOnSelect>
          <Nav
            className="me-auto nav-links justify-content-end"
            style={{ width: "100%" }}
          >
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/products" className="nav-link">Products</Nav.Link>
            <Nav.Link href="/about" className="nav-link">About</Nav.Link>
            <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;