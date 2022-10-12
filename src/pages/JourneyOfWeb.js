import React, { useState } from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import right from '../assets/pngs/right.png';
const webs = [
  {
    id: '1',
    title: "Early 90's",
    imgUrl:
      'https://media2.giphy.com/media/fuQjjFnoHw9Cym7iLz/giphy.gif?cid=ecf05e47ev4e57mjfp8hk766ta6ta5wyukeptowpgyoiiqrs&rid=giphy.gif&ct=g',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea ducimus, ipsa expedita voluptate, ab aut explicabo fuga numquam quis suscipit sint eius provident id corporis cupiditate dolore ex perspiciatis?',
  },
  {
    id: '2',
    title: "Early 2010's",
    imgUrl:
      'https://media2.giphy.com/media/l0MYLoXAw7JSyHiZG/giphy.gif?cid=ecf05e47alhnyj4zq217vl5v7nn4fa4tigmqbsjgp980la0n&rid=giphy.gif&ct=g',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea ducimus, ipsa expedita voluptate, ab aut explicabo fuga numquam quis suscipit sint eius provident id corporis cupiditate dolore ex perspiciatis?',
  },
  {
    id: '3',
    title: 'Modren Web',
    imgUrl:
      'https://media0.giphy.com/media/d31vTpVi1LAcDvdm/200.webp?cid=ecf05e47wc2cc1vwficllplla33ol0cnk901gyj5z1aiae25&rid=200.webp&ct=g',
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
          <h3 className="text-4xl font-bold pb-12">Journey of Web</h3>

          <section className="flex gap-3">
            {webs
              .filter((web) =>
                selectedCard ? (selectedCard === web.id ? web : false) : web
              )
              .map((web) => (
                <Card
                  key={web.id}
                  id={web.id}
                  imgUrl={web.imgUrl}
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
