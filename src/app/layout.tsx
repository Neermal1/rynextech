import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header/Header";
import "./globals.css";
import { fetchServerData } from "./helperFunctions/fetchServerData";
import Footer from "./components/Footer/Footer";

const public_sans = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rynex Solutions",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: category } = await fetchServerData("/nav/category");
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
      name: "Our Gallery",
      slug: "/gallery",
    },
    {
      name: "Products",
      subMenu: category,
      slug: "/category",
    },
    {
      name: "Blogs",
      slug: "/blogs",
    },

    {
      name: "Contact Us",
      slug: "/contact-us",
    },
  ];
  return (
    <html lang="en">
      <body className={public_sans.className}>
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
      </body>
    </html>
  );
}
