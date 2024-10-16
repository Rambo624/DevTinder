import React from 'react'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import RootLayOut from '../Layout/RootLayOut';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Profile from '../Pages/Profile';
import Feed from '../Pages/Feed';
import Requests from '../Pages/Requests';
import Connections from '../Pages/Connections';



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
            {
                path:"/requests",
                element:<Requests/>
            },
            {
                path:"/connections",
                element:<Connections/>
            },
        ]
      },

   
])