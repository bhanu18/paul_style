import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './nav.css';

function NavBar() {
  return (
    <>
      <Container className='d-flex justify-content-center bg-gray top-header'>
        <Row>
          <Col className='col-6'>
            <Navbar.Brand href="#home" className='ms-auto'>Paul Style</Navbar.Brand>
          </Col>
        </Row>
      </Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
            <Nav className="">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Catalog</Nav.Link>
              <Nav.Link href="#link">Order</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;