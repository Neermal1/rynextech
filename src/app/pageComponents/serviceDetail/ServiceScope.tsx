"use client";
import {
  intro_photo_animation,
  top_animation,
} from "@/app/animation/animation_variants/animation_variants";
import TextSplitColor from "@/app/helperFunctions/TextSplitColor";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
const ServiceScope = () => {
  const service_scope_list = [
    {
      title: "Product Discovery & Product Research",
    },
    {
      title: "Mobile App Design, UX Design, UI Design & Branding",
    },
    {
      title: "Native Mobile App Development (Android or iOS)",
    },
    {
      title: "Cross-Platform Mobile App Development",
    },
    {
      title: "Preparing a Go-To-Market Strategy",
    },
    {
      title: "Mobile Testing, QA Advisory & Consulting",
    },
    {
      title: "Mobile App Conversion Rate Optimization",
    },
    {
      title: "Implementing AI in Mobile Apps",
    },
    {
      title: "Maintenance & Support",
    },
  ];
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-2 gap-20">
        <motion.div
          variants={intro_photo_animation}
          initial="initial"
          whileInView="whileInView"
          className=""
        >
          <img
            src="https://cdn.prod.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg"
            alt=""
          />
        </motion.div>
        <div className="flex flex-col gap-8">
          <motion.div
            variants={top_animation}
            initial="initial"
            whileInView="whileInView"
            className="lg:text-[30px] text-[20px] font-medium"
          >
            <TextSplitColor text=" Our scope of mobile app development services" />
          </motion.div>
          <div className="text-neutral">
            At Rynex, we know that every detail of the development process is
            crucial, and so {`we’ve`} built the expertise to provide a full
            range of mobile application development services. We can be
            responsible for design, coding, management, or integration, but we
            can also develop your product from scratch into a fully functioning
            application. Regardless if {`you're`} a start-up or a big
            enterprise, {`we'll`} adjust to your needs and create a beautiful
            digital product that meets your expectations. Here are some of the
            mobile application development services that we offer:
          </div>
          <div className="flex flex-col gap-6">
            {service_scope_list?.map((data, index) => {
              return (
                <motion.div
                  initial={{
                    y: 10,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,

                    transition: {
                      delay: 0.4 * index,
                      duration: 0.8,
                      staggerChildren: 0.8,
                      type: "spring",
                      stiffness: 600,
                    },
                  }}
                  key={index}
                >
                  <div className="flex lg:items-center gap-1 ">
                    <div className="translate-y-1">
                      <GoDotFill className="text-secondary" />
                    </div>
                    <div className="text-[18px] font-medium">{data?.title}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceScope;
