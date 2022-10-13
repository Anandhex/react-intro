import React from 'react';
import Layout from '../components/Layout';
import DesktopScreen from '../components/DesktopScreen';

const ReactDeepDive = () => {
  const list = [
    'React is a declarative, efficient, and flexible JavaScript library for building user interfaces from client-side.',
    'ReactJS is an open-source,component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.',
    'A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML.',
    ' Components can be nested within other components to allow complex applications to be built out of simple building blocks.',
    'The web apps which are using React js - Facebook, Instagram,Netflix, New York Times, WhatsApp and so on....',
    'Facebook is massive. Its codebase includes over 20,000 components, and, although it is heavily based on React.',
  ];
  return (
    <>
      <Layout id={'reactDeepDive'} background="bg-slate-200">
        <div className="iframe-holder">
          <iframe
            src="https://learn.react-js.dev/introduction/general"
            frameborder="0"
            className="w-full min-h-screen"
          ></iframe>
        </div>
      </Layout>
    </>
  );
};

export default ReactDeepDive;
