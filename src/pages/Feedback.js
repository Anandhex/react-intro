import React from 'react';
import Layout from '../components/Layout';

const Feedback = () => {
  return (
    <Layout id={'feedback'} background="bg-slate-200">
      <section className="grid place-content-center min-h-screen">
        <h3 className="text-4xl font-bold mb-5 text-center">
          Any Feedback for US?
        </h3>
        <div className="flex gap-6">
          <div className="grid place-content-center">
            <img
              src="https://media3.giphy.com/media/G4QSvmSj6XTpBF2In2/giphy.gif?cid=ecf05e475va1ethejt5cn9yi3iu6vz1x44remzhhwu5in9o8&rid=giphy.gif&ct=g"
              alt="Whoa"
              width={400}
            />
            <p className="text-center text-4xl font-bold text-[#F94E34]">1</p>
          </div>
          <div className="grid place-content-center">
            <img
              src="https://media1.giphy.com/media/cDXb5yafuY3lkGTosI/giphy.gif?cid=ecf05e47bogk0kqu0jtbsto5hxks4si8dwfe481h0l0o35ec&rid=giphy.gif&ct=g"
              alt="okay"
              width={400}
            />
            <p className="text-center text-4xl font-bold text-[#F94E34]">2</p>
          </div>{' '}
          <div className="grid place-content-center">
            <img
              src="https://media1.giphy.com/media/4oMXIEPdD09SU/giphy.webp?cid=ecf05e4768kzk6jx8n7cu8pzhalf1t12h3mtkiaz820f4nsp&rid=giphy.webp&ct=g"
              alt="Whoa"
              width={400}
              style={{ height: '225.4px' }}
            />
            <p className="text-center text-4xl font-bold text-[#F94E34]">3</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Feedback;
