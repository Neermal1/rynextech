"use client";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import feature from "../../../../../public/animation/json/features_json.json";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { topFeatureList } from "@/app/constants/constants";
import PrimaryButton from "@/app/components/Button/PrimaryButton";
const TopFeature = () => {
  const featureReference: any = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: featureReference.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: feature,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-12 gap-[120px] items-start">
        <div className="lg:col-span-5 bg-accent rounded-md">
          <div className="relative">
            <div ref={featureReference}></div>
            <div className="absolute bottom-[-20px] lg:right-[-50px] right-[-20px] lg:w-[80%] w-[60%] lg:h-[50%] flex items-center justify-center bg-black text-white p-6 rounded-[8px]">
              <div className=" lg:text-[30px] text-[22px] font-bold  ">
                We Create Awesome Tech Business
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-10">
              <ComponentHeader
                data={{
                  heading: "TURNING IDEAS INTO BUSINESSES",
                  subheading: "corporate service",
                }}
              />
            </div>
            <div className="text-gray-400">
              It covers essential steps such as market research, business
              planning, securing funding, and navigating the challenges of
              startup growth, providing practical advice and real-world examples
              to inspire and equip readers for entrepreneurial success
            </div>
          </div>
          <div className="flex flex-col gap-10">
            {topFeatureList?.map((data, index) => {
              return (
                <div key={index}>
                  <div className="flex items-start gap-6 border-b-[2px] border-gray-600 pb-3">
                    <div className="mt-[1px] text-gray-600 opacity-50 lg:text-[25px] font-semibold">
                      0{index + 1}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="lg:text-[22px] text-[20px] font-bold">
                        {data?.feature}
                      </div>
                      <div className="text-gray-600 opacity-50">
                        {data?.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFeature;
