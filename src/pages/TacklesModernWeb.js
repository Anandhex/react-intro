import React from 'react';
import Layout from '../components/Layout';

const TacklesModernWeb = () => {
  return (
    <>
      <Layout id={'tacklesModernWeb'}>
        <section className="flex items-center justify-center flex-col min-h-screen px-5 ">
          <section className=" grid place-content-center">
            <h3 className="text-2xl font-bold mb-5">
              How did Web in general tried to handle this Issues?
            </h3>
            <iframe
              src="https://giphy.com/embed/xUOxeZc41DVT2l9laU"
              width="480"
              height="271"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/curbyourenthusiasm-season-9-episode-6-xUOxeZc41DVT2l9laU"></a>
            </p>
          </section>
        </section>
      </Layout>
    </>
  );
};

export default TacklesModernWeb;
