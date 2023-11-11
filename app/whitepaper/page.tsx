"use client";


import React from 'react';
import Image from 'next/image';
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { AiOutlineDownload } from 'react-icons/ai';

const Whitepaper = () => {

  // Function to handle the download of the whitepaper
  const handleDownload = () => {
    const text = "Your whitepaper content goes here..."; // Replace this with your whitepaper content
    const blob = new Blob([text], { type: 'text/plain' });
    const href = URL.createObjectURL(blob);

    // Create a link and trigger the download
    const link = document.createElement('a');
    link.href = href;
    link.download = 'whitepaper.txt';
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <div className="bg-[#030303] text-white overflow-y-scroll overflow-x-hidden">
      <Navbar />

      <main className="pt-[65px] min-h-screen py-10 px-4 md:px-20">
        <section className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">NEBULA Layer 2 - Whitepaper</h1>
          <p className="mb-8 max-w-3xl mx-auto">
            An in-depth exploration of the NEBULA Layer 2 scaling solution for the Ethereum ecosystem, focusing on scalability, security, and sustainability.
          </p>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
          <p className="max-w-4xl mx-auto text-lg">
            The NEBULA protocol represents a transformative approach to Ethereum scalability and interoperability. Designed with a focus on user experience, NEBULA's Layer 2 solution leverages state-of-the-art plasma chains to enable rapid and cost-effective transactions without compromising on decentralization or security.
          </p>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4">Technology Overview</h2>
          <p className="max-w-4xl mx-auto text-lg">
            At its core, NEBULA's technology is built upon a robust plasma chain architecture that extends the capabilities of the Ethereum mainnet. By batching transactions off-chain and settling them in periodic intervals on-chain, NEBULA significantly reduces the network load, allowing for a throughput previously unattainable on Layer 1 solutions.
          </p>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4">Roadmap</h2>
          <p className="max-w-4xl mx-auto text-lg">
            Our development trajectory is ambitious yet methodical. In Q1, we introduced the NEBULA testnet, followed by extensive community testing in Q2. The deployment of the mainnet is scheduled for Q3, with subsequent quarterly updates to enhance system performance and introduce new features such as cross-chain support and smart contract scalability.
          </p>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4">Tokenomics</h2>
          <p className="max-w-4xl mx-auto text-lg">
            The NEBULA token ($NBL) is designed to facilitate transaction processing and governance on the network. Holding $NBL not only allows users to transact on the platform but also grants them voting rights in the NEBULA DAO, ensuring a community-driven development approach. The initial supply of $NBL is capped at 500 million, with a deflationary mechanism to ensure long-term value retention.
          </p>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4">Governance</h2>
          <p className="max-w-4xl mx-auto text-lg">
            In line with our commitment to decentralization, the NEBULA DAO serves as the decision-making body for the protocol. Token holders can propose upgrades or changes, and a consensus-driven voting mechanism ensures that the direction of NEBULA aligns with the interests of its community.
          </p>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4">Security Measures</h2>
          <p className="max-w-4xl mx-auto text-lg">
            Security is a non-negotiable aspect of the NEBULA protocol. Our multi-layered security approach includes regular smart contract audits, a bug bounty program, and real-time monitoring systems to swiftly identify and rectify potential vulnerabilities.
          </p>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4">Sustainability</h2>
          <p className="max-w-4xl mx-auto text-lg">
            Sustainability is at the forefront of the NEBULA ethos. Our Layer 2 solution not only minimizes transaction fees but also significantly reduces the energy footprint of each transaction, aligning with the global push towards eco-friendly blockchain solutions.
          </p>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4">Partnerships and Collaborations</h2>
          <p className="max-w-4xl mx-auto text-lg">
            NEBULA actively seeks partnerships with other projects in the Ethereum ecosystem to foster interoperability and shared innovation. Our collaborations with wallets, exchanges, and other Layer 2 solutions aim to create a seamless experience for users across the blockchain landscape.
          </p>
        </section>

        <div className="flex justify-center mb-10">
        <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={handleDownload} // Attach the download event here
          >
            <AiOutlineDownload className="mr-2" /> Download Whitepaper
          </button>
        </div>
      </main>

    </div>
  );
};

export default Whitepaper;
