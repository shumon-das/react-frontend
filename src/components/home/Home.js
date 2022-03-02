import React from 'react'
import { Row, Col} from 'react-bootstrap'
import SidebarLeft from '../Sidebar/SidebarLeft'

const Home = () => {
    return (
        <>
            <div>
                <Row>
                    <Col sm={3}>
                        <div className='left-sidebar'>
                            <SidebarLeft></SidebarLeft>
                        </div>
                    </Col>
                    <Col sm={9}>
                        
                    </Col>
                </Row>
            </div>
        
        </>
    )
}

export default Home
