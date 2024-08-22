"use client";
import {
  intro_photo_animation,
  top_animation,
} from "@/app/animation/animation_variants/animation_variants";
import TextSplitColor from "@/app/helperFunctions/TextSplitColor";
import { IServiceDetail } from "@/app/interface/interface";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
const ServiceScope = ({ service_detail }: IServiceDetail) => {
  const { scope_image_link, scope, scope_description } =
    service_detail && service_detail?.details;
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-2 gap-20">
        <motion.div
          variants={intro_photo_animation}
          initial="initial"
          whileInView="whileInView"
          className="sticky top-[140px]"
        >
          <div>
            <img src={scope_image_link} alt="" />
          </div>
        </motion.div>
        <div className="flex flex-col gap-8">
          <motion.div
            variants={top_animation}
            initial="initial"
            whileInView="whileInView"
            className="lg:text-[30px] text-[20px] font-medium"
          >
            <TextSplitColor
              text={`Our scope of ${service_detail?.details?.name} services`}
            />
          </motion.div>
          <div
            className="text-neutral"
            dangerouslySetInnerHTML={{
              __html: scope_description,
            }}
          />

          <div className="flex flex-col gap-6">
            {service_detail?.details?.scope &&
              JSON.parse(scope).map((data: any, index: any) => {
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
                    <div className="flex  gap-1 ">
                      <div className="translate-y-1 lg:translate-y-[6px]">
                        <GoDotFill className="text-secondary" />
                      </div>
                      <div className="text-[18px] font-medium">{data}</div>
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
