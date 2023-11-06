// Tokenomy.tsx
import React from 'react';

const Tokenomy = () => {
  // Calculate the angles for the conic-gradient
  const marketingAngle = 360 * 0.1; // 10%
  const developingAngle = marketingAngle + 360 * 0.1; // Additional 10%
  const presaleAngle = developingAngle + 360 * 0.3; // Additional 30%
  // LP takes the remaining 50%, so it goes back to 0/360 degrees.

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-20 px-4 sm:px-10">
      <div className="rounded-lg bg-gray-900/80 backdrop-blur-lg shadow-xl border border-gray-700 p-8 sm:p-12 w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl text-cyan-400 font-bold mb-6 text-center">Tokenomy - $NEBULA</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          {/* Circular chart */}
          <div
            className="w-48 h-48 sm:w-96 sm:h-96 rounded-full"
            style={{
              background: `conic-gradient(
                #10b981 0deg ${marketingAngle}deg, 
                #ec4899 ${marketingAngle}deg ${developingAngle}deg, 
                #3b82f6 ${developingAngle}deg ${presaleAngle}deg,
                #8b5cf6 ${presaleAngle}deg 360deg
              )`,
            }}
          >
            {/* Center Circle */}
          </div>
          {/* Labels */}
          <div className="flex flex-col ml-0 sm:ml-12 mt-6 sm:mt-0 text-base sm:text-lg">
            <span className="text-green-400 mb-2">Marketing - 10%</span>
            <span className="text-pink-400 mb-2">Developing - 10%</span>
            <span className="text-blue-400 mb-2">Presale - 30%</span>
            <span className="text-purple-400 mb-2">LP (Liquidity Pool) - 50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomy;
 