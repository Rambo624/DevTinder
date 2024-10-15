import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import axiosInstance from '../utils/axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

function RootLayOut() {
const navigate=useNavigate()
const dispatch=useDispatch()
async function fetchUser(){
  try {
    const response= await axiosInstance({method:"GET",url:"/profile/view"})
    if(response.status===200){
console.log(response.data)
dispatch(addUser(response.data))
    } 
  } catch(error) {
    if(error.status===401){
      navigate("/login")
      console.log("Login user")
    }
    
  }

}

useEffect(()=>{
  
    fetchUser()
  

},[])

  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayOut