import { createBrowserRouter } from "react-router";

import HomeLayout from "../layout/HomeLayout";
import HomeContent from "../pages/Home/HomeContent";
import Home from "../pages/Home/Home";
import Login from "../component/Login";
import About from "../pages/about/About";
import Career from "../pages/career/Career";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: HomeLayout,
        children:[
             {
        path:'/',
        Component:Home
        },
        {
    path:'/category/:id',
    loader:()=>fetch('/news.json').then(res=>res.json()),
    Component:HomeContent ,
   
      },
  ]
 
    },
   
 {
        path:'/login',
        Component:Login
      },
      {
        path:'/about',
        Component: About
      },
      {
        path:'/career',
        Component: Career
      }
])