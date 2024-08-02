import { IComponentHeader } from "@/app/interface/interface";

const ComponentHeader = ({ data }: IComponentHeader) => {
  return (
    <div
      className="color-changer z-20 "
      data-aos="fade-up"
      data-aos-delay="75"
      data-aos-duration="1000"
    >
      <div className=" flex flex-col ">
        <div className="lg:text-[18px] text-secondary text-[14px] font-medium">
          {data?.subheading}
        </div>
        <div className="relative">
          <div className="lg:text-[38px] text-[30px] font-semibold">
            {data?.heading
              .split(" ")
              .map((word: any, index: any, array: any) => {
                if (array.length === 2 && index === array.length - 1) {
                  return (
                    <span key={index} className="text-secondary">
                      {word}{" "}
                    </span>
                  );
                } else if (array.length === 3 && index >= array.length - 2) {
                  return (
                    <span key={index} className="text-secondary">
                      {word}{" "}
                    </span>
                  );
                } else if (array.length > 3 && index >= array.length - 3) {
                  return (
                    <span key={index} className="text-secondary">
                      {word}{" "}
                    </span>
                  );
                } else {
                  return word + " ";
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentHeader;
