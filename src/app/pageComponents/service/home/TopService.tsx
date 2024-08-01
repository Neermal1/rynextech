"use client";
import PrimaryButton from "@/app/components/Button/PrimaryButton";
import Card from "@/app/components/Card/Card";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { flexColLayout, service_data } from "@/app/constants/constants";
import { IService } from "@/app/interface/interface";

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
        <div className="grid lg:grid-cols-3 gap-[60px]">
          {service_data?.map((service) => {
            const {
              name,
              description,
              product_category_id,
              image_link,
              slug,
              id,
            } = service;
            return (
              <div key={id} className="">
                <Card
                  data={{
                    name,
                    description,
                    product_category_id,
                    image_link,
                    slug,
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <PrimaryButton>See More Services</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default TopService;
