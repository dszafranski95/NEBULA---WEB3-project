// Footer.tsx
import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from 'react-icons/rx';

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-800 shadow-lg p-[15px] z-index-footer">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-[15px]">Community</div>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center mb-[15px] cursor-pointer hover:text-[#333]">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center mb-[15px] cursor-pointer hover:text-[#333]">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center mb-[15px] cursor-pointer hover:text-[#333]">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>
          
          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-[15px]">Important</div>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center mb-[15px] cursor-pointer hover:text-[#333]">
              <span className="text-[15px] ml-[6px]">Why Us?</span>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center mb-[15px] cursor-pointer hover:text-[#333]">
              <span className="text-[15px] ml-[6px]">Contact Us</span>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center mb-[15px] cursor-pointer hover:text-[#333]">
              <span className="text-[15px] ml-[6px]">Learn More</span>
            </a>
          </div>
          
          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-[15px]">Crucial links</div>
            <a href="#!" className="flex flex-row items-center mb-[15px] cursor-pointer hover:text-[#333]">
              {/* Icon can be added here */}
              <span className="text-[15px] ml-[6px]">Our Offer</span>
            </a>
            <a href="#!" className="flex flex-row items-center mb-[15px] cursor-pointer hover:text-[#333]">
              {/* Icon can be added here */}
              <span className="text-[15px] ml-[6px]">About Us</span>
            </a>
            <a href="mailto:mifwebchain@gmail.com" className="flex flex-row items-center mb-[15px] cursor-pointer hover:text-[#333]">
              {/* Icon can be added here */}
              <span className="text-[15px] ml-[6px]">FAQ</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; InnoTechCloud 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
