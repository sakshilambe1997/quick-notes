import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from "./views/Home/Home"
import Show from "./views/Show/Show"
import Add from "./views/Add/Add"
import toast,{Toaster} from "react-hot-toast"
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
 
  {
    path:"/add",
    element:<Add/>
  },
  {
    path:"/show",
    element:<Show/>
  },

  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },

  {
    path:"*",
    element:<h1>404 Not Found</h1>
  },
])

root.render(
  <div>
    <Toaster/>
<RouterProvider router={router}/>
</div>
);

