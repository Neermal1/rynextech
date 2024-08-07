import CallToAction from "./components/CallToAction/CallToAction";
import TopClients from "./components/clients/TopClients";
import Technology from "./components/Technology/Technology";
import { testimonialData } from "./constants/constants";
import { fetchServerData } from "./helperFunctions/fetchServerData";
import Introduction from "./pageComponents/aboutUs/Introduction/Introduction";
import WhatWeDo from "./pageComponents/aboutUs/what_we_do/WhatWeDo";
import BlogList from "./pageComponents/home/blogs/BlogList";
import TopFeature from "./pageComponents/home/Features/TopFeature";
import SoftwareLifeCycle from "./pageComponents/home/lifeCycle/SoftwareLifeCycle";
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

  const { data: blogs, error: newsError } = await fetchServerData("/blogs");

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
      <TopFeature />
      <SoftwareLifeCycle />
      <TopService service_data={topProducts} />
      <Technology />
      <Introduction />
      <TopClients />
      <WhatWeDo />
      <CallToAction />
      <Testimonials data={testimonialData} />
      <BlogList blog_data={blogs} />
    </div>
  );
}
