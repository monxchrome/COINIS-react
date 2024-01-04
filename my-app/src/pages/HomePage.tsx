import React from "react";
import Cubic from "../components/Spline/Cubic";

const HomePage = () => {
  return (
    <div className="bg-black relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Cubic />
      </div>

      <div className="flex-row flex z-10 relative">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80b7ff] to-[#3425ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
          <div className="mx-left pl-10 max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-left">
              <div className="relative rounded-full w-screen py-1 text-sm leading-6 text-blue-900 ring-1 ring-white/10 hover:ring-white/20 bg-white text-center">
                Whether it is monetizing your users or promoting your brand... <a href="https://coinis.com/about" className="font-semibold text-blue-900"><span className="absolute inset-0" aria-hidden="true"></span>READ MORE <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">Turn voice data into transcripts with our leading Coinis AI models</h1>
              <p className="mt-6 text-lg leading-8 text-white">Built by AI experts, Coinis AI API's models include accurate speech-to-text for voice data (such as calls, virtual meetings, and podcasts), speaker detection, sentiment analysis, chapter detection, PII redaction, and more.</p>
              <div className="mt-10 flex items-left justify-left gap-x-6">
                <a href="/streaming" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="h-20 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffffff] to-[#c8c4ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
    </div>
  );
};

export default HomePage;
