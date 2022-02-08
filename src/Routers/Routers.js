import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AddSearchPage from '../Component/Pages/AddSearchPage';
import AdminPage from '../Component/Pages/AdminPage';
import Login from '../Component/Pages/Login';
import SchoolListing from '../Component/Pages/SchoolListing';
import Welcome from '../Component/Pages/Welcome';




export default function Routers() {
  return(
   <div>
    <BrowserRouter>
      <Routes>
           <Route  path="/" element={<Welcome/>}/>
           <Route path="/addsearchform" element={<AddSearchPage/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/admin" element={<AdminPage/>}/>
           <Route path="/schoollisting" element={<SchoolListing/>}/>
       </Routes>
    </BrowserRouter>
  </div>
  )
}