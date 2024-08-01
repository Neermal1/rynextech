import { IButton } from "@/app/interface/interface";

const PrimaryButton = ({ children }: IButton) => {
  return (
    <div className=" rounded-full lg:text-[20px] text-[16px] hover:cursor-pointer hover:bg-hover hover: lg:px-6 lg:py-3 px-4 py-2 text-white bg-secondary flex items-center justify-center w-fit">
      {children}
    </div>
  );
};

export default PrimaryButton;
