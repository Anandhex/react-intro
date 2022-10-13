/* eslint-disable jsx-a11y/iframe-has-title */
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
          <h3 className="text-4xl font-bold pt-12 ">Early 2010's</h3>
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
                <img
                  src="https://media0.giphy.com/media/9qJjr77utn6ffn4aNQ/giphy.gif?cid=790b761186e5d08cc9eb550f656d585b2df43be8b00a646c&rid=giphy.gif&ct=g"
                  width="480"
                  height="270"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <p className="mt-3">
                This decade has drastic change for web community.The usage of
                internet was incrased rapidly. In 2000 The first draft of{' '}
                <b>CSS 3</b> was published during this year. Many popular sites
                lauched this year like McDonald's, Paypal and so on...{' '}
              </p>
              <p className="mt-3">
                2001 svg format was introduced this is the first vector image
                for the website can be written in xml
              </p>
              <p className="mt-3">
                2003 first verison of <b>WordPress</b> was created this year
                marked the begining of dynamic content and bloggig era instead
                of static HTML page.
              </p>
              <p className="mt-3">
                2004 CSS updated the stye property. Added more styles in web
                page it gives more graphical content on a page. Facebook abd
                XBox launched this year
              </p>
              <p className="mt-3">
                In 2006 the first CSS PreProcessor Sass was crated this year
                extending CSS feature allow web desiger to create more complex
                effects.
              </p>
              <p className="mt-3">
                2008 India 3G arena with the launch of 3G. Not only for web apps
                even usage of mobile apps also rapidly increase.
              </p>
              <p className="mt-3">
                Compared to previous decade the size of the application got
                reduced.
              </p>
              <p className="mt-3">
                Although cloud computing had been around for a while, the idea
                that most of our data and important tools could be stored and
                accessed was fairly new in the early 2010s.
              </p>
              <h3 className="text-2xl font-bold mt-3">Issues with it?</h3>
              <p className="mt-3">No global standards.</p>
              <p className="mt-3">
                Not enough CSS support for Responsive Design.
              </p>
              <p className="mt-3">
                Mediocre security. Minimal number of hosting sites.
              </p>
            </Aside>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IntermediateWeb;
