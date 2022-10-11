import React from 'react';
import Layout from '../components/Layout';

const InitialWeb = () => {
  return (
    <>
      <Layout id={'initialWeb'}>
        <section className="flex items-center justify-center flex-col min-h-screen">
          <h3 className="text-2xl font-bold">Intial Web</h3>
          <div className="flex pt-8 px-12">
            <section className="w-8/12 border-r-2 mr-3 resize-x">
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32
            </section>
            <aside className="w-4/12">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </aside>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default InitialWeb;
