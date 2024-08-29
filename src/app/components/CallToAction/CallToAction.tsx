"use client";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { motion } from "framer-motion";
import {
  intro_photo_animation,
  top_animation,
} from "@/app/animation/animation_variants/animation_variants";
import Link from "next/link";
const CallToAction = () => {
  return (
    <div
      className="relative h-[50vh] bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: `url(../staticImages/sliderbanner.png)`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 h-full object-contain w-full  bg-[black] opacity-60"></div>

      <div className=" relative text-white  layout component-padding">
        <div className="">
          <div>
            <div className="flex flex-col gap-6 items-center justify-center">
              <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={top_animation}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-center">BUSINESS AGENCY</div>
                <div className="lg:text-[50px] text-[25px] font-bold text-center ">
                  We make top creative solutions for brands
                </div>
              </motion.div>
              <Link href="/service">
                <PrimaryButton>Our Services</PrimaryButton>
              </Link>
            </div>
          </div>
          {/* <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={intro_photo_animation}
            className=""
          >
            <img
              src="https://www.pngmart.com/files/11/Information-Technology-PNG-Pic.png"
              alt=""
            />
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
