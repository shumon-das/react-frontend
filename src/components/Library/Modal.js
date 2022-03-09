import { useState } from "react"
import { Modal, Button, Row, Col, Form } from "react-bootstrap";


const EditModal = (props) => {

        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [firstName, setFirstName] = useState(props.firstName)
        const [lastName, setLastName] = useState(props.lastName)
        const [userName, setUsername] = useState(props.userName)
        const [gender, setGender] = useState(props.gender)
        const [email, setEmail] = useState(props.email)
        const [address, setAddress] = useState(props.address)
        const [learn, setLearn] = useState(props.learn)
        const [teach, setTeach] = useState(props.teach)
        const [choice, setChoice] = useState(props.choice)

        const updateData = () => {
            console.log(firstName + lastName + userName + email + address + choice + gender)
            setShow(false)
        }
        
      
        return (
          <>
            <Button variant="primary" className="btn btn-info btn-sm" onClick={handleShow}>
                <i className="fa-solid fa-pen"></i>
            </Button>
      
            <Modal show={show} onHide={handleClose}>

              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Row>
                    <Col sm={12}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" value={userName} onChange={(e) => setUsername(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="designation">
                                        <Form.Group>
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Control value={gender} as="select" onChange={(e) => setGender(e.target.value)}>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Group>
                                    
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="address">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="purpose">
                                        <Form.Label>Purpose to join us?</Form.Label><br/>
                                        <input type="checkbox" name="learn" value={learn}  onChange={(e) => setLearn(e.target.checked)}></input>
                                        <label className='label'>To learn</label>

                                        <input type="checkbox" name="teach" value={teach}  onChange={(e) => setTeach(e.target.checked)}></input>
                                        <label className='label'>To learn</label>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="purpose">
                                        <Form.Label>Do you love proggramming?</Form.Label><br/>
                                            <label className='label'>Yes </label>
                                            <input type="radio" name="choice" value={choice} onChange={(e) => setChoice(e.target.value)} defaultChecked></input>

                                            <label className='label'>No </label>
                                            <input type="radio" name="choice" value="no"  onChange={(e) => setChoice(e.target.value)}></input>
                                    </Form.Group>
                                </Col>
                            </Row>

                        </Form>
                    </Col>
                </Row> 
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {/* <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button> */}
                <Button variant="primary" type="button" onClick={updateData}>
                     Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
    
}
export default EditModal