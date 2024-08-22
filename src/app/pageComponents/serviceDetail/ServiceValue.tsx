"use client";
import TextSplitColor from "@/app/helperFunctions/TextSplitColor";
import { IServiceDetail } from "@/app/interface/interface";
import { motion } from "framer-motion";
import { RiExpandDiagonal2Line } from "react-icons/ri";

const ServiceValue = ({ service_detail }: IServiceDetail) => {
  return (
    <div className="bg-lightAccent">
      <div className="layout component-padding flex flex-col gap-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="text-[30px] font-medium">
            <TextSplitColor text="Why Our Services Are Essential for Your Business Success" />
          </div>
          <div className="text-[18px]">
            In {"today's"} competitive market, the right strategies and tools
            are vital for success. Our services cover all your business needs,
            from boosting your online presence to optimizing operations. With
            our expertise, {"you'll"} unlock growth, efficiency, and lasting
            success
          </div>
        </div>
        <div className=" grid lg:grid-cols-4 gap-10">
          {JSON.parse(service_detail?.details?.importance)?.map(
            (data: any, index: any) => {
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
                    <RiExpandDiagonal2Line />
                  </div>
                  <div className="text-[16px] font-semibold">{data?.title}</div>
                  <div>{data?.description}</div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
      ;
    </div>
  );
};

export default ServiceValue;
