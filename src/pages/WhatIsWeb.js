import React from 'react';
import InfoGraphic from '../components/InfoGraphic';
import Layout from '../components/Layout';
import online from '../assets/gifs/online.gif';
import doc from '../assets/gifs/document.gif';
const WhatIsWeb = () => {
  return (
    <Layout id="web">
      <section className="grid place-content-center snap bg-slate-200">
        <InfoGraphic
          key={1}
          imgUrl={online}
          header="What is Web?"
          desc={
            '<b>The Web</b> —  is the common name for the World Wide Web, a subset of the Internet consisting of the pages that can be accessed by a Web browser. The Web is not the same as the Internet. The Web is one of many applications built on top of the Internet.'
          }
        />
      </section>
      <section className="grid place-content-center snap bg-slate-400">
        <InfoGraphic
          key={2}
          imgUrl={doc}
          reverse={true}
          header="What is Document?"
          desc={
            'A document is a form of information that might be useful to a user or set of users. This information can be in digital and nondigital forms.Web pages are formatted in a language called Hypertext Markup Language (HTML). It this language that allows users to click through pages on the Web via links. The Web uses HTTP protocol to transmit data and share information. Browsers such as Internet Explorer, Google Chrome or Mozilla Firefox are used to access Web documents, or Web pages, which are connected via links.'
          }
        />
      </section>
    </Layout>
  );
};

export default WhatIsWeb;
