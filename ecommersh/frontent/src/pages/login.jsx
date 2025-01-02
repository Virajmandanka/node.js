import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [state,setState]=useState({

    
    email:"",
    password:""
   


  })

  const handalchenge=(e)=>{

    const {name,value}=e.target

    setState({...state,[name]:value})

  }

  const navigat=useNavigate()

  const handalsubmit=(e)=>{

    e.preventDefault();

    fetch(`http://localhost:8080/user/login`,{

      method:"POST",
      headers:{
       "Content-Type":"application/json",
      },
      body:JSON.stringify(state)


    })

    .then((res)=>res.json())
    .then((res)=>{

        localStorage.setItem("token",res.token)

        console.log(res.token)
     
      if(res.me)
      {
        alert("user not register")
      }else if(res.mess)
      {
        alert("password incorrect")
      }else if(res.messege)
        {
            alert("login successfully")

            const tokenPayload = JSON.parse(atob(res.token.split('.')[1]));

             if(tokenPayload.userRole=="admin")
                {   
                  
                    navigat("/admin")
                }else if(tokenPayload.userRole=="user")
                {
                    navigat("/user")
                }

        }
    })


  

  }

  const hendaluse=()=>{
    navigat('/')
  }

 

  return (
    <div className="signup-container">


     <form className="signup-form" action="" onSubmit={handalsubmit} method='post'>
      <h2>Login</h2>

      <input className="form-input" type="text" placeholder='Enter you email' name='email' value={state.email} onChange={handalchenge} />
      <input className="form-input" type="text" placeholder='Enter you password' name='password' value={state.password} onChange={handalchenge} />
      
      <button className="form-button" type='submit'>Sign in</button>
      <button className="form-button1" onClick={hendaluse}>Sign up</button>
     </form>

    </div>
  )
}

export default Login