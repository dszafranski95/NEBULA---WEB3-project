// Use client directive to specify that this is a Client Component in Next.js
"use client";

import React, { useState } from 'react';

// Add custom styles for the background and text colors
const customStyles = {
  backgroundColor: 'white', // Replace with your hex color code for background
  color: '#111', // Replace with your hex color code for text if necessary
};

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
      style={customStyles}
      className="group flex flex-col gap-2 rounded-lg p-5"
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
    <div 
      id="faq" 
      className="m-2 space-y-2 w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto" // This sets the max width and centers the FAQ
    >
      {/* Add a big FAQ heading above the first accordion */}
      <h1 className="text-center text-3xl font-bold my-5 text-transparent bg-clip-text bg-gradient-to-r from-[#127C8C] to-[#2FAAC6]">FAQ</h1>
      {/* Accordion sections for InnoTechCloud topics */}
      <AccordionSection
        title="What services does InnoTechCloud offer?"
        content="InnoTechCloud offers a range of services including Cloud Disk Space, Automatic Data Backups, File Synchronization and Sharing, Data Archiving Services, Disk Space Management Services, Data Lifecycle Management, and Cloud Data Encryption."
      />
      <AccordionSection
        title="How does InnoTechCloud ensure data security?"
        content="Data security is a top priority at InnoTechCloud. We use advanced encryption techniques and automatic backup systems to ensure the security and operational continuity of your data."
      />
      <AccordionSection
        title="Can I scale my resources with InnoTechCloud?"
        content="Yes, our cloud solutions are highly flexible and scalable. You can easily scale your resources up or down according to your evolving business needs and requirements."
      />
      <AccordionSection
        title="What makes InnoTechCloud different from other cloud service providers?"
        content="InnoTechCloud stands out due to its use of advanced technology, commitment to security and reliability, continuous innovation in services, and the global reach of our solutions."
      />
      <AccordionSection
        title="What industries does InnoTechCloud cater to?"
        content="We support a variety of industries, from small startups to large corporations, providing them with tools for storing, managing, and analyzing data."
      />
      <AccordionSection
        title="How does InnoTechCloud contribute to sustainable development?"
        content="InnoTechCloud is committed to sustainable development. We minimize our environmental impact through energy-efficient practices and innovative business strategies."
      />
    </div>
  );
};

// Export the Accordion component as the default export
export default Accordion;
