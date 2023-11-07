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
      {/* Accordion sections for HTML, CSS, and JavaScript */}
      <AccordionSection
        title="Can I stake my $NEBULA?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AccordionSection
        title="Where can I buy $NEBULA token?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AccordionSection
        title="Will $NEBULA be burned?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
            <AccordionSection
        title="What fees on NEBULA ecosystem?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AccordionSection
        title="What is Nebula ecosystem and what problem resolves?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <AccordionSection
        title="Is NEBULA Layer2 or Sidechain?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

// Export the Accordion component as the default export
export default Accordion;
