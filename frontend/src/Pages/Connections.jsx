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
      
        <h1 className='md:text-2xl text-large text-center '>Connections</h1>
        {connections.map((connection)=>(<>
        <div className=' flex md:gap-3 gap-5  bg-base-300 w-2/3 rounded-lg md:w-1/3 mt-5  mx-auto '>
            <figure>
                <img className='md:w-32 w-16 rounded-full ' src={connection.from?.photo||connection.To?.photo} alt="" />
            </figure>
            <div className='flex flex-col md:gap-2'>
              <p className='md:text-base text-xs'>{`${connection.from?.firstname||connection.To?.firstname} ${connection.from?.lastname||connection.To?.lastname}`}</p>
              <p  className='md:text-base text-xs'>{connection.from?.age||connection.To?.age}</p>
              <p  className='md:text-base text-xs'>{connection.from?.about||connection.To?.about}</p>
              <p  className='md:text-base text-xs'>{connection.from?.skills||connection.To?.skills}</p>
            </div>
           
        </div>
      </>))}
       

    </div>
  )
}

export default Connections