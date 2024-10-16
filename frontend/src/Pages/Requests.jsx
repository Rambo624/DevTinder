import React from 'react'
import useRequests from '../hooks/useRequests'
import axiosInstance from '../utils/axios'
function Requests() {
    const {requests}=useRequests()
console.log(requests)


async function handleReviewRequest(status,id){
  try {
    const response= await axiosInstance({method:"POST",url:`/request/send/review/${status}/${id}`})
    if(response.status===200){

    }
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div className='   my-5'>
      
        <h1 className='text-2xl text-center '>Requests</h1>
        {requests.map((request)=>(<>
        <div className=' flex gap-3 justify-between bg-base-300 w-1/3 mt-5 items-center mx-auto '>
            <figure>
                <img className='w-32' src={request.from.photo} alt="" />
            </figure>
            <div className='flex '>
              <p>{`${request.from.firstname} ${request.from.lastname}`}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <button onClick={()=>handleReviewRequest("accepted",request.id)} className='btn btn-primary'>Accept</button>
              <button onClick={()=>handleReviewRequest("rejected",request.id)} className='btn btn-secondary'>Reject</button>
            </div>
        </div>
      </>))}
       

    </div>
  )
}

export default Requests