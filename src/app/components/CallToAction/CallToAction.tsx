import React from "react";
import PrimaryButton from "../Button/PrimaryButton";

const CallToAction = () => {
  return (
    <div className="bg-accent">
      <div className="layout component-padding">
        <div className="grid lg:grid-cols-2">
          <div>
            <div className="flex flex-col gap-6">
              <div>
                <div>BUSINESS AGENCY</div>
                <div className="lg:text-[50px] text-[35px] font-bold text-black">
                  We make top creative solutions for brands
                </div>
              </div>
              <div>
                <PrimaryButton>Our Services</PrimaryButton>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://www.pngmart.com/files/11/Information-Technology-PNG-Pic.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
