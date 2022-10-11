import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Start = () => {
  return (
    <Layout id="start">
      <section className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-5xl font-bold">Intro to React</h1>
        <p className="mt-5 w-1/2 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link className="rounded-full px-3 py-1 border" to={'/speaker'}>
          Let's begin
        </Link>
      </section>
    </Layout>
  );
};

export default Start;
