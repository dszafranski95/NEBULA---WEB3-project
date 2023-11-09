
import React from 'react';

const RoadMap = () => {
  return (
    <section>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">$NEBULA Journey</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">The Path of $NEBULA</p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Trace the trajectory of $NEBULA from its inception to becoming a leading cryptocurrency. Explore the milestones that define our growth.
            </p>
            <a href="#"
              className="bg-transparent mr-auto hover:bg-yellow-500 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              Explore Now</a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ right: '50%', border: '2px solid #777', borderRadius: '1%' }}></div>
                <div className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ left: '50%', border: '2px solid #777', borderRadius: '1%' }}></div>

                {/* Timeline Item */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-indigo-500">
                      RoadMap
                    </h1>
                  </div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-500">Q1 2022</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Whitepaper Release</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Unveiling of the $NEBULA whitepaper outlining the project’s vision, technology, and roadmap.
                    </p>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-500">Q2 2022</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Token Launch</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Launch of the $NEBULA token and its listing on major exchanges. Begin the journey to the moon!
                    </p>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-500">Q3 2022</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Platform Beta Release</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Rollout of the beta version of the $NEBULA platform for community testing and feedback.
                    </p>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300">Q4 2022</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Mainnet Launch</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      $NEBULA mainnet goes live! A significant milestone for the $NEBULA community and ecosystem.
                    </p>
                  </div>
                </div>
              </div>
              <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
