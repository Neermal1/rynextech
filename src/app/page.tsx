import { unstable_noStore } from "next/cache";
import CallToAction from "./components/CallToAction/CallToAction";
import TopClients from "./components/clients/TopClients";
import Technology from "./components/Technology/Technology";
import { fetchServerData } from "./helperFunctions/fetchServerData";
import Introduction from "./pageComponents/aboutUs/Introduction/Introduction";
import WhatWeDo from "./pageComponents/aboutUs/what_we_do/WhatWeDo";
import BlogList from "./pageComponents/home/blogs/BlogList";
import TopFeature from "./pageComponents/home/Features/TopFeature";
import SoftwareLifeCycle from "./pageComponents/home/lifeCycle/SoftwareLifeCycle";
import Slider from "./pageComponents/home/Slider/Slider";
import Testimonials from "./pageComponents/home/Testimonial/Testimonial";
import TopService from "./pageComponents/service/home/TopService";
import WhyChooseUs from "./pageComponents/aboutUs/why_choose_us/WhyChooseUs";

export default async function indexPage() {
  unstable_noStore();
  const { data: sliderData, error: sliderError } = await fetchServerData(
    "/home/sliders"
  );

  const { data: companyProfile, error: companyProfileError } =
    await fetchServerData("/company-profile");

  const { data: service, error: serviceError } = await fetchServerData(
    "/home/services"
  );
  const { data: whyChooseUsData, error: whyChooseUsError } =
    await fetchServerData("/why-us");

  const { data: topFeature, error: featureError } = await fetchServerData(
    "/home/corporate-services"
  );
  const { data: techData, error: techError } = await fetchServerData(
    "/home/technologies"
  );
  const { data: topClients, error: clientError } = await fetchServerData(
    "/home/clients"
  );
  const { data: whatWeDo, error: whatWeDoError } = await fetchServerData(
    "/home/what-we-do"
  );

  const { data: testimonialData, error: testimonialError } =
    await fetchServerData("/home/testimonials");

  const { data: blogs, error: newsError } = await fetchServerData(
    "/home/blogs"
  );

  if (
    sliderError &&
    companyProfileError &&
    whyChooseUsError &&
    serviceError &&
    featureError &&
    techError &&
    clientError &&
    whatWeDoError &&
    newsError &&
    testimonialError
  )
    return "Sorry Something went wrong!!";

  return (
    <div>
      <Slider
        slider_data={{
          slider_info: sliderData,
          companyProfile,
        }}
      />
      <TopFeature feature_data={topFeature} />
      <WhyChooseUs why_choose_us={whyChooseUsData} />
      <SoftwareLifeCycle />
      <TopService service_data={service} />
      <Technology tech_data={techData} />
      <Introduction data={companyProfile} />
      <TopClients client_data={topClients} />
      <WhatWeDo what_we_do={whatWeDo} />
      <CallToAction />
      <Testimonials data={testimonialData} />
      <BlogList blog_data={blogs} />
    </div>
  );
}
