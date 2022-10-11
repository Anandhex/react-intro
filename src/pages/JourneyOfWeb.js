import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';

const JourneyOfWeb = () => {
  return (
    <>
      <Layout id={'journeyOfWeb'}>
        <section className="flex flex-col items-center justify-center min-h-screen">
          <section className="flex gap-3">
            <AnimatePresence>
              <Card
                id="1"
                subtitle={
                  'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident'
                }
                title={'Initial Web'}
              />
              <Card
                id="2"
                subtitle={
                  'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident'
                }
                title={'Intermediate Web'}
              />
              <Card
                id="3"
                subtitle={
                  'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident'
                }
                title={'Modren Web'}
              />
            </AnimatePresence>
          </section>
        </section>
      </Layout>
    </>
  );
};

export default JourneyOfWeb;
