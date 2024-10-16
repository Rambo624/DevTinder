import React from 'react'
import useConnections from '../hooks/useConnections'
import axiosInstance from '../utils/axios'
function Connections() {
    const {connections}=useConnections()
//console.log(requests)


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
      
        <h1 className='text-2xl text-center '>Connections</h1>
        {connections.map((connection)=>(<>
        <div className=' flex gap-3  bg-base-300 w-1/3 mt-5  mx-auto '>
            <figure>
                <img className='w-32' src={connection.from?.photo||connection.To?.photo} alt="" />
            </figure>
            <div className='flex flex-col gap-2'>
              <p>{`${connection.from?.firstname||connection.To?.firstname} ${connection.from?.lastname||connection.To?.lastname}`}</p>
              <p>{connection.from?.age||connection.To?.age}</p>
              <p>{connection.from?.about||connection.To?.about}</p>
              <p>{connection.from?.skills||connection.To?.skills}</p>
            </div>
           
        </div>
      </>))}
       

    </div>
  )
}

export default Connections