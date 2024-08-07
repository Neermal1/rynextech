"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  component_header_animation,
  top_animation,
} from "@/app/animation/animation_variants/animation_variants";
import StaggeredTextAnimation from "@/app/animation/reusable_animation/staggered_text_animation/StaggeredTextAnimation";

const ServiceIntro = () => {
  return (
    <div className="layout component-padding">
      <div className="flex flex-col gap-8">
        <motion.div
          variants={top_animation}
          initial="initial"
          whileInView="whileInView"
          className="lg:text-[30px] text-[20px] font-semibold"
        >
          Mobile App Development Services
        </motion.div>
        <div className="text-neutral text-[18px] lg:w-[60%]">
          <StaggeredTextAnimation
            text="Mobile app development services refer to the creation of software
          applications that are designed to run on mobile devices, such as
          smartphones and tablets. The process of developing these apps
          generally involves creating a user interface and design, coding the
          logic of the app, testing the app, and then making it available for
          download through an App Store or Google Play."
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
