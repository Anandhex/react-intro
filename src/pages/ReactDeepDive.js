import React from 'react';
import Layout from '../components/Layout';

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
      <Layout id={'reactDeepDive'}>
        <section className="flex items-center justify-center flex-col min-h-screen mt-10 px-5">
          <h3 className="text-2xl font-bold mb-5">React Deep Dive</h3>
          <ul>
            {list.map((item, idx) => (
              <li className="mt-4 breadcrumbs__item" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
};

export default ReactDeepDive;
