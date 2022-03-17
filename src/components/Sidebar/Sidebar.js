import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const [crudShowHide, setCrudShowHide] = useState('hide');
    const [crud2ShowHide, setCrud2ShowHide] = useState('hide');
    const [uploadShowHide, setUploadShowHide] = useState('hide');
  return <>
            <div className='sidebar'>
                  <div className="sideber-menu"></div>
                  <ul>
                      <li><Link to="/products"><i className="fas fa-home"></i> Dashboard</Link></li>
                      <li style={{paddingLeft:"20px"}} onClick={() => crudShowHide === 'hide' ? setCrudShowHide('show') : setCrudShowHide('hide')}>
                          Crud 
                          <i className="fa fa-caret-down"></i>
                          <ul className={crudShowHide}>
                              <li><Link to="/create">Create</Link></li>
                              <li><Link to="/read">Read</Link></li>
                              <li><Link to="/update">Update</Link></li>
                              <li><Link to="/delete">Delete</Link></li>
                          </ul>
                          
                      </li>                      
                      <li><Link to="/users"><i className="fas fa-users"></i> Users</Link></li>
                      <li style={{paddingLeft:"20px"}} onClick={() => crud2ShowHide === 'hide' ? setCrud2ShowHide('show') : setCrud2ShowHide('hide')}>
                          Crud 
                          <i className="fa fa-caret-down"></i>
                          <ul className={crud2ShowHide}>
                              <li><Link to="/create">Create</Link></li>
                              <li><Link to="/read">Read</Link></li>
                              <li><Link to="/update">Update</Link></li>
                              <li><Link to="/delete">Delete</Link></li>
                          </ul>
                      </li>
                      <li><Link to="/datatable"><i className="fas fa-table"></i> Datatable</Link></li>
                      <li><Link to="/carousel"><i className="fas fa-history"></i>Carousel</Link></li>
                      <li style={{paddingLeft:"20px"}} onClick={() => uploadShowHide === 'hide' ? setUploadShowHide('show') : setUploadShowHide('hide')}>
                          File Upload 
                          <i className="fa fa-caret-down"></i>
                          <ul className={uploadShowHide}>
                              <li><Link to="/singlefile">Single File</Link></li>
                              <li><Link to="/multiplefile">Multiple File</Link></li>
                              <li><Link to="/dropzone">Dropzone</Link></li>
                              <li><Link to="/docsfile">Documents</Link></li>
                          </ul>
                      </li>
                  </ul>
            </div>
          </>
}

export default Sidebar;