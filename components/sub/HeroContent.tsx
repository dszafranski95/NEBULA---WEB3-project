"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const upDownAnimation = {
  hidden: { y: 0 },
  visible: {
    y: [-10, 10, -10, 10, -10],
    transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const rotateAnimation = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
    }
  }
};

const HeroContent = () => {
  const router = useRouter(); // Initialize the router

  // Function to handle click on 'Learn More'
  const handleLearnMoreClick = () => {
    router.push('/project'); // Navigate to '/project' route
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#127C8C] to-[#2FAAC6]">
              {" "}
              our priority{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D9EC1] to-[#5A5E77]">
              {" "}
              is to{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[snow]">

            provide cloud{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111] to-[#444]">
              {" "}
              solutions.{" "}
            </span>
          </span>
        </motion.div>

        <motion.a
          onClick={handleLearnMoreClick}
          variants={slideInFromLeft(1)}
          className="py-2 text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-[#24687A] hover:bg-[#42687A] transition-colors duration-300"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <motion.div variants={rotateAnimation} animate="rotate">
          <Image
            src="/pngwing.com(18).png"
            alt="work icons"
            height={500}
            width={450}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
