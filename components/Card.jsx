"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { cardsData } from "@/data/card";
import CarouselCard from "./shared/CarouselCard";
import Image from "next/image";

SwiperCore.use([Navigation]);

const swiperOptions = {
  navigation: {
    prevEl: ".gameonsale-prev",
    nextEl: ".gameonsale-next",
  },
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    480: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
    1440: {
      slidesPerGroup: 4,
      slidesPerView: 4,
    },
  },
};

const Card = () => {
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Navigation]);
      setSwiperLoaded(true);
    });
  }, []);

  if (!swiperLoaded) {
    return null; // loading state
  }
  return (
    <section className="mb-16">
      <div className="flex justify-between px-5 mt-16 mb-5 md:px-0">
        <div className="flex items-center gap-3 ">
          <button className="text-[#7A7977] text-xs lg:text-sm  px-3 py-1 rounded-md 2xl:rounded-lg border border-[#7A7977] uppercase font-bold">
            the last
          </button>
          <button className="text-[#7A7977] text-xs lg:text-sm  px-3 py-1 rounded-md 2xl:rounded-lg border border-[#7A7977] uppercase font-bold">
            show more
          </button>
          <button className="text-[#7A7977] text-xs lg:text-sm  px-3 py-1 rounded-md 2xl:rounded-lg border border-[#7A7977] uppercase font-bold">
            change
          </button>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-[#30373F] text-xs lg:text-sm 2xl:text-xl px-3 2xl:px-6 h-8 rounded 2xl:rounded-md uppercase font-semibold bg-[#F9C306]">
            Download app
          </button>

          <div className="flex items-center gap-3">
            <button className="button-navigate gameonsale-prev">
              <ArrowRight />
              {/* next */}
            </button>
            <button className="button-navigate gameonsale-next">
              <ArrowLeft />
              {/* prev */}
            </button>
          </div>
        </div>
      </div>
      <Swiper
        {...swiperOptions}
        className="w-full h-full pl-5 md:pl-3 pr-36 md:pr-0"
      >
        {/* have to replace dummy game to real data here */}
        {cardsData.map(
          ({ title, bgImage, discount, discountType, nftImage }) => (
            <SwiperSlide key={title}>
              <CarouselCard
                {...{ title, bgImage, discount, discountType, nftImage }}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default Card;

// Define ArrowRight and ArrowLeft components
const ArrowRight = () => (
  <div className="w-8 h-8 border border-[#7A7977] rounded-lg flex justify-center items-center hover:bg-[#F9C306] hover:border-transparent cursor-pointer transition duration-200 ease-in">
    <Image
      src="/assets/icons/arrow-left.svg"
      alt="right arrow"
      width={24}
      height={24}
      className=""
    />
  </div>
);

const ArrowLeft = () => (
  <div className="w-8 h-8 border border-[#7A7977] rounded-lg flex justify-center items-center hover:bg-[#F9C306] hover:border-transparent cursor-pointer transition duration-200 ease-in">
    <Image
      src="/assets/icons/arrow-left.svg"
      alt="right arrow"
      width={24}
      height={24}
      className="rotate-180"
    />
  </div>
);
