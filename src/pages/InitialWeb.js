import React from 'react';
import DesktopScreen from '../components/DesktopScreen';
import Layout from '../components/Layout';

const InitialWeb = () => {
  return (
    <>
      <Layout id={'initialWeb'}>
        <section className="flex items-center justify-center flex-col min-h-screen pb-40">
          <h3 className="text-2xl font-bold">Intial Web</h3>
          <div className="flex pt-8 px-12 ">
            <section className="w-8/12  mr-3 resize-x">
              <DesktopScreen>
                <h3 className="text-2xl font-bold mb-3">
                  The Trojan Room Coffee Machine
                </h3>
                <span className="inline-flex">
                  <img
                    src={
                      'https://web.archive.org/web/20000304210020im_/http://www.cl.cam.ac.uk/coffee/icon.gif'
                    }
                    width={50}
                    height={50}
                    alt="Coffee"
                    className="w-fit"
                  />
                  <span className="pl-3 inline-block">
                    <a className="text-cyan-300 underline">Click here</a> for an
                    up to date picture of the Trojan Room coffee machine.
                  </span>
                </span>
                <hr />
                <h3 className="text-2xl font-bold mt-3">About this service</h3>
                <p>
                  This service was created as the first application to use a new
                  RPC mechanism designed in the Computer Laboratory - MSRPC2. It
                  runs over MSNL (Multi-Service Network Layer) - a network layer
                  protocol designed for ATM networks.
                </p>
                <p>
                  A video capture board in an Acorn Archimedes grabs one frame
                  every second and the WWW server requests a frame from it using
                  MSRPC2 (indirectly). Each frame is JPEG encoded by the
                  Archimedes.
                </p>
                <p>
                  The online coffee pot actually predates our World Wide Web
                  server by some time. If you want to know how it all came
                  about, take a look at its (non-technical){' '}
                  <a className="text-cyan-300 underline">biography</a>.
                </p>
                <p>
                  The University of Cambridge Computer Laboratory home page is{' '}
                  <a className="text-cyan-300 underline">here</a>.
                </p>
                <h3 className="text-2xl font-bold mt-3">Note:</h3>
                <ul className="list-disc ml-7">
                  <li>
                    The lights in the Trojan Room aren't always switched on, but
                    we try to leave a small lamp pointing at the coffee pot so
                    you can see it at night.
                  </li>
                  <li>
                    Apart from the fares to get here, you need to be a member of
                    the coffee club before partaking.
                  </li>
                </ul>
                <a className="text-cyan-300 underline">
                  Daniel.Gordon@cl.cam.ac.uk
                </a>
                <hr />
                <h3 className="text-2xl font-bold mt-3">Local radio report</h3>
                <p>
                  On 11th November 1994, we were visited by a reporter from our
                  local radio station, BBC Radio Cambridgeshire, to make a
                  report on this service. Naturally we connected a radio to one
                  of our workstations and relayed the broadcast over our local
                  network. The transmission was also recorded digitally, and now
                  <a className="text-cyan-300 underline">
                    you can hear it too
                  </a>{' '}
                  (1.5Mb, 3'20").
                </p>
                <p>
                  We are grateful to BBC Radio Cambridgeshire for giving
                  permission to put this audio file on the Web.
                </p>
                <p>Martyn.Johnson@cl.cam.ac.uk</p>
              </DesktopScreen>
            </section>

            <aside className="w-4/12 ">
              <h3 className="text-2xl font-bold">
                How do you feel above the website?
              </h3>
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
