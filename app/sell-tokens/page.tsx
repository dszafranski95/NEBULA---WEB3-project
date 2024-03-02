"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaExchangeAlt, FaBitcoin, FaDollarSign } from 'react-icons/fa'; // Importowanie ikon

const SellTokensPage = () => {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [direction, setDirection] = useState('ECY to USDT');
  const [amountPlaceholder, setAmountPlaceholder] = useState('Enter amount of ECY');
  const [pricePlaceholder, setPricePlaceholder] = useState('Enter price in USDT');

  const handleSwapDirection = () => {
    setDirection(prevDirection => {
      const newDirection = prevDirection === 'ECY to USDT' ? 'USDT to ECY' : 'ECY to USDT';
      // Aktualizacja placeholderów i ikon na podstawie nowego kierunku
      setAmountPlaceholder(newDirection === 'ECY to USDT' ? 'Enter amount of ECY' : 'Enter amount of USDT');
      setPricePlaceholder(newDirection === 'ECY to USDT' ? 'Enter price in USDT' : 'Enter price in ECY');
      return newDirection;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Transaction:', amount, direction, 'for', price, 'USDT');
    router.push('/'); // Redirect to the home page after submission
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Token Exchange</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
          <div className="flex items-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            {direction === 'ECY to USDT' ? <FaBitcoin className="text-yellow-500 mr-2" /> : <FaDollarSign className="text-green-500 mr-2" />}
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1"
              placeholder={amountPlaceholder}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
          <div className="flex items-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            {direction === 'ECY to USDT' ? <FaDollarSign className="text-green-500 mr-2" /> : <FaBitcoin className="text-yellow-500 mr-2" />}
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="flex-1"
              placeholder={pricePlaceholder}
            />
          </div>
        </div>
        <div className="mb-4 text-center">
          <button
            type="button"
            onClick={handleSwapDirection}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline inline-flex items-center"
          >
            <FaExchangeAlt className="mr-2" /> Swap Direction
          </button>
          <p className="text-gray-700 text-sm font-bold mt-2">{direction}</p>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellTokensPage;
