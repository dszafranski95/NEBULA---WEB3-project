import React from 'react';

const Choice = () => {
  return (
    <>
      {/* Smart links section */}
      <div className="px-4 bg-[#030303] mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                Don't have $NEBULA yet?
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
              Don't have $NEBULA yet? Don't know where you are able to buy it? just click the Buy Token button!
              </p>
            </div>
            <div className='space-x-4'>
              <button className="text-gray-300 text-lg font-medium inline-flex items-center">
                <span> Buy Token →</span>
              </button>
            </div>
          </div>
          <img alt="logo" width="420" height="120" src="/nebulas.png" />
        </div>
      </div>

      {/* Jobs section */}
      <div className="px-4 bg-[#030303] mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row-reverse">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pl-5">
            <div className="max-w-xl mb-6">
              <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                Have $NEBULA Tokens?
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
                Have $NEBULA Tokens? Stake them and earn!
              </p>
            </div>
            <div className='space-x-4'>
              <button className="text-gray-300 text-lg font-medium inline-flex items-center">
                <span> Stake →</span>
              </button>
            </div>
          </div>
          <img alt="logo" width="420" height="420" src="/stake.png" />
        </div>
      </div>
    </>
  );
};

export default Choice;
