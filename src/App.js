import './App.css';
import Avatar from './components/Avatar';
import Header from './components/Header';
import InfoGraphic from './components/InfoGraphic';
import Layout from './components/Layout';
import Link from './components/Link';

function App() {
  return (
    <>
      <Header />
      <main>
        <Layout id="start">
          <section className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-5xl font-bold">Intro to React</h1>
            <p className="mt-5 w-1/2 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link label="Let's start" link="#intro" />
          </section>
        </Layout>
        <Layout id="intro">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h3 className="text-2xl font-bold">Before we start</h3>
            <h4 className="text-xl">Who are we?</h4>
            <div className="flex mt-5 justify-between w-1/2">
              <Avatar
                key={1}
                userName="Anand"
                desc="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
              />
              <Avatar
                key={2}
                userName="Subash"
                desc="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
              />
            </div>
            <Link link="#page1" label="No time to waste!" />
          </div>
        </Layout>
        <Layout id="page1">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h3 className="text-2xl font-bold">What is Web?</h3>
            <InfoGraphic
              key={1}
              imgUrl={'https://picsum.photos/id/237/200'}
              desc={
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
              }
            />
            <InfoGraphic
              key={2}
              imgUrl={'https://picsum.photos/id/227/200'}
              reverse={true}
              desc={
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
              }
            />
          </div>
        </Layout>
      </main>
    </>
  );
}

export default App;
