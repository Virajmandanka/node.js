import React, { useState } from 'react'

function Login() {

   const [state,setState]=useState({
     
    email:"",
    password:""
   })

   const handalchenge=(e)=>{

    const {name,value}=e.target

    setState({...state,[name]:value})


   }

   const handalsbmit=(e)=>{
    e.preventDefault()

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
        if(res.err)
        {
            alert("email not register")
        }
        else if(res.error)
        {
            alert("password is incorrect")
        }
        else if(res.messege)
            {
                alert("user login successefully")
            }
    })

   }



    
  return (
    <div>

        <form action="" onSubmit={handalsbmit} method='post'>

   
        <input type="text" placeholder='Enter you email' name='email' value={state.email} onChange={handalchenge}  />
        <input type="text" placeholder='Enter you password' name='password' value={state.password} onChange={handalchenge}  />
        <button type="submit">login</button>

        </form>
       



    </div>
  )
}

export default Login