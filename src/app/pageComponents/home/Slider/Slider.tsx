"use client";

import PrimaryButton from "@/app/components/Button/PrimaryButton";

//interface
import { ISlider } from "@/app/interface/interface";

//carousel
import { Carousel } from "antd";
import SliderBar from "./SliderBar";

// animation
import {
  childVariants,
  sliderVariants,
} from "@/app/animation/animation_variants/animation_variants";
import { motion } from "framer-motion";

const Slider = ({ slider_data }: ISlider) => {
  const { slider_info, companyProfile } = slider_data;
  return (
    <div>
      <Carousel autoplay={true} className="z-0">
        {slider_info?.map((data) => {
          return (
            <div key={data?.id} className="relative">
              <img
                src={`/staticImages/sliderbanner.png`}
                alt="slider_image"
                className="w-full h-full  object-cover bg-center"
              />
              <div className="absolute top-0 left-0 z-50 inset-0 flex flex-col lg:gap-10 gap-2 items-center justify-center text-white my-20 lg:mt-0">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={sliderVariants}
                  viewport={{
                    once: true,
                  }}
                  className="text-white text-center flex flex-col lg:gap-6 gap-4 z-50"
                >
                  <motion.div
                    variants={childVariants}
                    viewport={{
                      once: true,
                    }}
                    className="flex items-center justify-center"
                  >
                    <motion.div className="text-[18px] lg:text-[50px] font-bold flex items-center justify-center w-[60%]">
                      Best IT Services Empowering Your Digital Success
                    </motion.div>
                  </motion.div>
                  <motion.div
                    variants={childVariants}
                    viewport={{
                      once: true,
                    }}
                    className="lg:text-[25px] text-[16px]"
                  >
                    Creative IT Solutions for Business
                  </motion.div>
                  <motion.div
                    variants={childVariants}
                    viewport={{
                      once: true,
                    }}
                    className="z-50 flex items-center justify-center"
                  >
                    <PrimaryButton>Continue</PrimaryButton>
                  </motion.div>
                </motion.div>
              </div>

              <div className="absolute top-0 left-0  w-full h-full  text-white flex items-center">
                <div className="layout component-padding  w-full">
                  <div className="flex flex-col justify-center">
                    <SliderBar data={companyProfile} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
