import React from 'react'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import RootLayOut from '../Layout/RootLayOut';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Profile from '../Pages/Profile';
import Feed from '../Pages/Feed';



export const router= createBrowserRouter([
    {
        path:"/",
        element:<RootLayOut/>,
        children:[
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"signup",
                element:<Signup/>
            },
            {
                path:"/",
                element:<Feed/>
            },
            {
                path:"/profile",
                element:<Profile/>
            },
        ]
      },

   
])