import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import axiosInstance from '../utils/axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useSelector } from 'react-redux'

function RootLayOut() {
const navigate=useNavigate()
const dispatch=useDispatch()
const user=useSelector((store)=>store.user)
async function fetchUser(){
  try {
    if(user)return
    const response= await axiosInstance({method:"GET",url:"/profile/view"})
    if(response.status===200){
//console.log(response.data)
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
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
)

}

export default RootLayOut