import React from 'react'
import useRequests from '../hooks/useRequests'
import axiosInstance from '../utils/axios'
import { useDispatch, useSelector } from 'react-redux'
import { removeRequest } from '../utils/connectionSlice'
function Requests() {
    const {requests}=useRequests()
//console.log(requests)
const Requests=useSelector((store)=>store.request)
console.log(Requests,"Requests")
const dispatch=useDispatch()


async function handleReviewRequest(status,id){
  try {
    console.log(id)
    const response= await axiosInstance({method:"POST",url:`/request/send/review/${status}/${id}`})
    if(response.status===200){
dispatch(removeRequest(id))
    }
  } catch (error) {
    console.log(error)
  }
}




if(!Requests)return <h1>No New Requests</h1>
if(!Requests.length) return <h1>No Requests</h1>
  return (
    <div className='   my-5'>
      
        <h1 className='text-2xl text-center '>Requests</h1>
        {Requests.map((request)=>(<>
        <div className=' flex gap-3 justify-between bg-base-300 w-2/3 p-3 rounded-lg md:w-1/3 mt-5 items-center mx-auto '>
            <figure>
                <img className='md:w-32 w-16 rounded-full' src={request.from.photo} alt="" />
            </figure>
            <div className='flex '>
              <p className='md:text-base text-xs'>{`${request.from.firstname} ${request.from.lastname}`}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <button onClick={()=>handleReviewRequest("accepted",request.id)} className='md:btn bg-primary text-black rounded-lg p-2 md:text-base text-xs md:btn-primary'>Accept</button>
              <button onClick={()=>handleReviewRequest("rejected",request.id)} className='md:btn bg-secondary text-black rounded-lg p-2 md:text-base text-xs md:btn-primary'>Reject</button>
            </div>
        </div>
      </>))}
       

    </div>
  )
}

export default Requests