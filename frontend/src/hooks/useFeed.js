import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';
import { useDispatch } from 'react-redux';
import { addfeed } from '../utils/feedSlice';


const useFeed= ()=>{
    const dispatch=useDispatch()
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    async function getFeed() {
        try {
            const response = await axiosInstance({
                method: 'GET',
                url: '/user/feed?page=1&limit=5',
              });
           
          
              setFeed(response.data.data);
              dispatch(addfeed(response.data.data))
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
       
      }

      useEffect(()=>{
        getFeed()
              },[])
              return {feed,loading,error}
        
}

export default useFeed