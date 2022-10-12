import React from 'react';
import Layout from '../components/Layout';
import SmallCard from '../components/SmallCard';

const TacklesModernWeb = () => {
  return (
    <>
      <Layout id={'tacklesModernWeb'} background="bg-slate-200  ">
        <section className=" grid place-content-center snap">
          <h3 className="text-4xl font-bold mb-5">
            How did Web in general tried to handle this Issues?
          </h3>
          <iframe
            src="https://giphy.com/embed/xUOxeZc41DVT2l9laU"
            width="480"
            height="271"
            frameBorder="0"
            className="giphy-embed mx-auto "
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/curbyourenthusiasm-season-9-episode-6-xUOxeZc41DVT2l9laU"></a>
          </p>
        </section>
        <section className="snap grid place-content-center bg-slate-400">
          <div className="flex gap-3 items-center">
            <div>
              <h3 className="text-right text-4xl font-bold">
                Yup! <br />
                Stuffing stuffs/Throwing stuffs at it
              </h3>
              <h4 className="text-2xl  mb-5 mt-3">
                Let us list some of the <b>stuffs</b>
              </h4>
              <ul className="list-disc pl-5">
                <li className="text-xl">Pollyfills</li>
                <li className="text-xl">Libraries</li>
                <li className="text-xl">Frameworks</li>
                <li className="text-xl">Global Standards</li>
                <li className="text-xl">Javascript</li>
                <li className="text-xl">Typescript</li>
                <li className="text-xl">& Many More.....</li>
              </ul>
            </div>
            <iframe
              src="https://giphy.com/embed/gJhJEGkckEnIkqwOCa"
              width="480"
              height="480"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>

            <p>
              <a href="https://giphy.com/gifs/cbc-comedy-105-cbc-gem-gJhJEGkckEnIkqwOCa"></a>
            </p>
          </div>
        </section>
        <section className="snap grid place-content-center bg-slate-200">
          <h3 className="text-center text-4xl font-bold">
            Still existing <em>issues</em> in Modern Web
          </h3>
          <div className="flex flex-wrap gap-3 mt-9 justify-center">
            <SmallCard
              key={1}
              title="Different Browsers"
              subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, inventore sunt cumque eaque, doloremque earum perferendis voluptate distinctio architecto molestias rem adipisci maxime tempore cum et, quidem porro fugiat harum!"
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
