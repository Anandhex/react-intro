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
                In the early 90s websites were built with http only using HTML
                and images. There probably was no backend language at all
                initially, when it became a thing with CGI, it was either Perl
                or C programs, sometimes also shell scripts.
                <br />A typical website at the time was using blue text on a
                white or dark grey background. <br />
                You spent time staring at a blank screen wondering what to do.
                If you could think of a good URL you typed it into your browser.
                <br />
              </p>
              <p className="mt-3">
                It took 5-10 seconds for every page to load. If you had a fast
                connection you could see that most people had slow servers. It
                takes 5-10 seconds to load a page, you become aware of problems
                with the ad networks loading cookies or your browser hogging all
                your memory.
              </p>
              <h3 className="text-2xl font-bold mt-3">Issues with it?</h3>
              <p className="mt-3">
                There were a lot of broken image links, broken links of all
                sorts.
                <br />
                There were no popups, pfishing was rare, very little malicious
                code, no cookies at all in early versions, no rev share, no paid
                search, no SEO optimization, no aggregation of anything. But
                there were many, many link farms.
                <br />
                People were afraid to talk to strangers, date, provide personal
                information, or buy online. It seemed like something sinister
                was going to happen.
              </p>
              <p className="mt-3">
                Narrow page width by today's standards. Screens were no wider
                than 800 pixels
                <br />
                Sparing use of graphics. Many people were on dial-up connections
                and large and more detailed images could take over a minute to
                download.
                <br />
                Limited variety of fonts. Usually a browser sans or serif.
                <br />
                Flash splash screens were fairly ubiquitous. Web pages were
                thought of as similar to television adverts with a captive
                audience.
              </p>
            </Aside>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default InitialWeb;
