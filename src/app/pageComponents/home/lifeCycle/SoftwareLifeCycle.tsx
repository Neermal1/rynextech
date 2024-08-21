"use client";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import React from "react";
import { motion } from "framer-motion";
import { intro_photo_animation } from "@/app/animation/animation_variants/animation_variants";

const SoftwareLifeCycle = () => {
  return (
    <div className="layout component-padding flex flex-col gap-20">
      <div className="text-center flex items-center justify-center">
        <div className="lg:w-[60%] flex items-center justify-center ">
          <ComponentHeader
            data={{
              heading: "Our Software Agency’s Development Cycle",
              subheading: "",
            }}
          />
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <motion.div
          variants={intro_photo_animation}
          initial="initial"
          whileInView="whileInView"
        >
          <img
            src="https://www.intellectsoft.net/assets/4fe29ef8/img/solution-lifecycle/solution-lifecycle.svg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareLifeCycle;
