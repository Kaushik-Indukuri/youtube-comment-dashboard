import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ScrollRestoration, Navigate } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Dashboard from './components/Dashboard.tsx'
import TablePage from './components/TablePage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
        <ScrollRestoration />
      </>

    ),
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/table',
        element: <TablePage />,
      },
      {
        path: '*',
        element: <Navigate to="/" />, // This will catch all undefined routes and redirect to the home page
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
