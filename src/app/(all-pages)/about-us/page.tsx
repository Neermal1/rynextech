import CallToAction from "@/app/components/CallToAction/CallToAction";
import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import WhatWeDo from "@/app/pageComponents/aboutUs/what_we_do/WhatWeDo";
import WhyChooseUs from "@/app/pageComponents/aboutUs/why_choose_us/WhyChooseUs";
import TopFeature from "@/app/pageComponents/home/Features/TopFeature";
import SoftwareLifeCycle from "@/app/pageComponents/home/lifeCycle/SoftwareLifeCycle";

export default async function AboutUsPage() {
  const { data: whatWeDo, error: whatWeDoError } = await fetchServerData(
    "/home/what-we-do"
  );
  const { data: topFeature, error: featureError } = await fetchServerData(
    "/home/corporate-services"
  );

  const { data: whyChooseUsData, error: whyChooseUsError } =
    await fetchServerData("/why-us");

  if (whatWeDoError && featureError && whyChooseUsError)
    return <div>Sorry Something went wrong!!</div>;

  return (
    <div>
      <div>
        <PageHeader
          data={{
            image:
              "https://img.freepik.com/free-photo/group-people-working-team_23-2147656716.jpg?t=st=1723031280~exp=1723034880~hmac=64190ae53b2881d0f20e5178d266a31e4a0cf6911997933830927a089a2ffe65&w=1380",
            subDetail: "",
            title: "About Us",
          }}
        />
        <WhatWeDo what_we_do={whatWeDo} />

        <WhyChooseUs why_choose_us={whyChooseUsData} />
        <SoftwareLifeCycle />
        <TopFeature feature_data={topFeature} />

        <CallToAction />
      </div>
    </div>
  );
}
