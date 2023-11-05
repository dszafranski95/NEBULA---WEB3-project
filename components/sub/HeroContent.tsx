"use client";

import React from "react";
import { motion } from "framer-motion";
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
    y: [-10, 10, -10, 10, -10], // move up and down by 10 pixels
    transition: {
      duration: 10, // adjust the duration to control the speed of the movement
      ease: "easeInOut",
      repeat: Infinity, // loop the animation indefinitely
    },
  },
};


const HeroContent = () => {
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
            Find out the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              $NEBULA{" "}
            </span>
            ecosystem.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          NEBULA, as a Layer 2 solution, leverages Ethereum's security while greatly enhancing transaction speed and efficiency. 
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <motion.div variants={upDownAnimation}>
          <Image
            src="/blockchain.png"
            alt="work icons"
            height={900}
            width={650}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
