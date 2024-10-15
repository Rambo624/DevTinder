import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import axiosInstance from '../utils/axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice.js'
function Login() {
  const dispatch=useDispatch()
const navigate=useNavigate()
const email=useRef()
const password=useRef()

async function handleLogin(){
  try {
    const data={
      email:email.current.value,
      password:password.current.value
    }
  const response=await axiosInstance({method:"POST",url:"/login",data:data})
  console.log(response.data.data)
  if(response.status===200){
dispatch(addUser(response.data.data))
    navigate("/")
  }
  } catch (error) {
    console.log(error)
  }
 

}

  return (
    <div className='flex justify-center'>
        <div className="card bg-base-300 w-96 shadow-xl mt-9">
    
    <div className="card-body">
      <h2 className="card-title">Login</h2>
    
<label className="input input-bordered flex items-center gap-2 mb-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input ref={email} type="text" className="grow " placeholder="Email" />
</label>

<label className="input input-bordered flex items-center gap-2 mb-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input ref={password} type="password" className="grow" placeholder="password" />
</label>
     
      <div className="card-actions justify-center ">
        <button onClick={handleLogin} className="btn grow btn-primary">Sign In</button>
      
      </div>
      <Link to={"/signup"}> <p className='flex ml-7'>Dont have an Account? <p className='text-blue-400'>Sign Up</p></p></Link>
    </div>
  </div>
    </div>
  
  )
}

export default Login