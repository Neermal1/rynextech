"use client";
//images
import { IFooter } from "@/app/interface/interface";
import Link from "next/link";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLocationSharp, IoLogoYoutube, IoMailSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { text_animation } from "@/app/animation/animation_variants/animation_variants";

const iconStyle =
  "text-secondary border-[1px] border-secondary p-2 hover:bg-primary hover:border-primary hover:text-[white] transition-all duration-700 hover:cursor-pointer";

const Footer = ({ footer_data }: IFooter) => {
  const { companyProfile, category } = footer_data;

  const updated_category = category?.map((data) => {
    return {
      list: data?.name,
      link: `/service/${data?.slug}`,
    };
  });

  const footerStyle = [
    {
      title: "USEFUL LINKS",
      desc: [
        {
          list: "Home",
          link: "/",
        },
        {
          list: "About Us",
          link: "/about-us",
        },
        {
          list: "Blogs",
          link: "/blogs",
        },
        {
          list: "Gallery",
          link: "/gallery",
        },
        {
          list: "Contact Us",
          link: "/contact-us",
        },
      ],
    },
    {
      title: "Services",
      desc: updated_category,
    },
  ];

  return (
    <div className="bg-white border-t-2 border-secondary text-black">
      <div className="layout lg:px-4 px-6 py-10 ">
        <div className="grid lg:grid-cols-4 gap-20">
          <div className="flex flex-col gap-6">
            <div className="w-[100%]">
              <img
                src={companyProfile?.logo_link}
                alt=""
                className="lg:w-[35vh] w-[35vh] object-contain"
              />
            </div>
            <div
              className="text-black text-[16px] text-justify"
              dangerouslySetInnerHTML={{
                __html: companyProfile?.footer_text,
              }}
            />

            <div className="flex flex-col gap-6">
              <div className="text-[18px] tracking-[4px]">FOLLOW US </div>
              <div className="flex items-center gap-4">
                {companyProfile?.facebook && (
                  <Link
                    href={companyProfile?.facebook}
                    target="_blank"
                    className={`${iconStyle}`}
                  >
                    <FaFacebookF />
                  </Link>
                )}
                {companyProfile?.instagram && (
                  <Link
                    href={companyProfile?.instagram}
                    target="_blank"
                    className={`${iconStyle}`}
                  >
                    <FaSquareInstagram size={16} />
                  </Link>
                )}
                {companyProfile?.youtube && (
                  <Link
                    href={companyProfile?.youtube}
                    target="_blank"
                    className={`${iconStyle}`}
                  >
                    <IoLogoYoutube size={18} />
                  </Link>
                )}

                {companyProfile?.twitter && (
                  <Link
                    href={companyProfile?.twitter}
                    target="_blank"
                    className={`${iconStyle}`}
                  >
                    <FaXTwitter size={18} />
                  </Link>
                )}
              </div>
            </div>
          </div>
          {footerStyle?.map((data, index) => {
            return (
              <div key={index} className="flex flex-col  gap-6">
                <div className="text-[22px] font-semibold">{data?.title}</div>
                <div className="flex flex-col gap-4">
                  {data?.desc?.map((data: any, index: any) => {
                    return (
                      <Link
                        href={data?.link}
                        key={index}
                        className="flex flex-col gap-4"
                      >
                        <motion.div
                          variants={text_animation}
                          initial="initial"
                          whileHover="whileHover"
                          className="text-black  flex items-center gap-1 "
                        >
                          <div>
                            <MdKeyboardArrowRight size={12} />
                          </div>
                          <div>{data?.list}</div>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <motion.div className="flex flex-col gap-6">
            <div>CONTACT US</div>
            <div className="text-black flex flex-col gap-4">
              <motion.div
                initial="initial"
                whileHover="whileHover"
                variants={text_animation}
                className="flex items-center gap-1"
              >
                <div>
                  <IoLocationSharp size={18} />
                </div>
                <div>{companyProfile?.company_address}</div>
              </motion.div>
              <motion.div
                initial="initial"
                whileHover="whileHover"
                variants={text_animation}
              >
                <a
                  href={`tel:${companyProfile?.company_email}`}
                  className="flex items-center gap-1"
                >
                  <div>
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>{companyProfile?.company_phone}</div>
                </a>
              </motion.div>
              <motion.div
                initial="initial"
                whileHover="whileHover"
                variants={text_animation}
              >
                <a
                  href={`mailto:${companyProfile?.company_email}`}
                  className="flex items-center gap-1"
                >
                  <div>
                    <IoMailSharp size={18} />
                  </div>
                  <div>{companyProfile?.company_email}</div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t-[1px] border-t-[gray]">
        <div className="layout px-6 py-6 text-black flex lg:flex-row flex-col  gap-4 items-center lg:justify-between justify-center">
          <div className="lg:text-start text-center">
            Copyright ©{" "}
            <a href="#" className="text-secondary">
              rynexsolution.com.
            </a>{" "}
            All Rights Reserved.
          </div>
          <div>
            Designed by{" "}
            <a
              className="text-secondary"
              href="https://nextaussietech.com/"
              target="__blank"
            >
              Next Aussie Tech.
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
