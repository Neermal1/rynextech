import { IPageHeader } from "@/app/interface/interface";

const PageHeader = ({ data }: IPageHeader) => {
  return (
    <div
      style={{
        backgroundImage: `url(${data?.image.trim()})`,
      }}
      className="h-[55vh] text-white bg-fixed bg-contain relative flex items-center justify-center white-color"
    >
      <div className="absolute bg-gradient-to-l from-black to-black  opacity-80 3xl:opacity-70 w-full h-full top-0 left-0 right-0 bottom-0"></div>

      <div className="relative flex flex-col items-center justify-center">
        <div className="lg:text-[45px] text-center text-[35px] font-medium">
          {data?.title}
        </div>
        <div className="lg:w-[60%] text-center ">
          <div className="">{data?.subDetail}</div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
