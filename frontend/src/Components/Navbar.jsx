import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosInstance from '../utils/axios'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice'
import { Link } from 'react-router-dom'
import { addUser } from '../utils/userSlice'
import {FaBars} from "react-icons/fa"
function Navbar() {
    const user=useSelector((store)=>store.user)
    console.log(user)
  //  console.log(user,"user")
    const navigate=useNavigate()
    const dispatch=useDispatch()
async function handleLogout(){
    try {
       const response= await axiosInstance({method:"POST",url:"/logout"}) 
       if(response.status===200){
        navigate("/login")
dispatch(removeUser())
       }
    } catch (error) {
        console.log(error)
    }
}

function handleProfile(){
    navigate("/profile")
}



    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                   <Link to={"/"} ><h1 className="btn btn-ghost md:text-xl text-small">DevTinder</h1></Link> 
                </div>
                <div className="flex-none gap-2">
                    {user && <>
                    <p className='text-base md:block hidden'>{`welcome, ${user?.firstname}`}</p>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input md:block hidden input-bordered w-24 md:w-auto" />
                    </div>
                
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                             <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user?.photo}/>
                            </div>
                           
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <h1 onClick={handleProfile} className="justify-between  hover:bg-slate-900">Profile</h1> 
                                    
                               
                                
                            </li>
                          <Link to={"/connections"}><li className='ml-3 hover:bg-slate-900'>Your Connections</li></Link>  
                           <Link to={"/requests"}> <li className='ml-3  hover:bg-slate-900'>Requests</li></Link>
                            <li className=' cursor-pointer ml-3  hover:bg-slate-900' onClick={handleLogout}>Logout</li>
                        </ul>
                    </div></>}
                </div>
            </div>
        </div>
    )
}

export default Navbar