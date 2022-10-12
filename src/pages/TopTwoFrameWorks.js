import React from 'react';
import Layout from '../components/Layout';
import comparison from '../assets/pngs/comparison.png';

const TopTwoFrameWorks = () => {
  return (
    <>
      <Layout id={'frameWorks'} background="bg-slate-200">
        <section className="snap grid place-content-center">
          <h3 className="text-4xl font-bold text-center mb-7">Frameworks</h3>
          <div className="flex gap-7">
            <img
              src="https://media4.giphy.com/media/12GUPx3g0PPfYA/giphy.gif?cid=ecf05e47ytf0yjctn5vozfi20rvlim70vhelimh6mlwgfkwo&rid=giphy.gif&ct=g"
              width={500}
            />
            <div className="text-[42px] w-[15ch] ">
              <span className="text-[52px] font-mono">«</span>
              <em>
                There is pretty much new <b>framework</b> every month
              </em>
              <span className="text-[52px] font-mono">»</span>
            </div>
          </div>
        </section>
        <section className="snap grid place-content-center bg-slate-400">
          <h3 className="text-4xl font-bold text-center mt-7 mb-7">
            Top 2 Frameworks head to head
          </h3>
          <img
            src={comparison}
            alt="comparison"
            className="mb-36"
            width={700}
          />
        </section>
        <section className="snap grid place-content-center bg-slate-200">
          <h3 className="text-4xl font-bold text-center mt-7 mb-7">
            But But <br />
            Aren't we talking about React?
          </h3>
          <img
            src="https://media4.giphy.com/media/NuZSeQggjNBxFGjwk7/200w.webp?cid=ecf05e47cth9pqbc082ejfvuiblvbfps3xljrk96l4jk158l&rid=200w.webp&ct=g"
            alt="opinion"
            className="mx-auto"
            width={400}
          />
        </section>
        <section className="snap grid place-content-center bg-slate-400">
          <h3 className="text-4xl font-bold text-center mt-7 mb-7">
            That's what React is
            <br />
            <span className="font-normal">
              No Opinions{' '}
              <span className="">
                with a pinch of <em>salt</em>
              </span>
            </span>
          </h3>
          <img
            src="https://media3.giphy.com/media/3o7P4F86TAI9Kz7XYk/giphy.gif?cid=ecf05e47i5o56kzrkz6xf6yawrllc0skf5m2n7vmamno2o83&rid=giphy.gif&ct=g"
            alt="saltbae"
            className="mx-auto"
            width={400}
          />
        </section>
        <section className="snap grid place-content-center bg-slate-200">
          <h3 className="text-4xl text-center">
            <span className="font-bold">On a serious note</span>
            <br /> A JavaScript library for building user interfaces
          </h3>

          <img
            src="https://media0.giphy.com/media/4JVTF9zR9BicshFAb7/giphy.gif?cid=ecf05e47n67hedi4qf726hzs2cb7cabepburx1sbyyexc8lu&rid=giphy.gif&ct=g"
            alt="confused"
            className="mx-auto mt-7"
            width={400}
          />
        </section>
        <section className="snap grid place-content-center bg-slate-400">
          <h3 className="text-4xl text-center">
            Before addressing the confusion <br />
            <span className="font-bold">Some honrable mentions</span>
          </h3>

          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--npBLepep--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9kvv556myqc1vc3b5tr2.png"
            alt="confused"
            className="mx-auto mt-7"
            width={500}
          />
        </section>
      </Layout>
    </>
  );
};

export default TopTwoFrameWorks;
