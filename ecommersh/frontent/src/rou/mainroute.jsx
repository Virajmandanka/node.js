import React from 'react'
import Signup from '../pages/signup'
import Login from '../pages/login'
import Admin from '../pages/admin'
import User from '../pages/user'
import Product from '../pages/product'
import Dashbord from '../pages/dashbord'
import Navbar from '../componet/navbar'
import Sidnav from '../componet/sidnav'
import Upadet from '../pages/upadet'
import Singalproductpage from '../pages/singalproductpage'

import {Routes,Route} from "react-router-dom"

function Mainroute() {
  return (
    
    <div>

        <Routes>
          
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/navbar' element={<Navbar/>}></Route>
            <Route path='/sidnav' element={<Sidnav/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/user' element={<User/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/dashbord' element={<Dashbord/>}></Route>
            <Route path='/upadet/:id' element={<Upadet/>}></Route>
            
            <Route path='/singal/:id' element={<Singalproductpage/>}></Route>
            <Route path='/singalproductpage' element={<Singalproductpage/>}></Route>
        </Routes>

        


    </div>
  )
}

export default Mainroute