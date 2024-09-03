import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import Job from './pages/Job'
import Job_listing from './pages/Job_listing'
import My_Jobs from './pages/My_Jobs'
import Post_job from './pages/Post_job'
import Save_job from './pages/Save_job'
import './App.css'
import { ThemeProvider } from './components/ui/theme'
import ProtectedRoute from './components/protected-route'
const router=createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/Onboarding',
        element:<ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>
      },
      {
        path:'/job/:id',
        element:<ProtectedRoute>
          <Job />
        </ProtectedRoute>
      },
      {
        path:'/Job_list',
        element:<ProtectedRoute>
          <Job_listing />
        </ProtectedRoute>
      },
      {
        path:'/My_Jobs',
        element:<ProtectedRoute>
        <My_Jobs />

        </ProtectedRoute>
      },
      {
        path:'/Post_job',
        element:<ProtectedRoute>
          <Post_job/>
        </ProtectedRoute>
      },
      {
        path:'/Save_job',
        element:<ProtectedRoute>
          <Save_job />
        </ProtectedRoute>
      },
    ]
  }
])


function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {<RouterProvider router={router}/>}
    </ThemeProvider>
    
    </>
  )
}

export default App
