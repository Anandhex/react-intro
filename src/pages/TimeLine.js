import React from 'react';
import Layout from '../components/Layout';
import SmallCard from '../components/SmallCard';
const TimeLine = () => {
  return (
    <>
      <Layout id={'timeLine'}>
        <section className="flex items-center justify-center flex-col min-h-screen  px-12">
          <h3 className="text-2xl font-bold mb-5">TimeLine of Web</h3>
          <div className="flex flex-wrap gap-3">
            <SmallCard title="" />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TimeLine;
