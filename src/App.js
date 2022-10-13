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
import Feedback from './pages/Feedback';
import Thankyou from './pages/Thankyou';

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
      { path: '/comparison', element: <ComparisonWeb /> },
      { path: '/tacklesModernWeb', element: <TacklesModernWeb /> },
      { path: '/timeLine', element: <TimeLine /> },
      { path: '/frameWorks', element: <TopTwoFrameWorks /> },
      { path: '/reactDeepDive', element: <ReactDeepDive /> },
      { path: '/genericCode', element: <ReactInGeneralWithCode /> },
      { path: '/qa', element: <QA /> },
      { path: '/feedback', element: <Feedback /> },
      { path: '/thankyou', element: <Thankyou /> },
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
