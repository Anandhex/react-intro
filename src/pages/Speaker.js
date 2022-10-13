import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import Layout from '../components/Layout';
import anand from '../assets/jpg/anand.jpg';
import subash from '../assets/jpg/subash.jpg';

const Speaker = () => {
  return (
    <Layout id="speaker" background={'bg-slate-200'}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h3 className="text-4xl mb-3 font-bold">Before we start</h3>
        <h4 className="text-xl mb-3">Who are we?</h4>
        <div className="flex mt-5 justify-between w-1/2">
          <Avatar
            url={anand}
            key={1}
            userName="Anand"
            desc="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
          />
          <Avatar
            url={subash}
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
