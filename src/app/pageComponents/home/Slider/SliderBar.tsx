import { ICompanyProfileData } from "@/app/interface/interface";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const SliderBar = ({ data: slider_bar_data }: ICompanyProfileData) => {
  return (
    <div className="flex flex-col gap-6  w-fit z-50">
      {slider_bar_data?.facebook && (
        <Link href={slider_bar_data?.facebook} target="_blank" className="">
          <FaFacebookF size={20} />
        </Link>
      )}
      {slider_bar_data?.instagram && (
        <Link href={slider_bar_data?.instagram} target="_blank" className="">
          <FaSquareInstagram size={20} />
        </Link>
      )}
      {slider_bar_data?.youtube && (
        <Link
          href={slider_bar_data?.youtube}
          target="_blank"
          className=" hover:cursor-pointer"
        >
          <IoLogoYoutube size={20} />
        </Link>
      )}

      {slider_bar_data?.twitter && (
        <Link
          href={slider_bar_data?.twitter}
          target="_blank"
          className=" hover:cursor-pointer"
        >
          <FaXTwitter size={20} />
        </Link>
      )}
    </div>
  );
};

export default SliderBar;
