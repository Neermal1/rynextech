import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import CompanyInfo from "../what_we_do/CompanyInfo";

const Introduction = () => {
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-8 gap-10">
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="text-[18px] text-neutral">
                WELCOME TO THE RYNEX
              </div>

              <div className="lg:text-[35px] text-[30px] font-semibold  lg:w-[80%]">
                <ComponentHeader
                  data={{
                    heading: "The Best IT Company for Advanced Tech Services",
                    subheading: "",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:w-[80%]">
              <div>
                At Rynex Solutions, we are dedicated to revolutionizing the IT
                landscape with innovative, reliable, and cutting-edge technology
                solutions. As a premier IT company, we specialize in delivering
                comprehensive services that drive efficiency, security, and
                growth for businesses of all sizes.
              </div>
              <div>
                Our extensive range of services includes everything from IT
                consulting and managed services to cloud computing and
                cybersecurity. By leveraging the latest advancements in
                technology, we help businesses stay ahead of the competition and
                navigate the complexities of the digital age
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div>
            <div className="  relative">
              <img
                src="https://themeforest.kreativdev.com/pachin/assets/images/about-thumb-2.jpg"
                alt=""
                className="h-[50vh] w-full object-cover z-0 rounded-[8px]"
              />
              <div className="absolute lg:top-[60px] top-[95px] lg:right-[-80px] right-[-10px] lg:bottom-[-50px]  w-full z-40">
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
        </div>
      </div>
      <div>
        <CompanyInfo />
      </div>
    </div>
  );
};

export default Introduction;
