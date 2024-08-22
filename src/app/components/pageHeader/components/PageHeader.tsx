"use client";
import { pageHeaderVariants } from "@/app/animation/animation_variants/animation_variants";
import { IPageHeader } from "@/app/interface/interface";
import { motion } from "framer-motion";

const PageHeader = ({ data }: IPageHeader) => {
  return (
    <div
      style={{
        backgroundImage: `url(${data?.image})`,
      }}
      className="xl:h-[55vh] lg:h-[30vh] h-[35vh] text-white bg-fixed bg-cover relative flex items-center justify-center white-color"
    >
      <div className="absolute bg-gradient-to-l from-primary to-primary  opacity-80 3xl:opacity-70 w-full h-full top-0 left-0 right-0 bottom-0"></div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={pageHeaderVariants}
        className="relative flex flex-col items-center justify-center layout component-padding lg:w-[60%] text-center "
      >
        <div className="lg:text-[45px] text-center text-[35px] font-medium">
          {data?.title}
        </div>
        <div className="">
          <div className="">{data?.subDetail}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default PageHeader;
