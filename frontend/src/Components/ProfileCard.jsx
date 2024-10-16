import React from 'react'
import axiosInstance from '../utils/axios'
import { useDispatch } from 'react-redux'
import { removeUserFromFeed } from '../utils/feedSlice'
function ProfileCard({data}) {
const dispatch=useDispatch()

  async function handleReview(status,id){
    console.log(status)
    console.log(id)
const response=await axiosInstance({method:"POST",url:`/request/send/${status}/${id}`})
if(response.status===200){
  dispatch(removeUserFromFeed(id))
}
  }
   console.log(data)
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-10 my-10">
    <figure>
      <img
        src={data[0]?.photo|| data.photo}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{data[0]?.firstname || data.firstname+" "}<h2>{data[0]?.lastname|| data.lastname}</h2></h2>
      <p>{data[0]?.about|| data.about}</p>
      <div className="card-actions justify-center">
        <button onClick={()=>handleReview("Interested",data[0]._id)}  className="btn btn-primary">Interested</button>
        <button onClick={()=>handleReview("Ignored",data[0]._id)} className="btn btn-secondary">Ignore</button>
      </div>
    </div>
  </div>
  )
}

export default ProfileCard