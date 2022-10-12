import React, { useState } from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import right from '../assets/pngs/right.png';
const webs = [
  {
    id: '1',
    title: 'Initial Web',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea ducimus, ipsa expedita voluptate, ab aut explicabo fuga numquam quis suscipit sint eius provident id corporis cupiditate dolore ex perspiciatis?',
  },
  {
    id: '2',
    title: 'Intermediate Web',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea ducimus, ipsa expedita voluptate, ab aut explicabo fuga numquam quis suscipit sint eius provident id corporis cupiditate dolore ex perspiciatis?',
  },
  {
    id: '3',
    title: 'Modren Web',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea ducimus, ipsa expedita voluptate, ab aut explicabo fuga numquam quis suscipit sint eius provident id corporis cupiditate dolore ex perspiciatis?',
  },
];
const JourneyOfWeb = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <>
      <Layout id={'journeyOfWeb'} background="bg-slate-200">
        <section className="flex flex-col items-center justify-center min-h-screen">
          <h3 className="text-2xl font-bold pb-12">Journey of Web</h3>

          <section className="flex gap-3">
            {webs
              .filter((web) =>
                selectedCard ? (selectedCard === web.id ? web : false) : web
              )
              .map((web) => (
                <Card
                  key={web.id}
                  id={web.id}
                  title={web.title}
                  subtitle={web?.subtitle}
                  setSelectedCard={setSelectedCard}
                />
              ))}
          </section>
        </section>
      </Layout>
    </>
  );
};

export default JourneyOfWeb;
