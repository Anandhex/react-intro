import React from 'react';
import InfoGraphic from '../components/InfoGraphic';
import Layout from '../components/Layout';

const WhatIsWeb = () => {
  return (
    <Layout id="web">
      <section className="grid place-content-center snap bg-slate-200">
        <h3 className="text-2xl font-bold text-center">What is Web?</h3>
        <InfoGraphic
          key={1}
          imgUrl={'https://picsum.photos/id/237/200'}
          desc={
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
          }
        />
      </section>
      <section className="grid place-content-center snap bg-slate-400">
        <h3 className="text-2xl font-bold text-center">What is Document?</h3>
        <InfoGraphic
          key={2}
          imgUrl={'https://picsum.photos/id/227/200'}
          reverse={true}
          desc={
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
          }
        />
      </section>
    </Layout>
  );
};

export default WhatIsWeb;
