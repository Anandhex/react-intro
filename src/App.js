import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Speaker from './pages/Speaker';

import Start from './pages/Start';
import WhatIsWeb from './pages/WhatIsWeb';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Start />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
