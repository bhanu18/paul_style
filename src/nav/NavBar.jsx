import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './nav.css';
import logo from '../assets/paul.png'

function NavBar() {
  return (
    <>
      <Container className='d-flex justify-content-center bg-gray top-header p-0'>
        <Row>
          <Col className='col-6'>
            <Navbar.Brand href="#home" className='ms-auto'><img src={logo} width={200} height={200}/></Navbar.Brand>
          </Col>
        </Row>
      </Container>
      <Navbar expand="lg" className="nav-bg p-0">
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