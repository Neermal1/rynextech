"use client";
import { ICard } from "@/app/interface/interface";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ data }: ICard) => {
  return (
    <>
      <div className="bg-white  drop-shadow-lg rounded-md group">
        <Link href={`/service/${data?.slug}`} className="flex flex-col gap-6">
          <div className="bg-accent p-6">
            <img
              src={data?.image_link}
              alt=""
              className="h-[20vh] w-[100%] object-contain group-hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col gap-10 p-6">
            <div className="flex flex-col gap-4">
              <div className="text-[25px] font-bold lg:h-[7vh]">
                {data?.name}
              </div>
              <div
                className="line-clamp-2 "
                dangerouslySetInnerHTML={{
                  __html: data?.description,
                }}
              />
            </div>
            <div className="flex items-center gap-2 group-hover:text-secondary text-[18px]">
              <div>Read More</div>
              <div className="group-hover:translate-x-2 transition-all duration-700">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
