"use client";
import {
  parent_stagger_animation,
  service_card_animation,
} from "@/app/animation/animation_variants/animation_variants";
import PrimaryButton from "@/app/components/Button/PrimaryButton";
import Card from "@/app/components/Card/Card";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { flexColLayout, service_data } from "@/app/constants/constants";
import { IService } from "@/app/interface/interface";
import { motion } from "framer-motion";

const TopService = ({ service_data: service }: IService) => {
  return (
    <div className="layout component-padding">
      <div className={`${flexColLayout} `}>
        <div className="flex items-center justify-center">
          <div className="lg:w-[60%] text-center flex items-center justify-center">
            <ComponentHeader
              data={{
                heading: "Our main goal is to make sure your startup works",
                subheading: "Our Service",
              }}
            />
          </div>
        </div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={parent_stagger_animation}
          className="grid lg:grid-cols-3 gap-[60px]"
        >
          {service_data?.map((service, index: any) => {
            const {
              name,
              description,
              product_category_id,
              image_link,
              slug,
              id,
            } = service;
            return (
              <motion.div
                initial="initial"
                variants={service_card_animation}
                whileInView="whileInView"
                key={id}
                className=""
              >
                <Card
                  data={{
                    name,
                    description,
                    product_category_id,
                    image_link,
                    slug,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
        <div className="flex items-center justify-center">
          <PrimaryButton>See More Services</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default TopService;
