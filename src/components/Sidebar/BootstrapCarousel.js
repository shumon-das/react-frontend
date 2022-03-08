import SidebarLeft from './SidebarLeft';
import {Row, Col}  from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'


const BootstrapCarousel = () => {
  return <>
            <div className='carousel'>
              <Row>
                    <Col sm={2}>
                        <div className='left-sidebar'>
                            <SidebarLeft></SidebarLeft>
                        </div>
                    </Col>
                    <Col sm={10}>
                      <Carousel variant="dark" style={{width:"50%", margin:"auto"}}>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="https://themewagon.com/wp-content/uploads/2021/11/purple-react-1.png"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="https://codedthemes.com/wp-content/uploads/edd/2021/03/Codedthemes_main-1.png"
                            alt="Second slide"
                          />
                          <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2dY3AjX8s5cytdJ-cKhkUqBmy0zQewJjhQ&usqp=CAU"
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                </Row>
            </div>
          </>
}

export default BootstrapCarousel;