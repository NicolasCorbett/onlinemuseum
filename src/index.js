import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Hazes from './routes/Hazes';
import Context from './routes/Context';
import Cultuur from './routes/Cultuur';
import Jan from './routes/Jan';
import Drugs from './routes/Drugs';
import Night from './routes/Night';
import Original from './routes/Original';

const router = createBrowserRouter([
  {path: '/', 
   element: <App /> 
  },{
     path: '/hazes',
    element: <Hazes/>
   }
   ,{
    path: '/context',
   element: <Context/>
  },{
    path: '/cultuur',
   element: <Cultuur/>
  },{
    path: '/jan',
   element: <Jan/>
  },{
    path: '/night',
   element: <Night/>
  },{
    path: '/drugs',
   element: <Drugs/>
  },{
    path: '/original',
   element: <Original/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

