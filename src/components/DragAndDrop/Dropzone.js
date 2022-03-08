// import { DropzoneArea } from 'material-ui-dropzone'
import {Row, Col} from 'react-bootstrap'
import SidebarLeft from "../Sidebar/SidebarLeft"


const MyDropzone = () => {
    // return <DropzoneArea  onChange={(files) => console.log('Files:', files)} />
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
                        <h1>Hello from dropzone</h1>
                    </Col>
                </Row>
            </div>
        
        </>
    )
}
export default MyDropzone
