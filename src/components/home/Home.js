import React from 'react'
import { Row, Col} from 'react-bootstrap'
import SidebarLeft from '../Sidebar/SidebarLeft'
import WelcomeBanner from './welcomeBanner'

const Home = () => {
    return (
        <>
            <div>
                <Row>
                    <Col sm={2}>
                        <div className='left-sidebar'>
                            <SidebarLeft></SidebarLeft>
                        </div>
                    </Col>
                    <Col sm={10}>
                        <WelcomeBanner></WelcomeBanner>
                    </Col>
                </Row>
            </div>
        
        </>
    )
}

export default Home
