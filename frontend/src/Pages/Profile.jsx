import React, { useState } from 'react'
import EditProfile from '../Components/EditProfile'
import ProfileCard from '../Components/ProfileCard'
import useProfile from '../hooks/useProfile'
function Profile() {
    const {user}=useProfile()
 
    //console.log(user)

   
  return (
    <div className='flex items-center  justify-center gap-5'>
      <div>
      <EditProfile/>
      </div>
    <div className='md:block hidden'>
    <ProfileCard data={user}/>
      </div>   
       
    </div>
  )
}

export default Profile