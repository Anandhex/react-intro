import React from 'react';
import DesktopScreen from '../components/DesktopScreen';
import Layout from '../components/Layout';
import Aside from '../components/Aside';
import Iframe from '../components/Iframe';

const InitialWeb = () => {
  return (
    <>
      <Layout id={'initialWeb'} background="bg-slate-200">
        <section className="flex items-center justify-center flex-col min-h-screen pb-40">
          <h3 className="text-4xl font-bold pt-12 ">Early 90's</h3>
          <div className="flex pt-8 px-12 ">
            <section className="w-8/12  mr-3 ">
              <DesktopScreen>
                <div className="iframe-holder">
                  <iframe
                    src="https://web.archive.org/web/19961227203847/http://ubl.com/"
                    className="w-full"
                    height={'800px'}
                  />
                </div>
              </DesktopScreen>
              <h3 className="text-2xl font-bold mt-3">
                Few Examples for the website of Initial Web
              </h3>

              <div className="flex flex-wrap gap-3 mt-5">
                <Iframe
                  link="https://web.archive.org/web/20000229183439/http:/www.cl.cam.ac.uk/coffee/coffee.html"
                  title="Torgan Room Coffee (10 Dec 1997)"
                  key={1}
                />
                <Iframe
                  link="https://web.archive.org/web/19961220154510/http://www.yahoo.com/"
                  title="Yahoo (17 Oct 1996)"
                  key={2}
                />
                <Iframe
                  link="https://web.archive.org/web/19961227203847/http://ubl.com/"
                  title=" Ultimate Band List (27 Dec 1996)"
                  key={3}
                />
              </div>
            </section>

            <Aside>
              <h3 className="text-2xl font-bold">
                How do you feel about the website?
              </h3>
              <div className="flex justify-center mt-4">
                <img
                  src="https://media4.giphy.com/media/j8nXhJ1fJM0wg/giphy.gif?cid=790b76115ec5716a5d4125ca61f226f45a81be3302ae0d4a&rid=giphy.gif&ct=g"
                  width="480"
                  height="270"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae possimus dolorum labore reiciendis ea, deleniti
                totam molestias vero quibusdam cum earum iusto eligendi ut vitae
                nisi dolor in magni quisquam. Consequatur corrupti quidem
                provident? Aliquam accusamus quidem unde perferendis qui?
              </p>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci nulla ea, ad, cumque aut aliquam assumenda fugiat iure
                soluta ducimus harum, possimus placeat. Laudantium id
                distinctio, doloribus dolor illum sunt.
              </p>
              <h3 className="text-2xl font-bold mt-3">Issues with it?</h3>
              <p className="mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam, tempora ullam. Amet eius voluptatibus autem
                dignissimos nisi quas eveniet adipisci veniam! Deserunt nisi
                ratione numquam soluta, debitis non voluptate quis.
              </p>
              <p className="mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam, tempora ullam. Amet eius voluptatibus autem
                dignissimos nisi quas eveniet adipisci veniam! Deserunt nisi
                ratione numquam soluta, debitis non voluptate quis.
              </p>
            </Aside>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default InitialWeb;
