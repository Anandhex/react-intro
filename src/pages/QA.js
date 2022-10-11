import React from 'react';
import Layout from '../components/Layout';

const QA = () => {
  return (
    <>
      <Layout id={'qa'}>
        <section className="flex items-center justify-center flex-col min-h-screen  px-5 ">
          <h3 className="text-2xl font-bold mb-5">Q&A's</h3>
          <iframe
            src="https://giphy.com/embed/cJ5vF0yBJdspg9GgJd"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/originals-cJ5vF0yBJdspg9GgJd"></a>
          </p>
        </section>
      </Layout>
    </>
  );
};

export default QA;
