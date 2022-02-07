import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AddSearchPage from '../Component/Pages/AddSearchPage';
import AdminPage from '../Component/Pages/AdminPage';
import Login from '../Component/Pages/Login';
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
       </Routes>
    </BrowserRouter>
  </div>
  )
}