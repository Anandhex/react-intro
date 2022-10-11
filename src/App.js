import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Speaker from './pages/Speaker';
import Root from './pages/Root';
import Start from './pages/Start';
import WhatIsWeb from './pages/WhatIsWeb';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Start />, index: true },
      {
        path: '/speaker',
        element: <Speaker />,
      },
      {
        path: '/web',
        element: <WhatIsWeb />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
