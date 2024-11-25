import React from 'react'
import Signup from '../componet/signup'
import Login from '../componet/login'
import {Routes,Route} from "react-router-dom"

function Ro() {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>

    


    </div>
  )
}

export default Ro