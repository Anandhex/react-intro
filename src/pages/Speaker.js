import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../components/Avatar';
import Layout from '../components/Layout';
import anand from '../assets/jpg/anand.jpg';
import subash from '../assets/jpg/subash.jpg';

const Speaker = () => {
  const navigate = useNavigate();
  return (
    <Layout id="speaker" background={'bg-slate-200'}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h3 className="text-4xl mb-3 font-bold">Before we start</h3>
        <h4 className="text-xl mb-3">Who are we?</h4>
        <div className="flex mt-5 justify-between w-1/2">
          <Avatar url={anand} key={1} userName="Anand">
            <p className="w-[30ch]">
              An average coder. Who eats and sleeps on UI and has a bit of a
              sense of humor with a pinch of salt.
            </p>
          </Avatar>
          <Avatar url={subash} key={2} userName="Subash">
            <p className="w-[30ch]">
              An average coder with passion for coding. Who is trying his best
              to be a UI developer.
            </p>
          </Avatar>
        </div>
        <div className="mt-4 homeBtn">
          <button
            className="rounded-full hover:font-bold"
            onClick={() => navigate('/web')}
          >
            <Link className="" to={'/web'}>
              Let's Start
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Speaker;
