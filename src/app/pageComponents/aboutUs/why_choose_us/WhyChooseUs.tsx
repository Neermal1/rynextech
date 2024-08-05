"use client";
import { intro_photo_animation } from "@/app/animation/animation_variants/animation_variants";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-8 gap-10">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="lg:text-[35px] text-[30px] font-semibold  lg:w-[80%]">
            <ComponentHeader
              data={{
                heading: "Your Trusted Partner for High Quality Tech Solutions",
                subheading: "Why Choose Us",
              }}
            />
          </div>
          <div className=" lg:w-[80%] flex flex-col gap-5">
            <div className="flex flex-col text-neutral  gap-6">
              <div>
                Our commitment to building strong, collaborative relationships
                means we work closely with you to fully understand your needs
                and deliver tailored solutions that address your specific
                challenges and goals.
              </div>
              <div>
                By choosing us as your technology partner, you benefit from our
                expertise and commitment to excellence, giving you confidence in
                the solutions we deliver and the success of your technology
                projects.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/young-handsome-business-man-standing-with-phone-office_1303-19757.jpg?t=st=1722585299~exp=1722588899~hmac=2dec2f5a5235fb90966a4711c1eda57165fc2e8ed1b9b848ead17e20ffcacba1&w=1380"
                  className="w-[60px] h-[60px] rounded-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex  lg:gap-20 gap-4">
                <div className="">
                  <div className="text-[20px] text-primary font-semibold">
                    Naruto Uzumaki
                  </div>
                  <div>CEO</div>
                </div>
                <div>
                  <img
                    src="https://themeforest.kreativdev.com/pachin/assets/images/signature.png"
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
              src="https://img.freepik.com/free-photo/group-businesspeople-working-laptop-office_23-2147838544.jpg?t=st=1722585042~exp=1722588642~hmac=f0e3f32fd887d23f04248a2a54dd801ec256758cefa37fc27bf3a6f2cae33933&w=740"
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
