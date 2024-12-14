import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Recipe from './components/Recipe/Recipe';
import Details from './components/Items Details/Details';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    children : [
      {
      path : '/items',
      loader : () => fetch('https://www.themealdb.com/api/json/v1/1/random.php/52808'),
      element : <Recipe></Recipe>
    },
    {
      path : '/items/:mealId',
      loader : ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/random.php/${params.mealId}`),
      element : <Details></Details>
    }
  ]
  }])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>
)
