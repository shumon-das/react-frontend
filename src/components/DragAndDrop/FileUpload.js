import { useState } from 'react'

function Upload(){
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const handleSubmit = async (e) => {
      e.preventDefault()
      let formData = new FormData()
      formData.append('file', image.data)
      console.log(formData)
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

    return (
        <div className='upload'>
            <h1>Upload to server</h1>
            {image.preview && <img src={image.preview} alt="" width='100' height='100' />}
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <input type='file' name='file' onChange={handleFileChange}></input>
                <button type='submit'>Submit</button>
            </form>
            {status && <h4>{status}</h4>}
        </div>
    )
}
export default Upload