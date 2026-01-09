import React from 'react'
import HomePage from './pages/public/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostsPages from './pages/public/PostsPages'
import PostDtailsPage from './pages/public/PostDtailsPage'
import Puplic from './Layouts/Puplic'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Puplic />,
      children: [
        {
          index:true,
          element:<HomePage/>
        },
        {
          path: "/PostsPages",
          element: <PostsPages />,
        },
        {
          path: "/PostsDetailsPage",
          element: <PostDtailsPage />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
