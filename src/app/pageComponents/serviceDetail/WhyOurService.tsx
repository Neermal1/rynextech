"use client";
import { intro_photo_animation } from "@/app/animation/animation_variants/animation_variants";
import PrimaryButton from "@/app/components/Button/PrimaryButton";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IServiceDetail } from "@/app/interface/interface";
import { motion } from "framer-motion";
import Link from "next/link";

const WhyOurService = ({ service_detail }: IServiceDetail) => {
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-8 gap-10">
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="lg:text-[35px] text-[30px] font-semibold  lg:w-[80%]">
                <ComponentHeader
                  data={{
                    heading: "Why Choose Our Service",
                    subheading: " ",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:w-[80%]">
              <div
                dangerouslySetInnerHTML={{
                  __html: service_detail?.details?.why_us,
                }}
              />
              <Link href="/contact-us" className="">
                <PrimaryButton>Contact Us</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={intro_photo_animation}
          className="lg:col-span-3 "
        >
          <div>
            <div className="  relative">
              <div className="h-[50vh] bg-secondary w-full object-cover z-0 rounded-[8px]"></div>

              <div className="absolute lg:top-[60px] top-[50px] lg:right-[20px] right-[-10px] lg:bottom-[-50px]  w-full z-40">
                <div className="bg-white   p-1 rounded-[8px] drop-shadow-md flex items-center justify-center">
                  <img
                    src="https://www.advantagemedia.co.uk/themes/advantage_media/resources/img/why-choose-us.jpg"
                    alt=""
                    className="h-[50vh] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyOurService;
