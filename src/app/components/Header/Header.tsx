"use client";
import Link from "next/link";
import { useContext } from "react";

//context
// import { AntdContext } from "@/app/antdContext/AntdContext";
// import { CustomerInfoContext } from "@/app/context/CustomerInfoContext";
import { IoIosMenu } from "react-icons/io";

//interface

//components
import { IHeader } from "@/app/interface/interface";
import Ribbonbar from "./RibbonBar";
import HeaderMenu from "./HeaderMenu";
import SmallScreenHeader from "./SmallScreenHeader";
import PrimaryButton from "../Button/PrimaryButton";
import { AntdContext } from "@/app/context/AntdContext";

const Header = ({ header_data }: IHeader) => {
  const { setOpenDrawer } = useContext(AntdContext);

  //   const { customer_name } = useContext(CustomerInfoContext);

  const { companyProfile, headerItems } = header_data;

  return (
    <>
      {/* <Ribbonbar ribbon_bar_data={companyProfile} /> */}
      <div className="sticky top-0 z-50">
        <div className="">
          <div className="bg-white   drop-shadow-md text-black ">
            <div className="layout   lg:px-4  px-6 lg:py-0 py-4 lg:items-stretch items-center flex lg:gap-6 gap-20  justify-between ">
              <Link href="/" className="flex items-center my-4">
                <img
                  src={companyProfile?.logo_link}
                  alt=""
                  className="lg:w-[35vh] w-[25vh]"
                />
              </Link>
              <div className="lg:flex gap-6 hidden ">
                <HeaderMenu headerItems={headerItems} />
              </div>
              <Link
                href="/contact-us"
                className="hidden lg:flex items-center justify-center "
              >
                <PrimaryButton>Contact Us</PrimaryButton>
              </Link>

              <div className="lg:hidden flex items-center gap-4">
                <div
                  onClick={() => {
                    setOpenDrawer(true);
                  }}
                >
                  <IoIosMenu size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SmallScreenHeader
          header_data={{
            companyProfile,
            headerItems,
          }}
        />
      </div>
    </>
  );
};

export default Header;
