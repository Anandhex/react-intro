import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import Layout from '../components/Layout';

const Speaker = () => {
  return (
    <Layout id="speaker" background={'bg-slate-200'}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h3 className="text-2xl font-bold">Before we start</h3>
        <h4 className="text-xl">Who are we?</h4>
        <div className="flex mt-5 justify-between w-1/2">
          <Avatar
            key={1}
            userName="Anand"
            desc="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
          />
          <Avatar
            key={2}
            userName="Subash"
            desc="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
          />
        </div>
        <Link to={'/web'}>Let us begin</Link>
      </div>
    </Layout>
  );
};

export default Speaker;
