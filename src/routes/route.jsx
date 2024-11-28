import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AddedTea from "../pages/AddedTea";
// import Tea from "../pages/Tea";
import Teas from "../pages/Teas";
import UpdateTea from "../components/UpdateTea";


  
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          // loader:()=>fetch('http://localhost:5000/tea')
        },
        {
          path:'/tea',
          element:<AddedTea></AddedTea>,
        },
        // {
        //   path:'/allTea',
        //   element:<Teas></Teas>,
        //   loader:()=>fetch('http://localhost:5000/tea')
        // },
        // {
        //   path:'/UpdateTea/:id',
        //   element:<UpdateTea></UpdateTea>,
        //   loader:({params})=>fetch(`http://localhost:5000/tea/${params.id}`)

        // },
      ]
    },
  ]);


  export default router