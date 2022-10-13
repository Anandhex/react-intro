import React from 'react';
import Layout from '../components/Layout';
import SmallCard from '../components/SmallCard';

const TacklesModernWeb = () => {
  return (
    <>
      <Layout id={'tacklesModernWeb'} background="bg-slate-200  ">
        <section className="grid place-content-center snap">
          <h3 className="text-4xl font-bold mb-5">
            How did Web try to handle these Issues?
          </h3>
          <img
            src="https://media3.giphy.com/media/l4FGBWVSLDSRTp280/200w.webp?cid=ecf05e475ne2dyw7pixgl87x33fhoxp45l36a5k9ib8un33w&rid=200w.webp&ct=g"
            width="480"
            height="271"
            frameBorder="0"
            className="giphy-embed mx-auto "
            alt="issues"
            allowFullScreen
          />
        </section>
        <section className="snap grid place-content-center bg-slate-400">
          <div className="flex gap-3 items-center">
            <div>
              <h3 className="text-right text-4xl font-bold">
                Yup! <br />
                Throwing stuffs at it
              </h3>
              <h4 className="text-2xl  mb-5 mt-3">
                Let us list some of the <b>stuffs</b>
              </h4>
              <ul className="list-disc pl-5">
                <li className="text-xl">Pollyfills</li>
                <li className="text-xl">Libraries</li>
                <li className="text-xl font-bold">Frameworks</li>
                <li className="text-xl">Global Standards</li>
                <li className="text-xl">Javascript</li>
                <li className="text-xl">Typescript</li>
                <li className="text-xl">& Many More.....</li>
              </ul>
            </div>
            <img
              src="https://media1.giphy.com/media/gJhJEGkckEnIkqwOCa/giphy.gif?cid=790b76117d024b3b72adb3d347872ed5581e702a831ecec8&rid=giphy.gif&ct=g"
              width="480"
              alt="doing best"
              height="480"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            />
          </div>
        </section>
        <section className="snap grid place-content-center bg-slate-200">
          <h3 className="text-center text-4xl font-bold">
            Existing <em>issues</em> in Modern Web
          </h3>
          <div className="flex flex-wrap gap-3 mt-9 justify-center">
            <SmallCard
              key={1}
              title="Different Browsers"
              subtitle="We still have many browsers which have standards of their own. The CSS implementation is different for each browser"
            />
            <SmallCard
              key={2}
              title="Browsers Engines"
              subtitle="The way javascript gets parsed is different for each engine. So the performance of web pages differs on different browsers"
            />
            <SmallCard
              key={3}
              title="Different Javascript Versions"
              subtitle="Certain web browsers haven't updated the engines to support the latest javascript version. So we have developers working on a different version of Javascript"
            />
            <SmallCard
              key={4}
              title="CSS Supports"
              subtitle="The way the browser implements the CSS is different. Certain CSS properties can't be used to provide a better experience. Any Frontend developer has an idea about caniuse.com"
            />
            <SmallCard
              key={5}
              title="Standardization"
              subtitle="Different implementations and different ways how the DOM is rendered in the browser. There is no same standard across them which gives unexpected result."
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TacklesModernWeb;
