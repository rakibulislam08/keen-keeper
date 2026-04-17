import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import CardDetails from './pages/CardDetails/CardDetails'
import TimeLine from './pages/TimeLine/TimeLine'
import Stats from './pages/Stats/Stats'
import { ToastContainer } from 'react-toastify'
import Error from './pages/Error/Error'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {
        index: true,
        Component: HomePage
      },
      {
        path: '/timeline',
        Component: TimeLine
      },
      {
        path: '/stats',
        Component: Stats
      },
      {
        path: '/cardDetails/:friendId',
        Component: CardDetails,
        loader: () => fetch("/friends.json")
      }
    ],
    errorElement:<Error/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer/>
  </StrictMode>,
)
