
import { Accordion, Card } from "react-bootstrap";


const Sidebar = () => {
  return <>
            <div className='sidebar' style={{width:"20%", }}>
                  <Accordion>
                        <Card>
                            <Accordion.Toggle as={"Card.Header"} eventKey="0">
                                Dashboard
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>This is first tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={"Card.Header"} eventKey="1">
                                Dropzone
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={"Card.Header"} eventKey="2">
                                Users
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={"Card.Header"} eventKey="3">
                                Data Table
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="3">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
            </div>
          </>
}

export default Sidebar;