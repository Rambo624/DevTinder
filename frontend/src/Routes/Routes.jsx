import React from 'react'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import RootLayOut from '../Layout/RootLayOut';
import Login from '../Pages/Login';



export const router= createBrowserRouter([
    {
        path:"/",
        element:<RootLayOut/>,
        children:[
            {
                path:"login",
                element:<Login/>
            }
        ]
      
           
        
    }
])