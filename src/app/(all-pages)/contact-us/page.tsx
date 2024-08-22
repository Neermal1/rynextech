import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import ContactDetail from "@/app/pageComponents/contactUs/ContactDetail";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Rynex Solutions-Contact Us",
    keywords: "best website portfolio tech IT",
    openGraph: {
      type: "website",
      title: `Rynex Solutions-Contact Us`,
      description: `Rynex Solutions`,
      images: [
        {
          url: `https://img.freepik.com/free-photo/top-view-arrangement-with-gadgets-copy-space_23-2148847745.jpg?t=st=1722591441~exp=1722595041~hmac=373531292ce0ab6b0f5b29558b6013ec9212d543e059379abdc0abb3888405f5&w=1380`,
        },
      ],
    },
  };
}

export default async function ContactUsPage() {
  const { data: companyProfile, error: companyProfileError } =
    await fetchServerData("/company-profile");
  return (
    <div>
      <PageHeader
        data={{
          title: "CONTACT US",
          subDetail: "",
          image:
            "https://www.auburnbowl.com/Portals/0/BlockBuilderImages/403/bowlcity_bannersContact%20Banner.jpg",
        }}
      />
      <ContactDetail data={companyProfile} />
    </div>
  );
}
