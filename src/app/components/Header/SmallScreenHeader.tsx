import { IHeader } from "@/app/interface/interface";
import { Drawer } from "antd";
import HeaderMenu from "./HeaderMenu";

const SmallScreenHeader = ({ header_data }: IHeader) => {
  // const { openDrawer, setOpenDrawer } = useContext(AntdContext);
  const { headerItems } = header_data;

  return (
    <div>
      <Drawer
        placement="right"
        // onClose={() => {
        //   setOpenDrawer(false);
        // }}
        // open={openDrawer}
        className="lg:hidden "
      >
        <div className="flex justify-between flex-col h-[100%]">
          <div className="flex flex-col  gap-6 ">
            <HeaderMenu headerItems={headerItems} />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SmallScreenHeader;
