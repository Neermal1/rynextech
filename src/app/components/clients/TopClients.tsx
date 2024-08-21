import { IClient } from "@/app/interface/interface";
import ComponentHeader from "../componentHeader/ComponentHeader";

const TopClients = ({ client_data }: IClient) => {
  return (
    <div className="layout component-padding flex flex-col gap-6">
      <div className="grid lg:grid-cols-8 lg:gap-20 gap-10">
        <div className="lg:col-span-4">
          <div>
            <div>
              <ComponentHeader
                data={{
                  heading: "Meet our top clients and partners",
                  subheading: "JOIN OUR NETWORK",
                }}
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 text-gray-600 flex flex-col gap-6">
          <div>
            It provides an opportunity to acknowledge their contributions,
            showcase the benefits of these relationships, and demonstrate how
            these collaborations have driven mutual growth and success.
          </div>
          <div>
            It provides an opportunity to acknowledge their contributions,
            showcase the benefits of these relationships, and demonstrate how
            these collaborations have driven mutual growth and success.
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 ">
        {client_data?.map((data, index) => {
          return (
            <div key={index} className="">
              <img
                src={data?.image_link}
                alt=""
                className=" h-[70px] object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopClients;
