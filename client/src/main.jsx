import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { router } from './router/router';

import "bootswatch/dist/lumen/bootstrap.min.css";
import './App.css';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)