// Use client directive to specify that this is a Client Component in Next.js
"use client";

import React, { useState } from 'react';

// Define the props for each accordion section
interface AccordionSectionProps {
  title: string;
  content: string;
}

// Define the AccordionSection component
const AccordionSection: React.FC<AccordionSectionProps> = ({ title, content }) => {
  // Use useState to keep track of the open/close state of each section
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex cursor-pointer items-center justify-between">
        <span>{title}</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
          className={`h-2 w-3 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
          alt="toggle"
        />
      </div>
      <div
        className={`transition-all duration-1000 ${
          isOpen ? 'max-h-screen opacity-100' : 'invisible h-0 max-h-0 opacity-0'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

// Define the main Accordion component
const Accordion: React.FC = () => {
  return (
<div className="m-2 space-y-2">
  {/* Add a big FAQ heading above the first accordion */}
  <h1 className="text-center text-3xl font-bold my-5 text-white">FAQ</h1>
  {/* Accordion sections for NEBULA ecosystem topics */}
  <AccordionSection
    title="Can I stake my $NEBULA?"
    content="Yes, you can stake your $NEBULA tokens to help secure the network and, in return, receive staking rewards. By staking, you contribute to the network's robustness and gain a chance to participate in governance decisions."
  />
  <AccordionSection
    title="Where can I buy $NEBULA token?"
    content="You can purchase $NEBULA tokens on several exchanges, including Decentralized Exchanges (DEXs) and Centralized Exchanges (CEXs). Always ensure you're using a reputable exchange and take appropriate security measures when trading."
  />
  <AccordionSection
    title="Will $NEBULA be burned?"
    content="The NEBULA ecosystem implements a token burn mechanism to ensure the deflationary nature of $NEBULA tokens. A certain percentage of transaction fees is burned, reducing the overall supply and potentially increasing the token value."
  />
  <AccordionSection
    title="What fees on NEBULA ecosystem?"
    content="Transaction fees within the NEBULA ecosystem are designed to be competitive and are used for network operations, including rewarding validators and supporting the ongoing development of the ecosystem."
  />
  <AccordionSection
    title="What is Nebula ecosystem and what problem resolves?"
    content="The Nebula ecosystem is a decentralized platform that aims to solve scalability and interoperability issues in blockchain technology. It provides a seamless environment for deploying decentralized applications (dApps) and smart contracts, with a focus on user experience and developer friendliness."
  />
  <AccordionSection
    title="Is NEBULA Layer2 or Sidechain?"
    content="NEBULA functions as a Layer 2 scaling solution, operating on top of an existing blockchain to provide faster transactions and lower fees. Unlike sidechains, Layer 2 solutions inherit the security model of the underlying blockchain, which in the case of NEBULA, enhances its reliability and security."
  />
</div>

  );
};

// Export the Accordion component as the default export
export default Accordion;
