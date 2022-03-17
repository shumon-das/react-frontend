// import { DropzoneArea } from 'material-ui-dropzone'
import { useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'


const MyDropzone = () => {
    const [files, setFiles] = useState([])

    const handleSubmbit = (e) => {
        e.preventDefault()
        // let formData = new FormData()
        // for(let i = 0; i < files; i++){
        //     formData.appen(files[i])
        // }

    }

    const changeInput = (e) => {
        if(e.target.files){
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setFiles((prevImages) => prevImages.concat(fileArray))
        }
    }

    // const preview = (value) => {
    //     return value.map((value, index) => {
    //         return <img src={value} alt='' id="dropzone-img" className='col-md-4' key={index}></img>
        
    //     })
    // }

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
                        <div className='upload'>
                            <h1>Dropzone</h1>
                            <hr></hr>
                            <div className='zone-area row m-auto'>        
                                        {files && files.map((value, index) => {
                                           return <div key={index} className="col-md-2">
                                                    <img src={value} alt='' className="dropzone-img" ></img>
                                                    <span>{index}file name</span>
                                                    <button onClick={() => setFiles(files.filter((e) => e !== value))} className='btn btn-sm dropzone-delete'><i className="fa-solid fa-trash"></i></button>
                                                </div>
                                         })
                                        }
                                        <div className='col-md-2'>
                                            <label htmlFor="file" className='upload-label'>
                                                <i className="fa-solid fa-circle-plus"></i>
                                            </label>
                                        </div>
                                    </div>
                            <form encType="multipart/form-data" method="post">
                                <input type="file" id="file" name='dropzone-file' multiple onChange={changeInput}></input>
                                <button type='submit' className='fileSubmitButton' onSubmit={handleSubmbit}>Upload</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        
        </>
    )
}
export default MyDropzone
