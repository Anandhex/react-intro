import React from 'react';
import DesktopScreen from '../components/DesktopScreen';
import Layout from '../components/Layout';
import Aside from '../components/Aside';
import Iframe from '../components/Iframe';

const IntermediateWeb = () => {
  return (
    <>
      <Layout id={'intermediateWeb'} background="bg-slate-200">
        <section className="flex items-center justify-center flex-col min-h-screen pb-40">
          <h3 className="text-4xl font-bold pt-12 ">Intermediate Web</h3>
          <div className="flex pt-8 px-12 ">
            <section className="w-8/12  mr-3 ">
              <DesktopScreen>
                <div className="iframe-holder">
                  <iframe
                    src="https://web.archive.org/web/20120731074503/https://signup.netflix.com/"
                    className="w-full"
                    height={'800px'}
                  />
                </div>
              </DesktopScreen>
              <h3 className="text-2xl font-bold mt-3">
                Few Examples for the website of Intermediate Web
              </h3>

              <div className="flex flex-wrap gap-3 mt-5">
                <Iframe
                  link="https://web.archive.org/web/20120731074503/https://signup.netflix.com/"
                  title="Netflix (10 Sep 2011)"
                  key={1}
                />
                <Iframe
                  link="https://web.archive.org/web/20110301073329/http://www.yahoo.com/"
                  title="Yahoo (11 Mar 2011)"
                  key={2}
                />
                <Iframe
                  link="https://web.archive.org/web/20110401045336/http://www.amazon.com/"
                  title="Amazon (01 Apr 2011)"
                  key={3}
                />
              </div>
            </section>

            <Aside>
              <h3 className="text-2xl font-bold">
                How do you feel about the website?
              </h3>
              <div className="flex justify-center mt-4">
                <iframe
                  src="https://giphy.com/embed/9qJjr77utn6ffn4aNQ"
                  width="480"
                  height="270"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/theregisti-ok-sure-9qJjr77utn6ffn4aNQ"></a>
                </p>
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

export default IntermediateWeb;
