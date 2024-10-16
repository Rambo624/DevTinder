import React, { useState } from 'react'
import EditProfile from '../Components/EditProfile'
import ProfileCard from '../Components/ProfileCard'
import useProfile from '../hooks/useProfile'
function Profile() {
    const {user}=useProfile()
 
    console.log(user)

   
  return (
    <div className='flex justify-center gap-5'>
        <EditProfile/>
        <ProfileCard data={user}/>
    </div>
  )
}

export default Profile