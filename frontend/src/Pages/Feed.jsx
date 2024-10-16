import React from 'react'
import useFeed from '../hooks/useFeed'
import ProfileCard from '../Components/ProfileCard'
function Feed() {

const {feed,loading,error}=useFeed()
console.log(feed)

  return (
    <div className='flex justify-center'>
       <ProfileCard data={feed} />
    </div>
  
  )
}

export default Feed