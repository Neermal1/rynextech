"use client";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IBlogs } from "@/app/interface/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiClock2 } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogList = ({ blog_data }: IBlogs) => {
  const pathname = usePathname();
  return (
    <div className="">
      <div className="flex flex-col gap-20 layout component-padding">
        {pathname !== "/news" && (
          <div className="flex items-center justify-center ">
            <ComponentHeader
              data={{
                heading: "Latest Blogs",
                subheading: "",
              }}
            />
          </div>
        )}
        <div className="grid lg:grid-cols-3 gap-10">
          {blog_data?.slice(0, 6)?.map((blog_data, index: number) => {
            return (
              <motion.div
                key={index}
                initial={{
                  y: 100,
                }}
                whileInView={{
                  y: 0,
                  transition: {
                    type: "spring",
                    delay: 0.1 * index,
                    stiffness: 300,
                  },
                }}
              >
                <Link href={`/blogs/${blog_data?.slug}`} className={`group `}>
                  <div className="">
                    <div className="">
                      <div className="overflow-hidden">
                        <img
                          src={blog_data?.image_link}
                          alt=""
                          className="h-[30vh] w-[100%] object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
                        />
                      </div>
                      <div className="bg-lightAccent p-6">
                        <div className="flex gap-2 items-center italic">
                          <div className="ml-[4px]">
                            <CiClock2 size={20} />
                          </div>
                          <div>
                            {new Date(blog_data?.created_at).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="lg:text-[18px] text-primary   font-medium mt-3">
                            {blog_data?.title}
                          </div>
                        </div>
                        <div className="flex justify-end ">
                          <FaArrowRightLong
                            size={20}
                            className="group-hover:translate-x-2 transition-all duration-300 group-hover:text-secondary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
