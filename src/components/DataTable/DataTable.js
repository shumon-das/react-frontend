import axios from 'axios';
import { Row, Col} from 'react-bootstrap'
import { MDBDataTable } from 'mdbreact';
import {useState, useEffect} from 'react'
import Sidebar from '../Sidebar/Sidebar';

function DATATable(){

        const [content, setContent] = useState([]);

        useEffect(()=>{
            const fetchContents = async () => {
                  const {data} = await axios.get('/api/datatabledata')
                       setContent(data)
                  }
                  fetchContents()
        }, [])

        const data = {
                columns: [
                        {
                          label: 'Name',
                          field: 'name',
                          sort: 'asc',
                          width: 150
                        },
                        {
                          label: 'Position',
                          field: 'position',
                          sort: 'asc',
                          width: 270
                        },
                        {
                          label: 'Office',
                          field: 'office',
                          sort: 'asc',
                          width: 200
                        },
                        {
                          label: 'Age',
                          field: 'age',
                          sort: 'asc',
                          width: 100
                        },
                        {
                          label: 'Start date',
                          field: 'date',
                          sort: 'asc',
                          width: 150
                        },
                        {
                          label: 'Salary',
                          field: 'salary',
                          sort: 'asc',
                          width: 100
                        }
                ],
                rows:content
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
                              <MDBDataTable striped bordered hover data={data} />
                          </Col>
                      </Row>
                  </div>
               </>
        
}
export default DATATable