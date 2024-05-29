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
import Calligraph from './routes/Calligraph';
import Icj from './routes/icj';
import Bos from './routes/Bos';

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
  },{
    path: '/calligraphy',
   element: <Calligraph/>
  },{
    path: '/icj',
   element: <Icj/>
  },{
    path: '/bos',
   element: <Bos/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

