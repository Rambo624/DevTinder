import React from 'react'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import RootLayOut from '../Layout/RootLayOut';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Home from '../Pages/Home';



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
                element:<Home/>
            },
        ]
      },

   
])