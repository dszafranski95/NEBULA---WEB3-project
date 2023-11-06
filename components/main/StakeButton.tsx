// StakeButton.tsx
import React from 'react';

const StakeButton = () => {
  return (
    <button
      className="text-white bg-purple-600 hover:bg-purple-700 border border-solid border-purple-500 hover:border-transparent transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg py-2 px-4"
      style={{ backgroundColor: 'rgba(138, 43, 226, 0.7)' }}
    >
      Stake your tokens
    </button>
  );
};

export default StakeButton;
