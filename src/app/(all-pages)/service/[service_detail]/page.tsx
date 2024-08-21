import CallToAction from "@/app/components/CallToAction/CallToAction";
import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import ServiceDevelopmentSteps from "@/app/pageComponents/serviceDetail/ServiceDevelopmentSteps";
import ServiceIntro from "@/app/pageComponents/serviceDetail/ServiceIntro";
import ServicePlatforms from "@/app/pageComponents/serviceDetail/ServicePlatforms";
import ServiceScope from "@/app/pageComponents/serviceDetail/ServiceScope";
import ServiceValue from "@/app/pageComponents/serviceDetail/ServiceValue";
import { unstable_noStore } from "next/cache";

export default async function ServiceDetailPage({ params }: any) {
  unstable_noStore();
  const { service_detail } = params;
  const { data: serviceDetailData, error: serviceDetailError } =
    await fetchServerData(`/service/${service_detail}`);

  return (
    <div>
      <PageHeader
        data={{
          image:
            "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041855.jpg?t=st=1723031328~exp=1723034928~hmac=2995b0b931a7e4a64d1fd78a3290dc799e43bb36688951dcec4828af6460b63d&w=1380",
          title: "Our Service",
          subDetail:
            "We help companies leverage technological capabilities by developing cutting-edge mobile applications with excellent UX (User Experience) across multiple platforms including Android and iOS and mobile devices.",
        }}
      />

      <ServiceIntro service_detail={serviceDetailData} />
      <ServiceValue />
      <ServiceScope service_detail={serviceDetailData} />
      <ServicePlatforms />
      <ServiceDevelopmentSteps />
      <CallToAction />
    </div>
  );
}
