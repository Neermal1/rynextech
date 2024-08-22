"use client";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { intro_photo_animation } from "@/app/animation/animation_variants/animation_variants";
import { IServiceDetail } from "@/app/interface/interface";

const ServiceDevelopmentSteps = ({ service_detail }: IServiceDetail) => {
  return (
    <div className="bg-lightAccent">
      <div className="layout component-padding flex flex-col gap-20">
        <div className="flex items-center justify-center text-center">
          <div className="flex items-center justify-center lg:w-[60%]">
            <ComponentHeader
              data={{
                heading: `KEY STEPS IN OUR ${service_detail?.details?.name.toUpperCase()} PROCESS`,
                subheading: "",
              }}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-8 gap-20">
          <div className="  lg:col-span-5">
            <div className="flex flex-col gap-4">
              {service_detail?.details?.steps &&
                JSON.parse(service_detail?.details?.steps)?.map(
                  (data: any, index: any) => {
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
                        className="flex items-center gap-4"
                      >
                        <div className="h-[4vh] w-[4vh] rounded-full bg-hover p-2 flex items-center justify-center lg:translate-y-[1px] translate-y-[-28px]  lg:col-span-1">
                          <FaArrowDownLong className="text-white" />
                        </div>
                        <div className="lg:col-span-5">{data}</div>
                      </motion.div>
                    );
                  }
                )}
            </div>
          </div>
          <div className="lg:col-span-3">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              variants={intro_photo_animation}
              className="sticky top-[140px]"
            >
              <div className="">
                <img
                  src={service_detail?.details?.steps_image_link}
                  alt=""
                  className=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDevelopmentSteps;
