import React from 'react'
import Browse from './Browse'
import Login from './Login'

import { useDispatch } from 'react-redux'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'


const Body = () => {
    const dispatch = useDispatch();
    

    const appRouter= createBrowserRouter([
        {
            path: "/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element: <Browse />,
        },
    ]);

   
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body