"use client";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IWhatWeDo } from "@/app/interface/interface";
import { motion } from "framer-motion";

const WhatWeDo = ({ what_we_do }: IWhatWeDo) => {
  return (
    <div className="layout component-padding">
      <div className="flex flex-col gap-20">
        <div>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div>
              <ComponentHeader
                data={{
                  heading:
                    "Branding, websites and digital experiences, crafted with intelligence, love, precision and creativity.",
                  subheading: "What We Do",
                }}
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="grid lg:grid-cols-4">
            {what_we_do?.map((data, index) => {
              return (
                <motion.div
                  key={index}
                  className="flex items-center justify-center group"
                  initial={{
                    y: 100,
                  }}
                  whileInView={{
                    y: 0,
                    transition: {
                      type: "spring",
                      delay: 0.1 * index,
                      stiffness: 300,
                    },
                  }}
                >
                  <div className="flex flex-col items-center justify-center gap-6 text-center p-6 group-hover:bg-secondary rounded-[8px] m-6">
                    <img src={data?.image_link} alt="" className="h-[120px] " />
                    <div className=" text-black">
                      <div className="text-[20px] font-semibold text-center group-hover:text-white  text-black">
                        {data?.title}
                      </div>
                    </div>
                  </div>
                  <div className="h-[40%] text-center lg:w-[0.8%] flex items-center justify-center bg-gray-100"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
