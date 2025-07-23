import React, { Children } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ErrorPage from '././components/ErrorPage.jsx'
import ResturantContainer from './components/ResturantContainer.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Menu from './components/Menu.jsx'
import Corporate from './components/Corporate.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element:<ResturantContainer />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'restaurant/:id',
        element: <Menu />
      },
      {
        path:'corporate',
        element: <Corporate/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
