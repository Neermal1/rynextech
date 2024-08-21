"use client";
import { intro_photo_animation } from "@/app/animation/animation_variants/animation_variants";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IWhyChooseUs } from "@/app/interface/interface";
import { motion } from "framer-motion";
const WhyChooseUs = ({ why_choose_us }: IWhyChooseUs) => {
  const {
    description,
    id,
    image_link,
    position,
    profile_image_link,
    signature_link,
    title,
    name,
  } = why_choose_us;
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-8 gap-10">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="lg:text-[35px] text-[30px] font-semibold  lg:w-[80%]">
            <ComponentHeader
              data={{
                heading: title,
                subheading: "Why Choose Us",
              }}
            />
          </div>
          <div className=" lg:w-[80%] flex flex-col gap-5">
            <div className="flex flex-col text-neutral  gap-6">
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img
                  src={profile_image_link}
                  className="w-[60px] h-[60px] rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex  lg:gap-20 gap-4">
                <div className="">
                  <div className="text-[20px] text-primary font-semibold">
                    {name}
                  </div>
                  <div>{position}</div>
                </div>
                <div>
                  <img
                    src={signature_link}
                    alt=""
                    className=" object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={intro_photo_animation}
          className=" lg:col-span-3 "
        >
          <div className="overflow-hidden">
            <img
              src={image_link}
              alt=""
              className=" transition-all duration-700 hover:scale-x-110 hover:object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
