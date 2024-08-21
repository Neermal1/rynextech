import PrimaryButton from "@/app/components/Button/PrimaryButton";
import { IBlogDetail } from "@/app/interface/interface";
import Link from "next/link";

const BlogDetail = ({ blog_detail }: IBlogDetail) => {
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-8 lg:gap-[100px] gap-10">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="text-[30px] text-primary font-semibold mb-3">
              {blog_detail?.details?.title}
            </div>
            <div>
              <img
                src={blog_detail?.details?.image_link}
                alt=""
                className="w-[100%] lg:h-[60vh] h-[40vh] object-cover"
              />
            </div>
            {blog_detail?.details?.description && (
              <div
                className="leading-[28px]"
                dangerouslySetInnerHTML={{
                  __html: blog_detail?.details?.description,
                }}
              />
            )}
          </div>
        </div>
        <div className="lg:col-span-3 sticky top-[80px]">
          <div className="bg-white drop-shadow-md p-6 sticky top-[140px]">
            <div className="flex flex-col gap-6">
              <div className="text-secondary text-[22px]">Related Blogs</div>
              <div className="grid lg:grid-cols-2 gap-10">
                {blog_detail?.others?.map((blog_detail: any, index: number) => {
                  return (
                    <Link
                      href={`/blogs/${blog_detail?.slug}`}
                      key={index}
                      className="group"
                    >
                      <div className="flex flex-col items-center gap-4">
                        <div>
                          <img
                            src={blog_detail?.image_link}
                            alt=""
                            className=" object-cover rounded-[8px]"
                          />
                        </div>
                        <div className="line-clamp-2 group-hover:text-primary text-[16px]">
                          {blog_detail?.title}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center justify-center">
                <Link href="/blogs">
                  <PrimaryButton>View More</PrimaryButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
