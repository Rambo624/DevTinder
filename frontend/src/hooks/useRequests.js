import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';



const useRequests= ()=>{
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    async function getRequests() {
        try {
            const response = await axiosInstance({
                method: 'GET',
                url: '/user/requests',
              });
           
          
              setRequests(response.data.data);
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
       
      }

      useEffect(()=>{
        getRequests()
              },[])
              return {requests,loading,error}
        
}

export default useRequests