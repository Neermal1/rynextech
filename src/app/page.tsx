import { unstable_noStore } from "next/cache";
import dynamic from "next/dynamic";
import CallToAction from "./components/CallToAction/CallToAction";
import TopClients from "./components/clients/TopClients";
import Technology from "./components/Technology/Technology";
import { fetchServerData } from "./helperFunctions/fetchServerData";
import Introduction from "./pageComponents/aboutUs/Introduction/Introduction";
import WhatWeDo from "./pageComponents/aboutUs/what_we_do/WhatWeDo";
import BlogList from "./pageComponents/home/blogs/BlogList";
import TopFeature from "./pageComponents/home/Features/TopFeature";
import Testimonials from "./pageComponents/home/Testimonial/Testimonial";
import TopService from "./pageComponents/service/home/TopService";
import WhyChooseUs from "./pageComponents/aboutUs/why_choose_us/WhyChooseUs";

// Import SoftwareLifeCycle with SSR disabled
const SoftwareLifeCycle = dynamic(
  () => import("./pageComponents/home/lifeCycle/SoftwareLifeCycle"),
  { ssr: false }
);

// Import Slider with SSR disabled
const Slider = dynamic(() => import("./pageComponents/home/Slider/Slider"), {
  ssr: false,
});

export default async function indexPage() {
  unstable_noStore();

  // Fetch data concurrently
  const [
    { data: sliderData, error: sliderError },
    { data: companyProfile, error: companyProfileError },
    { data: service, error: serviceError },
    { data: whyChooseUsData, error: whyChooseUsError },
    { data: topFeature, error: featureError },
    { data: techData, error: techError },
    { data: topClients, error: clientError },
    { data: whatWeDo, error: whatWeDoError },
    { data: testimonialData, error: testimonialError },
    { data: blogs, error: newsError },
  ] = await Promise.all([
    fetchServerData("/home/sliders"),
    fetchServerData("/company-profile"),
    fetchServerData("/home/services"),
    fetchServerData("/why-us"),
    fetchServerData("/home/corporate-services"),
    fetchServerData("/home/technologies"),
    fetchServerData("/home/clients"),
    fetchServerData("/home/what-we-do"),
    fetchServerData("/home/testimonials"),
    fetchServerData("/home/blogs"),
  ]);

  // Handle errors
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
  ) {
    return <p className="text-center text-red-500">Sorry, something went wrong!!</p>;
  }

  return (
    <div>
      {/* Hero Slider */}
      {sliderData && companyProfile && (
        <Slider
          slider_data={{
            slider_info: sliderData,
            companyProfile,
          }}
        />
      )}

      {/* Top Features */}
      {topFeature && <TopFeature feature_data={topFeature} />}

      {/* Why Choose Us */}
      {whyChooseUsData && <WhyChooseUs why_choose_us={whyChooseUsData} />}

      {/* Services */}
      {service && <TopService service_data={service} />}

      {/* Technology Stack */}
      {techData && <Technology tech_data={techData} />}

      {/* Company Introduction */}
      {companyProfile && <Introduction data={companyProfile} />}

      {/* Top Clients */}
      {topClients && <TopClients client_data={topClients} />}

      {/* What We Do */}
      {whatWeDo && <WhatWeDo what_we_do={whatWeDo} />}

      {/* Software Development Life Cycle Section */}
      <SoftwareLifeCycle />

      {/* Call To Action */}
      <CallToAction />

      {/* Testimonials */}
      {testimonialData && <Testimonials data={testimonialData} />}

      {/* Blogs */}
      {blogs && <BlogList blog_data={blogs} />}
    </div>
  );
}
