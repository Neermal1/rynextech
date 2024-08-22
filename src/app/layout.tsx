import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AntdContextProvider from "./context/AntdContext";
import "./globals.css";
import { fetchServerData } from "./helperFunctions/fetchServerData";

const public_sans = Public_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { data: companyProfile } = await fetchServerData("/company-profile");
  return {
    title: "Rynex Tech",
    description: companyProfile?.description,
    icons: {
      icon: companyProfile?.favicon_link,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: category } = await fetchServerData("/nav/services");
  const { data: companyProfile } = await fetchServerData("/company-profile");

  const headerItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "About Us",
      slug: "/about-us",
    },
    {
      name: "Service",
      subMenu: category,
      slug: "/service",
    },
    {
      name: "Our Gallery",
      slug: "/gallery",
    },

    {
      name: "Blogs",
      slug: "/blogs",
    },
  ];
  return (
    <html lang="en">
      <body className={public_sans.className}>
        <AntdContextProvider>
          <Header
            header_data={{
              companyProfile,
              headerItems,
            }}
          />
          {children}

          <Footer
            footer_data={{
              companyProfile,
              category,
            }}
          />
        </AntdContextProvider>
      </body>
    </html>
  );
}
