// BuyTokenButton.tsx
import React from 'react';

const BuyTokenButton = () => {
  return (
    <button
      className="text-white bg-blue-600 hover:bg-blue-700 border border-solid border-blue-500 hover:border-transparent transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg py-2 px-4"
      style={{ backgroundColor: 'rgba(29, 78, 216, 0.7)' }}
    >
      Buy $NEBULA
    </button>
  );
};

export default BuyTokenButton;
