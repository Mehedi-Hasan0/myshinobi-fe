"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { upcomingCardsData } from "@/data/card";
import CurrentLiveCarouselCard from "./shared/CurrentLiveCarouselCard";
import Image from "next/image";

SwiperCore.use([Navigation]);

const swiperOptions = {
  navigation: {
    prevEl: ".upcoming-prev",
    nextEl: ".upcoming-next",
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

const Upcoming = () => {
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
    <>
      {/* current live carousel */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between sm:px-5 mt-16 mb-5 md:px-0 border-b border-[#30373F] pb-6 gap-5">
          <div className="flex items-center gap-2 sm:gap-5">
            <span className="text-[#F9C306] sm:underline underline-offset-2 md:underline-offset-8 font-medium text-xs sm:text-sm 2xl:text-lg uppercase cursor-pointer">
              upcoming in-game nfts
            </span>
            {/* divider */}
            <div className=" h-full w-[1px] bg-[#30373F]"></div>
            {/* divider */}
            <span className="text-[#7A7977] font-medium text-xs sm:text-sm 2xl:text-lg uppercase cursor-pointer hover:text-[#F9C306] hover:underline underline-offset-8 transition duration-150 ease-in">
              upcoming forging nfts
            </span>
            {/* divider */}
            <div className=" h-full w-[1px] bg-[#30373F]"></div>
            {/* divider */}
            <span className="text-[#7A7977] font-medium text-xs sm:text-sm 2xl:text-lg uppercase cursor-pointer hover:text-[#F9C306] hover:underline underline-offset-8 transition duration-150 ease-in">
              upcoming tickets
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="button-navigate upcoming-prev">
              <ArrowRight />
              {/* next */}
            </button>
            <button className="button-navigate upcoming-next">
              <ArrowLeft />
              {/* prev */}
            </button>
          </div>
        </div>
        <Swiper
          {...swiperOptions}
          className="w-full h-full pl-5 md:pl-3 pr-36 md:pr-0"
        >
          {/* have to replace dummy game to real data here */}
          {upcomingCardsData.map(
            ({ id, title, description, price, sold, nftImgae }) => (
              <SwiperSlide key={title}>
                <CurrentLiveCarouselCard
                  {...{ id, title, description, price, sold, nftImgae }}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </section>
    </>
  );
};

export default Upcoming;

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
