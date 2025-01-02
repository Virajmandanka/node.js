import React, { useState } from 'react'

function Si() {

  const [state,setState]=useState({

    username:"",
    email:"",
    password:"",
    role:"",
    secretKey:""


  })

  const handalchenge=(e)=>{

    const {name,value}=e.target

    setState({...state,[name]:value})

  }

  const handalsubmit=(e)=>{

    e.preventDefault();

    fetch(`http://localhost:8080/user/register`,{

      method:"POST",
      headers:{
       "Content-Type":"application/json",
      },
      body:JSON.stringify(state)


    })

    .then((res)=>res.json())
    .then((res)=>{
     
      if(res.messege)
      {
        alert("Admin Authorization Needed ")
      }else if(res.meg)
      {
        alert("user register successfully")
      }
    })


  

  }

 

  return (
    <div>


     <form action="" onSubmit={handalsubmit} method='post'>

      <input type="text" placeholder='Enter you username' name='username' value={state.username} onChange={handalchenge} />
      <input type="text" placeholder='Enter you email' name='email' value={state.email} onChange={handalchenge} />
      <input type="text" placeholder='Enter you password' name='password' value={state.password} onChange={handalchenge} />
      <select name="role"  value={state.role} onChange={handalchenge}>
        <option value="">select</option>
        <option value="admin">admin</option>
        <option value="user">user</option>
      </select>
      <input type="text" placeholder='Enter you secretKey' name='secretKey' value={state.secretKey} onChange={handalchenge} />
      <button type='submit'>submit</button>
     </form>

    </div>
  )
}

export default Si