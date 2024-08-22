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
            At the heart of our success are the exceptional clients and partners
            who have trusted us with their visions. These collaborations have
            not only fueled our growth but have also led to transformative
            outcomes in various industries. We take immense pride in the
            relationships {"we've"} built, which are rooted in mutual respect,
            shared goals, and a commitment to excellence.
          </div>
          <div>
            Each of our clients and partners brings unique strengths to the
            table, and together, {"we've"} achieved remarkable milestones. Join
            us in celebrating the power of collaboration as we continue to push
            boundaries and create lasting impact.
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
