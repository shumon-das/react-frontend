import { useState } from 'react'
import { Row, Col} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'

const Upload = () => {
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const handleSubmit = async (e) => {
      e.preventDefault()
      let formData = new FormData()
      formData.append('singleFile', image.data)

      const response = await fetch('http://localhost:5000/api/image', {
        method: 'POST',
        body: formData,
      })
      if (response) setStatus(response.statusText)
    }
  
    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
    }


        return <>
                  <div>
                      <Row>
                          <Col sm={2}>
                              <div className='left-sidebar'>
                                  <Sidebar></Sidebar>
                              </div>
                          </Col>
                          <Col sm={10}>
                          <div className='upload'>
                                  <h1>Upload to server</h1>
                                  <hr></hr>
                                  <form onSubmit={handleSubmit} encType="multpart/form-data" method='post'>
                                      <label htmlFor="file" className='uploadLabel'>{!image ? <i className="fa-solid fa-upload"></i> : <img src={image.preview} alt="" className='singleFileImg' /> }</label>
                                      <input type='file' name='singleFile' onChange={handleFileChange} id="file"></input>
                                      <button type='submit' className='fileSubmitButton'>Upload</button>
                                  </form>
                                  {status && <h4 style={{textAlign:"center"}}>{status}</h4>}
                              </div>
                          </Col>
                      </Row>
                  </div>
               </>
}
export default Upload