import React from 'react'
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { router } from './Routes/Routes'
import appStore from './utils/appStore'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Provider store={appStore}>  <RouterProvider router={router}></RouterProvider></Provider>
      <ToastContainer/>
    </div>
  )
}

export default App