import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';

const JourneyOfWeb = () => {
  return (
    <>
      <Layout id={'journeyOfWeb'}>
        <div>JourneyOfWeb</div>
        <Card id="1" subtitle={'Subtitle'} title={'title'} />
      </Layout>
    </>
  );
};

export default JourneyOfWeb;
