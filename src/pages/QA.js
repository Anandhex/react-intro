import React from 'react';
import Layout from '../components/Layout';

const QA = () => {
  return (
    <>
      <Layout id={'qa'}>
        <section className="flex items-center justify-center flex-col min-h-screen  px-5 ">
          <h3 className="text-2xl font-bold mb-5">Q&A's</h3>
          <img
            src="https://media2.giphy.com/media/cJ5vF0yBJdspg9GgJd/giphy.gif?cid=790b7611f190cefb2edd31c0927f0c48b1e244260d1c2487&rid=giphy.gif&ct=g"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          />
        </section>
      </Layout>
    </>
  );
};

export default QA;
