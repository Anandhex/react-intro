import React from 'react';
import Layout from '../components/Layout';
import SmallCard from '../components/SmallCard';

const TacklesModernWeb = () => {
  return (
    <>
      <Layout id={'tacklesModernWeb'} background="bg-slate-200  ">
        <section className="grid place-content-center snap">
          <h3 className="text-4xl font-bold mb-5">
            How did Web in general tried to handle this Issues?
          </h3>
          <img
            src="https://media4.giphy.com/media/xUOxeZc41DVT2l9laU/giphy.gif?cid=790b76112a9181d894bd09f9c58c3c321c264b13e3bd0ef9&rid=giphy.gif&ct=g"
            width="480"
            height="271"
            frameBorder="0"
            className="giphy-embed mx-auto "
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
              subtitle="We still have many browsers which the standards of the own and enginees. The implementation of CSS is different for different browser"
            />
            <SmallCard
              key={2}
              title="Browsers Engines"
              subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, inventore sunt cumque eaque, doloremque earum perferendis voluptate distinctio architecto molestias rem adipisci maxime tempore cum et, quidem porro fugiat harum!"
            />
            <SmallCard
              key={3}
              title="Different Javascript Versions"
              subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, inventore sunt cumque eaque, doloremque earum perferendis voluptate distinctio architecto molestias rem adipisci maxime tempore cum et, quidem porro fugiat harum!"
            />
            <SmallCard
              key={4}
              title="CSS Supports"
              subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, inventore sunt cumque eaque, doloremque earum perferendis voluptate distinctio architecto molestias rem adipisci maxime tempore cum et, quidem porro fugiat harum!"
            />
            <SmallCard
              key={5}
              title="Standardization"
              subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, inventore sunt cumque eaque, doloremque earum perferendis voluptate distinctio architecto molestias rem adipisci maxime tempore cum et, quidem porro fugiat harum!"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TacklesModernWeb;
