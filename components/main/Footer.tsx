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
<div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-index-footer">
    <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover-effect">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover-effect">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover-effect">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>
          
          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover-effect">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover-effect">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover-effect">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          
          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Crucial links</div>
            <a href="#!" className="flex flex-row items-center my-[15px] cursor-pointer hover-effect">
              {/* Icon can be added here */}
              <span className="text-[15px] ml-[6px]">Buy tokens</span>
            </a>
            <a href="#!" className="flex flex-row items-center my-[15px] cursor-pointer hover-effect">
              {/* Icon can be added here */}
              <span className="text-[15px] ml-[6px]">Stake</span>
            </a>
            <a href="mailto:mifwebchain@gmail.com" className="flex flex-row items-center my-[15px] cursor-pointer hover-effect">
              {/* Icon can be added here */}
              <span className="text-[15px] ml-[6px]">Whitepaper</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Nebula 2023 - Crypto Project
        </div>
      </div>
    </div>
  );
};

export default Footer;
