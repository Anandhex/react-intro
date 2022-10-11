import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Speaker from './pages/Speaker';
import Root from './pages/Root';
import Start from './pages/Start';
import WhatIsWeb from './pages/WhatIsWeb';
import JourneyOfWeb from './pages/JourneyOfWeb';
import InitialWeb from './pages/InitialWeb';
import IntermediateWeb from './pages/IntermediateWeb';
import ModernWeb from './pages/ModernWeb';
import ComparisonWeb from './pages/ComparisonWeb';
import TacklesModernWeb from './pages/TacklesModernWeb';
import TimeLine from './pages/TimeLine';
import TopTwoFrameWorks from './pages/TopTwoFrameWorks';
import ReactDeepDive from './pages/ReactDeepDive';
import ReactInGeneralWithCode from './pages/ReactInGeneralWithCode';
import QA from './pages/QA';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Start />, index: true },
      { path: '/speaker', element: <Speaker /> },
      { path: '/web', element: <WhatIsWeb /> },
      { path: '/journeyOfWeb', element: <JourneyOfWeb /> },
      { path: '/initialWeb', element: <InitialWeb /> },
      { path: '/intermediateWeb', element: <IntermediateWeb /> },
      { path: '/modernWeb', element: <ModernWeb /> },
      { path: '/webComparison', element: <ComparisonWeb /> },
      { path: '/modernWebTackles', element: <TacklesModernWeb /> },
      { path: '/timeLine', element: <TimeLine /> },
      { path: '/topTwo', element: <TopTwoFrameWorks /> },
      { path: '/reactDeepDive', element: <ReactDeepDive /> },
      { path: '/reactInGeneral', element: <ReactInGeneralWithCode /> },
      { path: '/Q&A', element: <QA /> },
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
