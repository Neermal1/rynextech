"use client";

import { ITechnology } from "@/app/interface/interface";
import ComponentHeader from "../componentHeader/ComponentHeader";

const Technology = ({ tech_data }: ITechnology) => {
  return (
    <div className="flex flex-col gap-20 layout component-padding">
      <div className="flex items-center justify-center text-center">
        <div className="lg:w-[60%]">
          <ComponentHeader
            data={{
              heading: "Technologies We Use",
              subheading: "",
            }}
          />
        </div>
      </div>
      <div className=" py-4">
        <div className="marquee">
          <div className="marquee-inner  flex lg:gap-10 gap-8  h-full items-center justify-center">
            {tech_data.map((image, index) => (
              <span
                key={index + tech_data.length}
                className="clients lg:p-0 p-7   bg-[white] border-[1px] border-[#EAECEA] shadow-md dark:text-white rounded-[4px]"
              >
                <img
                  key={index + tech_data.length}
                  alt={image.name}
                  src={image.image_link}
                  className="lg:h-[70px] lg:w-[70px] h-[40px] w-[40px] hover:cursor-pointer "
                />
              </span>
            ))}
            {tech_data.map((image, index) => (
              <span
                key={index + tech_data?.length}
                className="clients lg:p-0 p-7  shadow-md bg-[white] border-[1px] border-[#EAECEA] dark:text-white rounded-[4px]"
              >
                <img
                  key={index + tech_data?.length}
                  alt={image?.name}
                  src={image?.image_link}
                  className="lg:h-[70px] lg:w-[70px] h-[40px] w-[40px] hover:cursor-pointer "
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
