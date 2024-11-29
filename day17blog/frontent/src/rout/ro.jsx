import React from 'react'
import Signup from '../componet/signup'
import Login from '../componet/login'
import Addblog from '../componet/addblog'
import Bloglist from '../componet/bloglist'
import Getmain from '../componet/getmain'
import Singalblog from '../componet/singalblog'
import {Routes,Route} from "react-router-dom"

function Ro() {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/addblog' element={<Addblog/>}></Route>
            <Route path='/bloglist' element={<Bloglist/>}></Route>
            <Route path='/getmain' element={<Getmain/>}></Route>
            {/* <Route path='/singalblog' element={<Singalblog/>}></Route> */}
            <Route path="/blog/:id" element={<Singalblog/>} ></Route>
        </Routes>

    


    </div>
  )
}

export default Ro