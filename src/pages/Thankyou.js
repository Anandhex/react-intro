import React from 'react';
import Layout from '../components/Layout';

const Thankyou = () => {
  return (
    <Layout id={'thankyou'} background="bg-slate-200">
      <section className="flex items-center justify-center flex-col min-h-screen  px-5 ">
        <h3 className="text-4xl text-center font-bold">
          Paying respects to everyone who has helped
        </h3>
        <ul className="list-disc text-xl mt-7 font-bold">
          <li>GIPHY - For all GIFs </li>
          <li>Wikipedia - For all info</li>
          <li>Youtube - For more info</li>
        </ul>
        <img
          src="https://media1.giphy.com/media/28XVGIraFzKKI/giphy.webp?cid=ecf05e47txdlotfmqv17bzcamkecy5iqcu4o0pea1ldkfus9&rid=giphy.webp&ct=g"
          alt="thanks"
          className="mt-7"
          width={400}
        />
      </section>
    </Layout>
  );
};

export default Thankyou;
