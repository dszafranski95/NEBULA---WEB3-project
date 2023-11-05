"use client"; // This line tells Next.js that Navbar is a Client Component

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import WalletConnect from './WalletConnect';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/nabula.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Nebula
          </span>
        </a>

        <div className="hidden md:flex w-[700px] h-full flex flex-row items-center justify-between mr-20">
  <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[30px] py-[10px] rounded-full text-gray-200 space-x-5 hover:text-white transition-colors duration-200">
    <a href="#skills" className="cursor-pointer hover:text-red-500">
      About
    </a>
    <a href="#skills" className="cursor-pointer hover:text-blue-500">
      Team
    </a>
    <a href="#skills" className="cursor-pointer hover:text-green-500">
      Buy Token
    </a>
    <a href="#projects" className="cursor-pointer hover:text-yellow-500">
      Stake
    </a>
    <a href="#projects" className="cursor-pointer hover:text-purple-500">
      About Us
    </a>
    <a className="cursor-pointer hover:text-purple-500">
      <WalletConnect />
    </a>

  </div>
</div>


        <button className="md:hidden flex items-center p-2 bg-black rounded" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 
                <Image src="/toggle-close.png" width={24} height={24} alt="Close Icon"/> : 
                <Image src="/toggle-open.png" width={24} height={24} alt="Menu Icon"/>
            }
        </button>

        {menuOpen && (
            <div className="absolute top-[65px] left-0 w-full bg-black flex flex-col space-y-4 p-4 shadow-lg">
                <a href="#skills" className="text-gray-300 sm:font-light cursor-pointer hover:text-gray-500">
                    About
                </a>
                <a href="#skills" className="text-gray-300 sm:font-light cursor-pointer hover:text-gray-500">
                    Team
                </a>
                <a href="#skills" className="text-gray-300 sm:font-light cursor-pointer hover:text-gray-500">
                    Buy Token
                </a>
                <a href="#projects" className="text-gray-300 sm:font-light cursor-pointer hover:text-gray-500">
                    Stake
                </a>
                <a href="#projects" className="text-gray-300 sm:font-light cursor-pointer hover:text-gray-500">
                    About Us
                </a>
                <a className="text-gray-300 sm:font-light cursor-pointer hover:text-gray-500">
                  <WalletConnect />
                </a>
            </div>
        )}

        <div className="flex flex-row gap-5">
            {Socials.map((social) => (
                <a href="#" target="_blank" rel="noopener noreferrer" key={social.name} className="cursor-pointer hover:opacity-75 transition-opacity duration-150">
                    <Image
                        src={social.src}
                        alt={social.name}
                        width={24}
                        height={24}
                        className="cursor-pointer"
                    />
                </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
