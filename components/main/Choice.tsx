"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Choice = () => {
  const router = useRouter();

  // Rozszerzona lista przykładowych transakcji
  const transactions = [
    { id: 1, token: 'ECY', amount: 100, price: 1.00, direction: 'ECY to USDT' },
    { id: 2, token: 'ECY', amount: 150, price: 1.50, direction: 'ECY to USDT' },
    { id: 3, token: 'ECY', amount: 200, price: 1.75, direction: 'ECY to USDT' },
    { id: 4, token: 'ECY', amount: 250, price: 2.00, direction: 'ECY to USDT' },
    { id: 5, token: 'ECY', amount: 300, price: 2.25, direction: 'ECY to USDT' },
    { id: 6, token: 'ECY', amount: 350, price: 2.50, direction: 'ECY to USDT' },
    { id: 7, token: 'ECY', amount: 400, price: 2.75, direction: 'ECY to USDT' },
    { id: 8, token: 'ECY', amount: 450, price: 3.00, direction: 'ECY to USDT' },
    { id: 9, token: 'ECY', amount: 500, price: 3.25, direction: 'ECY to USDT' },
    { id: 10, token: 'ECY', amount: 550, price: 3.50, direction: 'ECY to USDT' },
    { id: 11, token: 'ECY', amount: 600, price: 3.75, direction: 'ECY to USDT' },
    { id: 12, token: 'ECY', amount: 650, price: 4.00, direction: 'ECY to USDT' },
    { id: 13, token: 'ECY', amount: 700, price: 4.25, direction: 'ECY to USDT' },
    { id: 14, token: 'ECY', amount: 750, price: 4.50, direction: 'ECY to USDT' },
    { id: 15, token: 'ECY', amount: 800, price: 4.75, direction: 'ECY to USDT' },
    // Możesz dodać więcej transakcji zgodnie z potrzebą
  ];

  const handleSellTokens = () => {
    router.push('/sell-tokens');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Transactions</h1>
      <button
        onClick={handleSellTokens}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        SELL YOUR TOKENS
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Token
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Price (USDT)
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {transaction.token}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{transaction.amount}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{transaction.price}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-300">
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Choice;
