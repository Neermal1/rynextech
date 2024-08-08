"use client";
import { RiExpandDiagonal2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import TextSplitColor from "@/app/helperFunctions/TextSplitColor";

const ServiceValue = () => {
  const serviceValueList = [
    {
      title: "Expand distribution.",
      icon: <RiExpandDiagonal2Line />,
      description:
        "1.8 billion people worldwide purchase goods online. Sell more with ease and immediacy.",
    },
    {
      icon: <RiExpandDiagonal2Line />,
      title: "Increase brand exposure",
      description:
        "Apps account for over 90% of online time on smartphones. Be where your customers are.",
    },
    {
      icon: <RiExpandDiagonal2Line />,
      title: "Build engagement and loyalty",
      description:
        "Send out relevant marketing messages and use push notifications to increase retention through reminders.",
    },
    {
      icon: <RiExpandDiagonal2Line />,
      title: "Optimize tactics and processes.",
      description:
        "Gather data and optimize business operations to increase efficiency and profitability.",
    },
  ];
  return (
    <div className="bg-lightAccent">
      <div className="layout component-padding flex flex-col gap-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="text-[30px] font-medium">
            <TextSplitColor
              text=" Mobile app solutions that deliver value to customers and elevate
            your brand"
            />
          </div>
          <div className="text-[18px]">
            Enjoy the benefits of owning a mobile application! Be relevant and
            competitive thanks to technology opportunities!
          </div>
        </div>
        <div className=" grid lg:grid-cols-4 gap-10">
          {serviceValueList?.map((data, index) => {
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
                className="bg-white drop-shadow-md p-4 flex flex-col gap-6"
              >
                <div className="h-[4vh] w-[4vh] bg-gray-300 flex items-center justify-center rounded-full ">
                  {data?.icon}
                </div>
                <div className="text-[16px] font-semibold">{data?.title}</div>
                <div>{data?.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
      ;
    </div>
  );
};

export default ServiceValue;
