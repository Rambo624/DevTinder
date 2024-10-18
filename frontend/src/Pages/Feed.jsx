import React from 'react'
import useFeed from '../hooks/useFeed'
import ProfileCard from '../Components/ProfileCard'
import Pagination from '../Components/Pagination'

import { useSelector } from 'react-redux'
function Feed() {

const {feed,loading,error}=useFeed()
const Feed=useSelector((store=>store.feed))
//console.log(feed,"feed")
//console.log(feed)

if(!Feed)return <h1 className='flex justify-center text-2xl my-10'>No new Users</h1>
if(!Feed.length) return <h1 className='flex justify-center text-2xl my-10'>No new Users</h1>
  return (
    <div className=''>
 <div className='flex justify-center'>
       <ProfileCard data={Feed} />
      
    </div>
    <div className='flex justify-center mb-5'>  <Pagination/></div>
     
    </div>
  
  )
}

export default Feed