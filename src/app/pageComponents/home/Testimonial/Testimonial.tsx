/* eslint-disable @next/next/no-img-element */
"use client";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { ITestimonial } from "@/app/interface/interface";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";

export default function Testimonials({ data }: ITestimonial) {
  return (
    <section className="relative overflow-hidden ">
      <div className="layout component-padding relative flex flex-col gap-20">
        <div className="flex items-center justify-center text-center">
          <ComponentHeader
            data={{
              heading: "Hear From Our Happy Customers",
              subheading: "Our Testimonials",
            }}
          />
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data?.map((testimonial, index: number) => (
              <SwiperSlide key={index}>
                <div className="py-8 lg:py-16">
                  <div className="relative bg-white h-full rounded-xl shadow border-b-8 border-gray-800 px-6 lg:px-12 py-8 lg:py-12 flex flex-col justify-between">
                    <div className="absolute -top-6 lg:-top-12 w-12 lg:w-24 h-12 lg:h-24">
                      <img
                        src={testimonial?.image_link}
                        alt=""
                        className="object-cover rounded-full border-4"
                      />
                    </div>
                    <div className="mt-4">
                      <p
                        className="text-gray-700 lg:text-lg mb-2 lg:mb-4 italic h-[15vh] overflow-y-scroll"
                        dangerouslySetInnerHTML={{
                          __html: testimonial?.message,
                        }}
                      />

                      <div className="">
                        <p className="text-gray-900 font-medium text-lg lg:text-xl mb-1">
                          {testimonial?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
