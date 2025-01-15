import React from 'react';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Allprojects from './components/Allprojects';
import Routing from './Routing';
import ServicePage from './components/ServicePage';
import PrivacyPolicy from './components/PrivacyPolicy';



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
        },
    
        {
          path:'/Privacy-Policy',
          element: <PrivacyPolicy />
        }
    ]
)
  return (
    <RouterProvider router= {roting} />
  );
}

export default App;