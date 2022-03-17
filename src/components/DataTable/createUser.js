import { useState } from 'react';
import {Row, Col, Form, InputGroup, Button} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar';


const CreateUser = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };
  
    return (
        <>
            <div>
                <Row>
                    <Col sm={2}>
                        <div className='left-sidebar'>
                            <Sidebar></Sidebar>
                        </div>
                    </Col>
                    <Col sm={10}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}  className='createUserForm'>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Designation"
                                        defaultValue="Otto"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                                
                            <Row>                                
                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationCustom03">
                                    <Form.Label>QUALIFICATION</Form.Label>
                                    <Form.Control type="text" placeholder="City" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid QUALIFICATION.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="2" controlId="validationCustom04">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Country" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Country.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2" controlId="validationCustom05">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control type="text" placeholder="Salary" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid salary.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="2" controlId="validationCustom04">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="text" placeholder="Age" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid age.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2" controlId="validationCustom05">
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control type="text" placeholder="Year" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid year.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                />
                            </Form.Group>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default CreateUser