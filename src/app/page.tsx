import CallToAction from "./components/CallToAction/CallToAction";
import TopClients from "./components/clients/TopClients";
import { testimonialData } from "./constants/constants";
import { fetchServerData } from "./helperFunctions/fetchServerData";
import WhatWeDo from "./pageComponents/aboutUs/what_we_do/WhatWeDo";
import TopFeature from "./pageComponents/home/Features/TopFeature";
import Slider from "./pageComponents/home/Slider/Slider";
import Testimonials from "./pageComponents/home/Testimonial/Testimonial";
import TopService from "./pageComponents/service/home/TopService";

export default async function indexPage() {
  const { data: sliderData, error: sliderError } = await fetchServerData(
    "/home/sliders"
  );

  const { data: companyProfile, error: companyProfileError } =
    await fetchServerData("/company-profile");

  const { data: topProducts, error: productError } = await fetchServerData(
    "/home/top-products"
  );

  if (sliderError || companyProfileError || productError)
    return "Sorry Something went wrong!!";

  return (
    <div>
      <Slider
        slider_data={{
          slider_info: sliderData,
          companyProfile,
        }}
      />
      <TopService service_data={topProducts} />
      <TopFeature />
      <TopClients />
      <WhatWeDo />
      <CallToAction />
      <Testimonials data={testimonialData} />
    </div>
  );
}
