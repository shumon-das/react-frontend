import { useState } from 'react'
import { Row, Col} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'

const RestrictedFileUpload = () => {
    const [images, setImages] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault()
      let formData = new FormData()
      for(let i = 0; i < images.length; i++){
        formData.append('documents', images[i])
      }

      const response = await fetch('http://localhost:5000/api/multiple/docs', {
        method: 'POST',
        body: formData,
      })
      if (response) {
          setStatus(response.statusText)
        }

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
                                      <label htmlFor="file" className='uploadLabel'>{!images ? <i className="fa-solid fa-upload"></i> : <img src={images.preview} alt="" className='singleFileImg' /> }</label>
                                      <input type='file' name='multipleFile' multiple  onChange={(e) => setImages(e.target.files)} ></input>
                                      <button type='submit' className='fileSubmitButton'>Upload</button>
                                  </form>
                                  {status && <h4 style={{textAlign:"center"}}>{status}</h4>}
                              </div>
                          </Col>
                      </Row>
                  </div>
               </>
}
export default RestrictedFileUpload