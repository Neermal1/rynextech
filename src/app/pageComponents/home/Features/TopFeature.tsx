"use client";
import PrimaryButton from "@/app/components/Button/PrimaryButton";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { ITopFeature } from "@/app/interface/interface";
import { motion } from "framer-motion";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import feature from "../../../../../public/animation/json/features_json.json";

const TopFeature = ({ feature_data }: ITopFeature) => {
  const featureReference: any = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: featureReference.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: feature,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className="layout component-padding">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        className="grid lg:grid-cols-12 gap-[120px] items-start"
      >
        <motion.div
          // variants={left_animation}
          // variants={left_animation(isMobile)}
          className="lg:col-span-5  rounded-md"
        >
          <div className="relative">
            <div ref={featureReference}></div>
          </div>
        </motion.div>
        <motion.div
          // variants={right_animation(isMobile)}
          className="lg:col-span-7 flex flex-col gap-10"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-10">
              <ComponentHeader
                data={{
                  heading: "TURNING IDEAS INTO BUSINESSES",
                  subheading: "corporate service",
                }}
              />
            </div>
            <div className="text-gray-400">
              It covers essential steps such as market research, business
              planning, securing funding, and navigating the challenges of
              startup growth, providing practical advice and real-world examples
              to inspire and equip readers for entrepreneurial success
            </div>
          </div>
          <div className="flex flex-col gap-10">
            {feature_data?.map((data, index) => {
              return (
                <div key={data?.id}>
                  <motion.div
                    initial={{
                      y: 10,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,

                      transition: {
                        delay: 0.4 * data?.id,
                        duration: 0.8,
                        staggerChildren: 0.8,
                        type: "spring",
                        stiffness: 600,
                      },
                    }}
                    className="flex items-start gap-6 border-b-[2px] border-gray-600 pb-3"
                  >
                    <div className="mt-[1px] text-gray-600 opacity-50 lg:text-[25px] font-semibold">
                      0{index + 1}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="lg:text-[22px] text-[20px] font-bold">
                        {data?.title}
                      </div>
                      <div className="text-gray-600 opacity-50">
                        {data?.description}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
          <div className="">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TopFeature;
