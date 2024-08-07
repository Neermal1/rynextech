import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

//constants

//react icons
import { RxCaretDown } from "react-icons/rx";

//antd
import { text_animation } from "@/app/animation/animation_variants/animation_variants";
import { IHeaderMenu } from "@/app/interface/interface";
import { Popover } from "antd";
import { useContext } from "react";
import { AntdContext } from "@/app/context/AntdContext";

const HeaderMenu = ({ headerItems }: IHeaderMenu) => {
  const pathname = usePathname();
  const { setOpenDrawer } = useContext(AntdContext);

  return (
    <>
      {headerItems?.map((data, index) => {
        const link = data?.slug;
        const content = (
          <div className="">
            <div className="  layout py-6 lg:px-4 px-6 ">
              <div className="flex flex-col items-start justify-center gap-2 mx-[100px] ">
                <div className=" w-[100%]  grid lg:grid-cols-8 lg:gap-10 gap-5">
                  <div className="lg:col-span-2">
                    <div className="text-[20px] text-neutral font-bold">
                      All Services
                    </div>
                  </div>
                  <div className="lg:col-span-6 flex flex-col gap-6">
                    {data?.subMenu?.map((data, index: number) => {
                      return (
                        <Link
                          key={index}
                          href={`${link}/${data?.slug}`}
                          className="text-[16px] uppercase"
                          onClick={() => {
                            setOpenDrawer(false);
                          }}
                        >
                          <motion.div
                            initial="initial"
                            whileHover="whileHover"
                            variants={text_animation}
                            key={index}
                            className=""
                          >
                            {data?.name}
                          </motion.div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        return (
          <Popover
            content={data?.subMenu && content}
            key={index}
            trigger="hover"
            placement="top"
            autoAdjustOverflow
          >
            <Link
              href={`${!data?.subMenu ? data?.slug : "#"}`}
              key={index}
              className={`lg:hover:border-secondary hover:border-b-[2px]  text-black flex px-2 items-center justify-center hover:cursor-pointer ${
                (pathname === data?.slug ||
                  pathname.startsWith(data?.slug + "/")) &&
                "text-black lg:border-b-[2px] lg:border-secondary  hover:cursor-pointer"
              }`}
            >
              <div
                className="flex items-center hover:cursor-pointer uppercase  font-semibold "
                onClick={() => {
                  !data?.subMenu && setOpenDrawer(false);
                }}
              >
                <div>{data?.name}</div>
                <div>
                  {data?.subMenu && (
                    <div>
                      <RxCaretDown />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </Popover>
        );
      })}
    </>
  );
};

export default HeaderMenu;
