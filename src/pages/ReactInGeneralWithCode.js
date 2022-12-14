import React from 'react';
import Layout from '../components/Layout';
import SmallCard from '../components/SmallCard';

const ReactInGeneralWithCode = () => {
  return (
    <>
      <Layout id={'genericCode'} background="bg-slate-200">
        <section className="snap grid place-content-center  px-12">
          <h3 className="text-4xl font-bold text-center">
            Let's sum up React?
          </h3>
          <img
            src="https://media3.giphy.com/media/oMZsqx0TAnDqF2WE6N/200.webp?cid=ecf05e47t2xi5lphd20m9bij2c5qy11f3dib4qbf0bptruf0&rid=200.webp&ct=g"
            alt="start"
            width={500}
            className="mt-7"
          />
        </section>
        <section className="snap grid place-content-center bg-slate-400">
          <div className="flex flex-col items-start gap-6 my-32">
            <SmallCard key={1} title="Resuable Components">
              <p>
                When we talk about reusable components, react is the front
                runner in it and <b>believes</b> in it.
              </p>
            </SmallCard>
            <SmallCard key={2} title="Library | No Opinions">
              <p>
                Does not have any opinion/s and allows the dev to make their{' '}
                <b>own</b> decision.
              </p>
            </SmallCard>
            <SmallCard
              key={3}
              title="Third Party | React only deals with View layer"
            >
              <p>
                As react is a library with only a job to render components in a
                fast and efficient manner. So it needs help for other
                functionalities like state management and routing. <br />
                But it focuses on one thing and does it <b>best</b>. <br />
                But that doesn't mean other frameworks don't depend on other
                libraries.
              </p>
            </SmallCard>
            <SmallCard key={4} title="Jargons of React">
              <ul className="list-disc pl-5">
                <li>State and Props</li>
                <li>Functional Component and Class Based Component</li>
                <li>Hooks</li>
                <li>Re-Renders</li>
                <li>Pure Components</li>
                <li>Reconcilations</li>
                <li>useEffect</li>
                <li>Fiber</li>
              </ul>
            </SmallCard>
          </div>
        </section>
        <section className="snap grid place-content-center bg-slate-200">
          <h3 className="text-4xl font-bold text-center">Guess What???</h3>
          <img
            src="https://media0.giphy.com/media/NMufrvxO8fC3C/200.webp?cid=ecf05e47l7xxx3mvv86q3ii8ilp3p6v1ii0ky86akse2f3uz&rid=200.webp&ct=g"
            alt="what"
            className="mt-7"
            width={500}
          />
        </section>
        <section className="snap grid place-content-center bg-slate-400">
          <h3 className="text-4xl font-bold text-center">
            The entire Presentation was built in React!
          </h3>
          <div className="flex justify-between mt-7 gap-7">
            <div>
              <h4 className="text-3xl">And with some extra libraries</h4>
              <ul className="text-2xl list-disc mt-3">
                <li>React Router - For routing.</li>
                <li>Framer Motion - For animation.</li>
                <li>Tailwind - For quirky CSS.</li>
                <li>
                  Our brains - For <b>logic and creativity</b>.
                </li>
              </ul>
            </div>
            <img
              src="https://media3.giphy.com/media/fapJpJxnArDFK/200.webp?cid=ecf05e475gig07mxfl1nqvaf913h4tuwgfzvj2k0c320gcwx&rid=200.webp&ct=g"
              alt="what"
              width={500}
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ReactInGeneralWithCode;
