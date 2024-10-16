import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';
import { useDispatch } from 'react-redux';
import { addfeed } from '../utils/feedSlice';


const useConnections= ()=>{
    const [connections, setConnections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
const dispatch=useDispatch()


    async function getConnections() {
        try {
            const response = await axiosInstance({
                method: 'GET',
                url: '/user/connections',
              });
           
          
              setConnections(response.data.data);
dispatch(addfeed(response.data.data))
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
       
      }

      useEffect(()=>{
        getConnections()
              },[])
              return {connections,loading,error}
        
}

export default useConnections