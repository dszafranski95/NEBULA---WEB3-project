// Navbar.tsx
"use client";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Socials } from "@/constants"; // Assumed path, update with actual path to your constants
import WalletConnectButton from './WalletConnect'; // Załóżmy, że ścieżka jest poprawna


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (sectionId) => {
    // Navigate to the section on the home page
    const pathname = window.location.pathname;
    const hash = '#' + sectionId;

    if (pathname !== '/') {
      router.push('/' + hash);
    } else {
      window.location.hash = hash;
    }
  };

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
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#87ceeb]/50 bg-transparent backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/pngwing.com(20).png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-[#2FAAC6] to-[#127C8C] shadow-lg shadow-[#BCE3F9]/50">
            InnoTechCloud
          </span>
        </a>

        <div className="hidden md:flex w-[700px] h-full flex flex-row items-center justify-between mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[30px] py-[10px] rounded-full text-[#BCE3F1] shadow-md shadow-[#BCE3F9] space-x-5 hover:text-[#A9CCE0] transition-colors duration-200">
            <a onClick={() => handleNavClick('about')} className="cursor-pointer hover:text-red-300">
              About Us
            </a>
            <a onClick={() => handleNavClick('faq')} className="cursor-pointer hover:text-green-500">
              FAQ
            </a>
            <a onClick={() => handleNavClick('contact-us')} className="cursor-pointer hover:text-yellow-500">
              Contact Us
            </a>
            <WalletConnectButton /> {/* Dodanie przycisku Connect Wallet */}

          </div>
        </div>

        <button className="md:hidden flex items-center p-2 bg-black rounded" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 
              <Image src="/toggle-close.png" width={24} height={24} alt="Close Icon"/> : 
              <Image src="/toggle-open.png" width={24} height={24} alt="Menu Icon"/>
          }
        </button>
        {menuOpen && (
            <div className="absolute top-[65px] left-0 w-full bg-gradient-to-r from-[#BCE3F9] via-[#B2D7EC] to-[#A9CCE0] flex flex-col space-y-4 p-4 shadow-lg">
              <a onClick={() => handleNavClick('offer')} className="text-[#1A6192] sm:font-light cursor-pointer hover:text-[#1A9192]">
                Our Offer
              </a>
              <a onClick={() => handleNavClick('about')} className="text-[#1A6192] sm:font-light cursor-pointer hover:text-[#1A9192]">
                About Us
              </a>
              <a onClick={() => handleNavClick('why-us')} className="text-[#1A6192] sm:font-light cursor-pointer hover:text-[#A9CCE0]">
                Why Us?
              </a>
              <a onClick={() => handleNavClick('faq')} className="text-[#1A6192] sm:font-light cursor-pointer hover:text-[#A9CCE0]">
                FAQ
              </a>
              <a onClick={() => handleNavClick('contact-us')} className="text-[#1A6192] sm:font-light cursor-pointer hover:text-[#A9CCE0]">
                Contact Us
              </a>
              <WalletConnectButton /> {/* Dodanie przycisku Connect Wallet */}
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