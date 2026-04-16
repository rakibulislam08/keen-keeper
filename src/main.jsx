import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import CardDetails from './pages/CardDetails/CardDetails'
import Stats from './pages/Stats/Stats'
import TimeLine from './pages/TimeLine/TimeLine'


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
        path: '/stats',
        Component: Stats
      },
      {
        path: '/cardDetails/:friendId',
        Component: CardDetails,
        loader: () => fetch("/friends.json")
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
