"use client";
import { top_animation } from "@/app/animation/animation_variants/animation_variants";
import TextSplitColor from "@/app/helperFunctions/TextSplitColor";
import { motion } from "framer-motion";
import { CiMobile3 } from "react-icons/ci";

const ServicePlatforms = () => {
  const servicePlatformList = [
    {
      icon: <CiMobile3 />,
      title: "Native Mobile App Development",
      desc: "Our mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements.",
    },
    {
      icon: <CiMobile3 />,
      title: "Hybrid Mobile App Development",
      desc: "Cross-platform apps that can work in different environments thanks to a unique blend of native and web app technologies.",
    },
    {
      icon: <CiMobile3 />,
      title: "Progressive Web App Development",
      desc: "With Progressive Web Apps, we deliver native-like capabilities and installability while reaching anyone, anywhere, on any device with a single codebase.",
    },
    {
      icon: <CiMobile3 />,
      title: "Wearables and Embedded Software",
      desc: "We can create companion apps for a number of wearable devices, integrate with smart devices or proprietary peripherals.",
    },
  ];
  return (
    <div className="bg-lightAccent text-black">
      <div className="layout component-padding flex flex-col gap-20">
        <div className="flex items-center justify-center">
          <motion.div
            variants={top_animation}
            initial="initial"
            whileInView="whileInView"
            className="flex items-center justify-center flex-col gap-4 lg:w-[60%] text-center"
          >
            <div className="lg:text-[30px] text-[25px] font-bold">
              <TextSplitColor text=" MOBILE APPLICATION DEVELOPMENT SERVICES FOR VARIOUS PLATFORMS" />
            </div>
            <div>
              Our mobile app developers have over a decade-long expertise in
              building solutions that meet market needs, empower companies brand
              identity, and encourage business growth and expansion.
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-4 gap-10">
          {servicePlatformList?.map((data, index) => {
            return (
              <motion.div
                key={index}
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
                className="flex flex-col gap-6"
              >
                <div className="lg:text-[45px] text-[40px]">{data?.icon}</div>
                <div className="flex flex-col gap-2">
                  <div className=" text-[20px]">{data?.title}</div>
                  <div>{data?.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicePlatforms;
