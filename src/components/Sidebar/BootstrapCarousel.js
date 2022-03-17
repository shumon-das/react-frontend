import Sidebar from './Sidebar'
import {Row, Col}  from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'


const BootstrapCarousel = () => {
  return <>
            <div className='carousel'>
              <Row>
                    <Col sm={2}>
                        <div className='left-sidebar'>
                            <Sidebar></Sidebar>
                        </div>
                    </Col>
                    <Col sm={10}>
                      <Carousel variant="dark" style={{width:"90%", height:"800px", margin:"auto"}}>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="https://wallpaperaccess.com/full/1222798.jpg"
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
                            src="https://www.hdnicewallpapers.com/Walls/Big/Sparrow/Very_Cute_Blue_Sparrow_on_Branch.jpg"
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
                            src="https://www.whoa.in/download/cute-little-baby-girl-enjoy-the-natural-hd-cute-baby-wallpaper"
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