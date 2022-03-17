import React from 'react'
import { useState } from 'react';
import {Row, Col, Button,  Form } from 'react-bootstrap'
import axios from 'axios'
import Sidebar from '../Sidebar/Sidebar';

const Create = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState()
    const [username, setUsername] = useState()
    const [gender, setGender] = useState('male')
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [learn, setLearn] = useState(false)
    const [teach, setTeach] = useState(false)
    const [choice, setChoice] = useState('yes')
    
    const postData = (e) => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            userName: username,
            gender: gender,
            email: email,
            address: address,
            choice: choice,
            learn: learn,
            teach: teach 
        };

        axios.post(`http://localhost:5000/api/create`, data)
            e.preventDefault()
            console.log(data);
            
    }

    return (
            <div className='create-user-form'>
                <Row>
                    <Col sm={2}><Sidebar/></Col>
                    <Col sm={9}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name" onChange={(e) => setFirstName(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name" onChange={(e) => setLastName(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
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
                                        <Form.Control type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="address">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)}/>
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

                            <Button variant="primary" type="submit" onClick={postData}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>                    
            </div>
    )    
}

export default Create;