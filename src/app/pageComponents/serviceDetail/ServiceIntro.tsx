"use client";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IServiceDetail } from "@/app/interface/interface";

const ServiceIntro = ({ service_detail }: IServiceDetail) => {
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-8">
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-8">
            <ComponentHeader
              data={{
                heading:
                  service_detail?.details && service_detail?.details?.name,
                subheading: "",
              }}
            />
            <div
              className="text-neutral text-[18px] "
              dangerouslySetInnerHTML={{
                __html: service_detail?.details?.description,
              }}
            />
          </div>
        </div>
        <div className="lg:col-span-3"></div>
      </div>
    </div>
  );
};

export default ServiceIntro;
