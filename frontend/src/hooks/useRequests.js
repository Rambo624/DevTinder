import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';
import { useDispatch } from 'react-redux';
import { addRequest } from '../utils/connectionSlice';

const useRequests= ()=>{
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
const dispatch=useDispatch()


    async function getRequests() {
        try {
            const response = await axiosInstance({
                method: 'GET',
                url: '/user/requests',
              });
           
          
              setRequests(response.data.data);
              dispatch(addRequest(response.data.data))
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