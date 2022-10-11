import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Start = () => {
  return (
    <Layout id="start">
      <section className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-5xl font-bold">React to Dummies</h1>
        <p className="mt-5 w-1/2 text-center">
          We're going to talk about what is <b>web</b>? <br />
          The journey which the web took to be at this stage. <br />
          Challenges which it faces and the <b>solutions</b> which it took.
        </p>
        <div className="mt-4 homeBtn">
          <Link className="rounded-full px-3 py-1 border" to={'/speaker'}>
            Let us begin
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Start;
