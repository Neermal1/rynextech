import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import TopService from "@/app/pageComponents/service/home/TopService";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Rynex Solution-Service",
    keywords: "best website portfolio tech IT",

    openGraph: {
      type: "website",
      url: "https://example.com/about",
      title: `Rynex Solutions-Service`,

      images: [
        {
          url: `https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041867.jpg`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
export default async function servicePage() {
  const { data: service, error: serviceError } = await fetchServerData(
    "/home/services"
  );
  if (serviceError) return <div>This is service error</div>;
  return (
    <div>
      <TopService service_data={service} />
    </div>
  );
}
