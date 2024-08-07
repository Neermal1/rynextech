"use client";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { motion } from "framer-motion";
import {
  intro_photo_animation,
  top_animation,
} from "@/app/animation/animation_variants/animation_variants";
const CallToAction = () => {
  return (
    <div className="bg-lightAccent">
      <div className="layout component-padding">
        <div className="grid lg:grid-cols-2">
          <div>
            <div className="flex flex-col gap-6">
              <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={top_animation}
              >
                <div>BUSINESS AGENCY</div>
                <div className="lg:text-[50px] text-[35px] font-bold text-black">
                  We make top creative solutions for brands
                </div>
              </motion.div>
              <div>
                <PrimaryButton>Our Services</PrimaryButton>
              </div>
            </div>
          </div>
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={intro_photo_animation}
            className=""
          >
            <img
              src="https://www.pngmart.com/files/11/Information-Technology-PNG-Pic.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
