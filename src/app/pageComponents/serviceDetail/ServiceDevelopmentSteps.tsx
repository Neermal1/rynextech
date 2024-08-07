"use client";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { intro_photo_animation } from "@/app/animation/animation_variants/animation_variants";

const ServiceDevelopmentSteps = () => {
  const development_steps = [
    {
      title: "A shared understanding of project objectives",
    },
    {
      title: "Business requirements transformed into functional",
    },
    {
      title: "The initial vision of the architecture of the project",
    },
    {
      title: "A project plan that includes risks and budgets",
    },
    {
      title: "A clear product strategy and development roadmap",
    },
  ];
  return (
    <div className="layout component-padding flex flex-col gap-20">
      <div className="flex items-center justify-center text-center">
        <div className="flex items-center justify-center lg:w-[60%]">
          <ComponentHeader
            data={{
              heading: "KEY STEPS IN OUR MOBILE APP DEVELOPMENT PROCESS",
              subheading: "",
            }}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-8 gap-20">
        <div className="bg-white drop-shadow-md p-6 rounded-md lg:col-span-3">
          <div className="flex flex-col gap-2">
            {development_steps?.map((data, index) => {
              return (
                <motion.div
                  initial={{
                    y: 20,
                  }}
                  whileInView={{
                    y: 0,
                    transition: {
                      type: "spring",
                      delay: 0.1 * index,
                      stiffness: 300,
                    },
                  }}
                  key={index}
                  className="grid lg:grid-cols-6"
                >
                  <div className="h-[4vh] w-[4vh] bg-hover rounded-full flex items-center justify-center  lg:col-span-1">
                    <FaArrowDownLong />
                  </div>
                  <div className="lg:col-span-5">{data?.title}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="lg:col-span-5">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={intro_photo_animation}
          >
            <img
              src="https://www.intellectsoft.net/assets/730044a8/img/platforms/Group_2111.svg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDevelopmentSteps;
