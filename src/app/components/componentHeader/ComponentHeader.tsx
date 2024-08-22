"use client";

import { component_header_animation } from "@/app/animation/animation_variants/animation_variants";
import { IComponentHeader } from "@/app/interface/interface";
import { motion } from "framer-motion";

const ComponentHeader = ({ data }: IComponentHeader) => {
  if (data) {
    return (
      <motion.div
        variants={component_header_animation}
        initial="initial"
        whileInView="whileInView"
        className=" flex flex-col "
      >
        <motion.div className="lg:text-[18px]  text-neutral text-[14px] font-medium">
          {data?.subheading?.toUpperCase()}
        </motion.div>
        <motion.div className="relative">
          <div className="lg:text-[38px] text-[25px] font-semibold">
            {data?.heading &&
              data?.heading
                .split(" ")
                .map((word: any, index: any, array: any) => {
                  if (array.length === 2 && index === array.length - 1) {
                    return (
                      <span key={index} className="text-secondary">
                        {word}
                      </span>
                    );
                  } else if (array.length === 3 && index >= array.length - 2) {
                    return (
                      <span key={index} className="text-secondary">
                        {word}{" "}
                      </span>
                    );
                  } else if (array.length > 3 && index >= array.length - 3) {
                    return (
                      <span key={index} className="text-secondary">
                        {word}{" "}
                      </span>
                    );
                  } else {
                    return word + " ";
                  }
                })}
          </div>
        </motion.div>
      </motion.div>
    );
  }
};

export default ComponentHeader;
