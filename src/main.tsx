import { StrictMode } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.tsx'
import AccessibleComponent from './pages/AccessibleComponent.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
      path: '/AccessibleComponent/',
      element: <App/>,
      // errorElement: <NotFound/>,
      children: [
        {
          path: '/AccessibleComponent/',
          element: <AccessibleComponent/>
        },
      ]
  }
])

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
