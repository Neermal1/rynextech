import CallToAction from "@/app/components/CallToAction/CallToAction";
import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import ServiceDevelopmentSteps from "@/app/pageComponents/serviceDetail/ServiceDevelopmentSteps";
import ServiceIntro from "@/app/pageComponents/serviceDetail/ServiceIntro";
import ServiceScope from "@/app/pageComponents/serviceDetail/ServiceScope";
import ServiceValue from "@/app/pageComponents/serviceDetail/ServiceValue";
import WhyOurService from "@/app/pageComponents/serviceDetail/WhyOurService";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params?.service_detail;
  const heading = slug
    .replace(/-/g, " ")
    .replace(/(^|\s)\S/g, function (t: any) {
      return t.toUpperCase();
    });

  const { data: serviceDetailData } = await fetchServerData(`/service/${slug}`);

  return {
    title: `Rynex Solutions-${slug ? heading : "Error"}`,
    keywords: "best website portfolio tech IT",

    openGraph: {
      type: "website",
      url: "https://example.com/about",
      title: `Rynex Solutions-${slug ? heading : "Error"}`,

      images: [
        {
          url: serviceDetailData?.details?.image_link,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: any) {
  unstable_noStore();
  const { service_detail } = params;
  const { data: serviceDetailData, error: serviceDetailError } =
    await fetchServerData(`/service/${service_detail}`);

  if (serviceDetailError) return <div>Sorry Something went wrong</div>;

  if (!serviceDetailData?.details) return notFound();
  return (
    <div>
      <PageHeader
        data={{
          image: serviceDetailData?.details?.image_link,
          title: serviceDetailData?.details?.name,
          subDetail: "",
        }}
      />

      <ServiceIntro service_detail={serviceDetailData} />
      <ServiceValue service_detail={serviceDetailData} />
      <ServiceScope service_detail={serviceDetailData} />
      <ServiceDevelopmentSteps service_detail={serviceDetailData} />
      <WhyOurService service_detail={serviceDetailData} />
      <CallToAction />
    </div>
  );
}
