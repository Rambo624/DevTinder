import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';



const useProfile= ()=>{
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    async function getUser() {
        try {
            const response = await axiosInstance({
                method: 'GET',
                url: '/profile/view',
              });
           
          
              setUser(response.data.data);
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
       
      }

      useEffect(()=>{
        getUser()
              },[])
              return {user,loading,error}
        
}

export default useProfile