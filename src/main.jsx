import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/home/Home.jsx';
import SingleBlog from './Page/blog/SingleBlog.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:   <App />,
    children:[
      {
        path : "/",
        element: <Home></Home>
      },
      {
        path : "/blogs/:id",
        element: <SingleBlog></SingleBlog>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  
  </StrictMode>,
)
