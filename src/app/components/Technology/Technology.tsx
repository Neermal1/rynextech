"use client";
//technology images
import Image from "next/image";
import a from "../../../../public/technology/a.svg";
import b from "../../../../public/technology/b.svg";
import c from "../../../../public/technology/c.svg";
import d from "../../../../public/technology/d.svg";
import f from "../../../../public/technology/f.svg";
import g from "../../../../public/technology/g.svg";
import h from "../../../../public/technology/h.svg";
import i from "../../../../public/technology/i.svg";
import j from "../../../../public/technology/j.svg";
import k from "../../../../public/technology/k.svg";

import ComponentHeader from "../componentHeader/ComponentHeader";

const Technology = () => {
  const tech_list = [
    {
      img: a,
      alt: "a",
    },
    {
      img: b,
      alt: "a",
    },
    {
      img: c,
      alt: "a",
    },
    {
      img: d,
      alt: "a",
    },

    {
      img: f,
      alt: "a",
    },
    {
      img: g,
      alt: "a",
    },
    {
      img: h,
      alt: "a",
    },
    {
      img: i,
      alt: "a",
    },
    {
      img: j,
      alt: "a",
    },
    {
      img: k,
      alt: "a",
    },
  ];

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
            {tech_list.map((image, index) => (
              <span
                key={index + tech_list.length}
                className="clients lg:p-0 p-7   bg-[white] border-[1px] border-[#EAECEA] shadow-md dark:text-white rounded-[4px]"
              >
                <Image
                  key={index + tech_list.length}
                  alt={image.alt}
                  src={image.img}
                  className="lg:h-[70px] lg:w-[70px] h-[40px] w-[40px] hover:cursor-pointer "
                />
              </span>
            ))}
            {tech_list.map((image, index) => (
              <span
                key={index + tech_list.length}
                className="clients lg:p-0 p-7  shadow-md bg-[white] border-[1px] border-[#EAECEA] dark:text-white rounded-[4px]"
              >
                <Image
                  key={index + tech_list.length}
                  alt={image.alt}
                  src={image.img}
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
