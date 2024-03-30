import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Body() {
  return (
    <>
      <Container className='d-flex justify-content-center p-5'>
        <Row>
          <Col className=''>
            <h2>Coming Soon</h2>
          </Col>
        </Row>
      </Container>
      {/* <Container className='d-flex justify-content-center p-5'>
        <Row>
          <Col className=''>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Disabled input" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Disabled select menu</Form.Label>
              <Form.Select disabled>
                <option>Disabled select</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Can't check this" disabled />
            </Form.Group>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default Body;