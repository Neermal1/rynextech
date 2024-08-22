"use client";
import { IStaggeredTextAnimation } from "@/app/interface/interface";
import React from "react";
import { motion } from "framer-motion";

const StaggeredTextAnimation = ({ text }: IStaggeredTextAnimation) => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    whileInView: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const words = text.split(" ");
  return (
    <div>
      {words.map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="initial"
          whileInView="whileInView"
          variants={textVariants}
          style={{ display: "inline-block", marginRight: "5px" }}
        >
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: word,
            }}
          />
        </motion.span>
      ))}
    </div>
  );
};

export default StaggeredTextAnimation;
