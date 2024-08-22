import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import BlogDetail from "@/app/pageComponents/blogs/BlogDetail";

import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { blogDetail } = params;
  const { data: blogs } = await fetchServerData(`/blog/${blogDetail}`);
  return {
    title: blogs?.details?.title,
    keywords: "best website portfolio tech IT",

    openGraph: {
      type: "website",
      url: "https://example.com/about",
      title: `Rynex Solutions-${blogs?.details?.title}`,

      images: [
        {
          url: blogs?.details?.image_link,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function BlogDetailPage({ params }: any) {
  unstable_noStore();

  const { blogDetail } = params;
  const { data: blogs, error: blogError } = await fetchServerData(
    `/blog/${blogDetail}`
  );

  if (blogError) return <div>Error.Sorry Something went wrong</div>;

  if (blogs?.details === null) {
    notFound();
  }

  return (
    <div>
      <div>
        <PageHeader
          data={{
            image: `${blogs?.details?.image_link}`,
            title: `${blogs?.details?.title}`
              .replace(/-/g, " ")
              .replace(/(^|\s)\S/g, function (t: any) {
                return t.toUpperCase();
              }),
            subDetail: "",
          }}
        />
        <BlogDetail blog_detail={blogs} />
      </div>
    </div>
  );
}
