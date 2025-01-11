import React from 'react';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Allprojects from './components/Allprojects';
import Routing from './Routing';
import ServicePage from './components/ServicePage';



function App() {
  const roting = createBrowserRouter(
    [
        {
            path: '/',
            element:<Routing/>
        },
        {
          path:'projects',
          element: <Allprojects/>
        }
        ,
        {
          path:'/service/:id',
          element: <ServicePage />
        }
    ]
)
  return (
    <RouterProvider router= {roting} />
  );
}

export default App;