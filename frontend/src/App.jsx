import React from 'react'
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { router } from './Routes/Routes'
import appStore from './utils/appStore'
function App() {
  return (
    <div>
      <Provider store={appStore}>  <RouterProvider router={router}></RouterProvider></Provider>
      
    </div>
  )
}

export default App