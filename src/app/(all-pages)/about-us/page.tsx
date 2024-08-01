import CallToAction from "@/app/components/CallToAction/CallToAction";
import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import WhatWeDo from "@/app/pageComponents/aboutUs/what_we_do/WhatWeDo";

export default async function AboutUsPage() {
  return (
    <div>
      <div>
        <PageHeader
          data={{
            image:
              "https://volute.co.in/wp-content/uploads/2021/09/About-us-min.jpg",
            subDetail: "",
            title: "About Us",
          }}
        />
        <div>
          <WhatWeDo />
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
