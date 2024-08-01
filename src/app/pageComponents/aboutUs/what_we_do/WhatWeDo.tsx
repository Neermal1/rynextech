import { ourWork } from "@/app/constants/constants";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="layout component-padding">
      <div className="flex flex-col gap-20">
        <div>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div>
              <div className="text-[16px] font-medium">What we do</div>
              <div className="lg:text-[50px] text-[25px] font-bold text-black">
                Branding, websites and digital experiences, crafted with
                intelligence, love, precision and creativity.
              </div>
            </div>
            <div>
              <div className="text-[16px] font-bold">Peter Bowman </div>
              <div>Creative Director</div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="grid lg:grid-cols-4">
            {ourWork?.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center group"
                >
                  <div className="flex flex-col items-center justify-center gap-6 text-center p-6 group-hover:bg-secondary rounded-[8px] m-6">
                    <Image
                      src={data?.image_link}
                      alt=""
                      className="h-[120px] "
                    />
                    <div className=" text-black">
                      <div className="text-[20px] font-semibold text-center group-hover:text-white  text-black">
                        {data?.title}
                      </div>
                    </div>
                  </div>
                  <div className="h-[40%] text-center lg:w-[0.5%] flex items-center justify-center bg-gray-100"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
