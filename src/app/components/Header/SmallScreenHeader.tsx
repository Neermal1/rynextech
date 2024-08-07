import { IHeader } from "@/app/interface/interface";
import { Drawer } from "antd";
import HeaderMenu from "./HeaderMenu";
import { AntdContext } from "@/app/context/AntdContext";
import { useContext } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import Link from "next/link";

const SmallScreenHeader = ({ header_data }: IHeader) => {
  const { openDrawer, setOpenDrawer } = useContext(AntdContext);
  const { headerItems } = header_data;

  return (
    <div>
      <Drawer
        placement="right"
        onClose={() => {
          setOpenDrawer(false);
        }}
        open={openDrawer}
        className="lg:hidden "
        destroyOnClose
      >
        <div className="flex justify-between flex-col h-[100%]">
          <div className="flex flex-col  gap-6 ">
            <HeaderMenu headerItems={headerItems} />
          </div>
          <Link
            href="/contact-us"
            onClick={() => {
              setOpenDrawer(false);
            }}
            className="flex items-center justify-center"
          >
            <PrimaryButton>Contact Us</PrimaryButton>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default SmallScreenHeader;
