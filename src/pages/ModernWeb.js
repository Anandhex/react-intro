import React from 'react';
import Aside from '../components/Aside';
import DesktopScreen from '../components/DesktopScreen';
import Iframe from '../components/Iframe';
import Layout from '../components/Layout';

const ModernWeb = () => {
  return (
    <>
      <Layout id={'modernWeb'} background="bg-slate-200">
        <section className="flex items-center justify-center flex-col min-h-screen pb-40">
          <h3 className="text-4xl font-bold pt-12 ">Modern Web</h3>
          <div className="flex pt-8 px-12 ">
            <section className="w-8/12  mr-3 ">
              <DesktopScreen>
                <div className="iframe-holder">
                  <iframe
                    src="https://web.archive.org/web/20221011173619/https://www.netflix.com/"
                    className="w-full"
                    height={'800px'}
                  />
                </div>
              </DesktopScreen>
              <h3 className="text-2xl font-bold mt-3">
                Few Examples for the website of Modern Web
              </h3>

              <div className="flex flex-wrap gap-3 mt-5">
                <Iframe
                  link="https://web.archive.org/web/20221011173619/https://www.netflix.com/"
                  title="Netflix"
                  key={1}
                />
                <Iframe
                  link="https://web.archive.org/web/20220801001503/https://www.yahoo.com/"
                  title="Yahoo "
                  key={2}
                />
                <Iframe
                  link="https://web.archive.org/web/20221011163211/https://www.amazon.com/"
                  title="Amazon"
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
                  src="https://media3.giphy.com/media/Akko3uhtzLknUwa8uV/giphy.gif?cid=790b7611cc9e059c073988721adce1bfcb561e358ee193f2&rid=giphy.gif&ct=g"
                  width="480"
                  height="343"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                />
              </div>
              <p className="mt-3">
                Modern web allows individuals to publish articles and comments,
                create accounts. This is a two way communication. It refers to a
                paradigm shift in how the internet is used. Over the past 15 to
                20 years, the bland webpages of Web 1.0 have been completely
                replaced by Web 2.0’s interactivity, social connectivity, and
                user-generated content. Web 2.0 makes it possible for
                user-generated content to be viewed by millions of people around
                the world virtually in an instant; this unparalleled reach has
                led to an explosion of this type of content in recent years.
              </p>
              <p className="mt-3">
                The exponential growth of Web 2.0 has been driven by key
                innovations such as mobile internet access and social networks,
                as well as the near-ubiquity of powerful mobile devices like
                iPhones and Android-powered devices. In the second decade of
                this millennium, these developments enabled the dominance of
                apps that greatly expanded online interactivity and utility—for
                example, Airbnb, Facebook, Instagram, TikTok, Twitter, Uber,
                WhatsApp, and YouTube, to name a few.
              </p>
              <p className="mt-3">
                The phenomenal revenue growth of these dominant platforms has
                made many of the Web 2.0-centric companies—such as Apple,
                Amazon, Google, Meta (formerly Facebook), and Netflix—among the
                world’s biggest companies by market capitalization (there is
                even an acronym for them: FAANG).
              </p>
              <p className="mt-3">
                These applications have also spurred the growth of the gig
                economy, by enabling millions of people to earn income on a
                part-time or full-time basis by driving, renting their homes,
                delivering food and groceries, or selling goods and services
                online. Web 2.0 has also been tremendously disruptive to certain
                industries to the point of being an existential threat to some
                of them. These are sectors that have either failed to adapt to
                the new web-centric business model or been slow to do so, with
                retail, entertainment, media, and advertising among the hardest
                hit.
              </p>
              <h3 className="text-2xl font-bold mt-3">Issues with it?</h3>
              <p className="mt-3">
                The website no longer needs to look the same in different
                browsers or devices with different screen sizes. With responsive
                design, a website changes its form to fit any available space on
                whatever screen. This technique is frequently practiced and has
                become the norm on the Web.
              </p>
            </Aside>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ModernWeb;
