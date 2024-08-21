"use client";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IServiceDetail } from "@/app/interface/interface";

const ServiceIntro = ({ service_detail }: IServiceDetail) => {
  const { description, name } = service_detail && service_detail?.details;
  return (
    <div className="layout component-padding">
      <div className="flex flex-col gap-8">
        <ComponentHeader
          data={{
            heading: name,
            subheading: "",
          }}
        />
        <div
          className="text-neutral text-[18px] lg:w-[60%]"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div>
  );
};

export default ServiceIntro;
