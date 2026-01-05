"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Reduced image container size */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-60 h-60 xl:w-100 xl:h-100 mix-blend-lighten left-1 top-1 absolute"
        >
          <Image
            src="/assets/photo.jpg"
            priority
            quality={100}
            fill
            alt="Profile Image"
            className="object-contain"
          />
        </motion.div>

        {/* Square SVG */}
        <motion.svg
          className="w-61 xl:w-102 h-61 xl:h-102"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            x="3"
            y="3"
            width="500"
            height="500"
            stroke="#00ff99"
            strokeWidth="6"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 2", "16 25 92 72", "4 250 22 22"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
export default Photo;
