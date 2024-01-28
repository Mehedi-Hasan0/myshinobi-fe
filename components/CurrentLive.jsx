"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { currentLiveCardsData } from "@/data/card";
import CurrentLiveCarouselCard from "./shared/CurrentLiveCarouselCard";

SwiperCore.use([Navigation]);

const swiperOptions = {
  navigation: {
    prevEl: ".currentLive-prev",
    nextEl: ".currentLive-next",
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

const CurrentLive = () => {
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
      <section className="flex flex-row items-center justify-between gap-5 mb-16">
        <label
          htmlFor="search"
          className="min-w-[300px] lg:min-w-[500px] 2xl:min-w-[600px] px-4 py-3 2xl:p-5 bg-[#30373F66] rounded-lg flex items-center gap-2 cursor-pointer"
        >
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={20}
            height={20}
            className="w-4 2xl:w-5"
          />
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            className="w-full bg-transparent placeholder:text-[#E4E4E4] placeholder:uppercase text-white focus-visible:outline-none placeholder:text-sm 2xl:placeholder:text-base cursor-pointer"
            placeholder="Search for games"
          />
        </label>

        <div className="flex items-center gap-2 2xl:gap-3">
          <div className="flex items-center gap-2 2xl:gap-3 px-5 py-3 2xl:px-7 2xl:py-4 bg-[#30373F66] rounded-full">
            <Image
              src="/assets/icons/sort.svg"
              alt="sort"
              width={20}
              height={20}
              className="w-4 2xl:w-5"
            />
            <p className="text-xs 2xl:text-base uppercase text-[#E4E4E4]">
              sort
            </p>
          </div>
          <div className="flex items-center gap-2 2xl:gap-3 px-5 py-3 2xl:px-7 2xl:py-4 bg-[#30373F66] rounded-full">
            <Image
              src="/assets/icons/filter.svg"
              alt="sort"
              width={20}
              height={20}
              className="w-4 2xl:w-5"
            />
            <p className="text-xs 2xl:text-base uppercase text-[#E4E4E4]">
              filter
            </p>
          </div>
        </div>
      </section>

      {/* current live carousel */}
      <section className="mb-16">
        <div className="flex justify-between px-5 mt-16 mb-5 md:px-0 border-b border-[#30373F] pb-6">
          <div className="flex items-center gap-5 ">
            <span className="text-[#F9C306] underline underline-offset-8 font-medium text-sm 2xl:text-lg uppercase cursor-pointer">
              Current live
            </span>
            {/* divider */}
            <div className=" h-full w-[1px] bg-[#30373F]"></div>
            {/* divider */}
            <span className="text-[#7A7977] font-medium text-sm 2xl:text-lg uppercase cursor-pointer hover:text-[#F9C306] hover:underline underline-offset-8 transition duration-150 ease-in">
              Current live
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="button-navigate currentLive-prev">
              <ArrowRight />
              {/* next */}
            </button>
            <button className="button-navigate currentLive-next">
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
          {currentLiveCardsData.map(
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

export default CurrentLive;

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
