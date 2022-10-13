import React from 'react';
import Layout from '../components/Layout';

const ComparisonWeb = () => {
  const early90 = [
    "Web pages look like few texts, hyperlinks, and broken images, it wasn't graphical but text only called line-mode browser.",

    'Javascript introduce in 1995 but the browser compatablily was very limited. So, Perl plays a major role in this decade.',

    'At the end of the decade 150 million users start use the internet.',
    'No Responsive.',

    'The ways to protect against web attacks started to be found.',

    'Only Minimal hosting site is there most of the site are expensive and most of the company are closed.',
  ];
  const early10 = [
    'The graphics and visual elements have introduced some of the most significant changes. HTML introduced the table and grid to make proper table content and layout.',

    'WordPress was created this year marked the begining of dynamic content and bloggig era instead of static HTML page. Most of the website using JSP but at the same time JS growth was slightly increased .',

    'In 2009 -2010 Usage of Internet is slightly increased 14% . So the count is 1.97 billion users. This is the time for internet revelotion begins.',

    'Not enough CSS support for Responsive Design.',

    'The Open Web Application Security Project ( OWASP) was established in 2001 and played a significant role in advancing awareness, tools, and standards in application security.',

    'The Price of a regular, consumer-oriented shared web hosting account, and how much storage space and data transfer (traffic) was included in that account.',
  ];
  const modernWeb = [
    "The modern web looks aesthetic and eye-catching design with more animation. For example, the current web which we're showing right now.",

    'As of 2022,98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.',

    "At the beginning of 2022, 62.5% of the world's population starts using the internet. The approximate count is a 4.9billion. So the fact is here  We can live a day without having food but, we can't live a day without having internet.",

    'CSS has more features to create a Responsive Design.',

    'The modern web it has more secure at the time the possible for Security Breach is high.',

    'The n number of hosting site in the mordern web and it provides free for the month.',
  ];
  return (
    <>
      <Layout id={'comparison'} background="bg-slate-200">
        <section className="grid place-content-center  min-h-screen  pt-7 pb-32 px-12">
          <h3 className="text-4xl font-bold mb-5 text-center">
            Comparison Web
          </h3>
          <div className="flex">
            {/* bg-slate-400 bg-slate-600 */}
            <section className="w-1/3 mr-3">
              <h1 className="text-center bg-slate-400 text-white	py-3">
                Early 90's
              </h1>
              <article>
                <ul className="list-disc">
                  {early90.map((list, key) => (
                    <li key={key} className="py-1">
                      {list}
                    </li>
                  ))}
                </ul>
              </article>
            </section>
            <section className="w-1/3 mr-3">
              <h1 className="text-center bg-slate-600 text-white	py-3">
                Early 2010's
              </h1>
              <article>
                <ul className="list-disc">
                  {early10.map((list, key) => (
                    <li key={key} className="py-1">
                      {list}
                    </li>
                  ))}
                </ul>
              </article>
            </section>
            <section className="w-1/3">
              <h1 className="text-center bg-slate-400 text-white	py-3">
                Modern Web
              </h1>
              <article>
                <ul className="list-disc">
                  {modernWeb.map((list, key) => (
                    <li key={key} className="py-1">
                      {list}
                    </li>
                  ))}
                </ul>
              </article>
            </section>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ComparisonWeb;
