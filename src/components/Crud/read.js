import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
// import SidebarLeft from '../Sidebar/SidebarLeft'
import EditModal from '../Library/Modal'

// import data from './data'
const url = 'http://localhost:5000/api/getusers'

const Read = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
           const {data} = await axios.get(url)
           setData(data)
        }
        fetchProducts()
     }, [])

    const deleteUser = (id) => {
        axios.delete('http://localhost:5000/api/deleteuser/'+id).then(response => {
            console.log(response.data);
        })
    }

    return <>
        <div className='row'>
            <div className='col-md-2'>
                {/* <SidebarLeft/> */}
            </div>
            <div className='col-md-9'>
                <table className='table'>
                    <thead key="thead">
                        <tr key="10">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Choice</th>
                            <th>Actions</th>
                        </tr> 
                    </thead>
                    <tbody key="tbody">
                        {
                            data.map((user,index) => {
                                return (<tr key={index} className={index}>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address}</td>
                                            <td>{user.choice}</td>
                                            <td>
                                                <EditModal 
                                                    firstName={user.firstName} 
                                                    lastName={user.lastName} 
                                                    userName={user.userName} 
                                                    gender={user.gender} 
                                                    email={user.email} 
                                                    address={user.address} 
                                                    choice={user.choice} 
                                                 />
                                                <button type='button' onClick={() => deleteUser(user.id)} className='btn btn-danger btn-sm'><i className="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>)
                            })
                        }    
                    </tbody>
                </table>
            </div>
        </div>
    </>
}
export default Read
