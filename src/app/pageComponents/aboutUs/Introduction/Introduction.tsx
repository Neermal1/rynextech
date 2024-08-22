"use client";
import { intro_photo_animation } from "@/app/animation/animation_variants/animation_variants";
import StaggeredTextAnimation from "@/app/animation/reusable_animation/staggered_text_animation/StaggeredTextAnimation";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { motion } from "framer-motion";
import CompanyInfo from "../what_we_do/CompanyInfo";
import {
  ICompanyProfile,
  ICompanyProfileData,
} from "@/app/interface/interface";

const Introduction = ({ data: company_profile }: ICompanyProfileData) => {
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-8 gap-10">
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="lg:text-[35px] text-[30px] font-semibold  lg:w-[80%]">
                <ComponentHeader
                  data={{
                    heading: "The Best IT Company for Advanced Tech Services",
                    subheading: " WELCOME TO THE RYNEX",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:w-[80%]">
              <div>
                <StaggeredTextAnimation
                  text={`${company_profile?.introduction}`}
                />
              </div>
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

              <div className="absolute lg:top-[60px] top-[50px] lg:right-[-80px] right-[-10px] lg:bottom-[-50px]  w-full z-40">
                <div className="bg-white   p-1 rounded-[8px] drop-shadow-md flex items-center justify-center">
                  <img
                    src="https://imageio.forbes.com/specials-images/imageserve/60bfd4cc39671e95929b0781/Handsome-businessman-sitting-in-modern-office-/960x0.jpg?height=473&width=711&fit=bounds"
                    alt=""
                    className="h-[50vh] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <CompanyInfo data={company_profile} />
      </div>
    </div>
  );
};

export default Introduction;
