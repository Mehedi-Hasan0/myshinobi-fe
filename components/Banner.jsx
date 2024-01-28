"use client";

import Image from "next/image";
import React, { useState } from "react";

const Banner = () => {
  const [btnHover, setBtnHover] = useState(false);
  return (
    <section className="my-6">
      <div
        className=" p-8 md:p-10 xl:p-14 text-white relative min-h-[150px] sm:min-h-[200px] md:min-h-[300px] lg:min-h-[390px] 2xl:min-h-[430px] rounded-2xl"
        // style={{ backgroundImage: "url('/assets/images/bannerPic.png')" }}
      >
        {/* overlay */}
        {/* <div className="absolute bg-gradient-to-r from-[#3838381a] via-transparent to-[#211b02] w-full h-full top-0 left-0 z-10"></div> */}
        {/* overlay */}
        <div className="w-full h-full">
          <Image
            src={"/assets/images/bannerPic.png"}
            alt="banner"
            fill={true}
            className="object-fill"
          />
        </div>

        <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 flex flex-col gap-3 lg:gap-6 xl:gap-8 2xl:gap-10 z-30">
          <span className="flex flex-col gap-2 lg:gap-4">
            <h1 className="uppercase font-bold text-lg sm:text-2xl lg:text-4xl xl:text-6xl">
              Katana Inu
            </h1>
            <p className="uppercase text-[#7A7977] text-xs sm:text-sm lg:text-xl xl:text-3xl">
              minting nft items
            </p>
          </span>

          <div className="flex items-stretch gap-4">
            <button className="text-[#30373F] px-2 sm:px-3 py-1 md:px-4 md:py-2 2xl:py-4 2xl:px-6 bg-[#F9C306] hover:bg-transparent border border-[#F9C306] hover:text-white uppercase text-[10px] sm:text-xs lg:text-lg rounded-md 2xl:rounded-lg transition ease-in duration-200">
              mint <span className="font-bold">arena nft</span>
            </button>
            <button
              className="flex items-center gap-2 text-primary uppercase px-2 sm:px-3 py-1 md:px-4 md:py-2 2xl:py-4 2xl:px-6 rounded-md 2xl:rounded-lg border border-[#F9C306] hover:border-transparent hover:bg-[#F9C306] hover:text-[#30373F] transition duration-200 ease-in font-medium text-[10px] sm:text-xs lg:text-base"
              onMouseEnter={() => {
                setBtnHover(true);
              }}
              onMouseLeave={() => {
                setBtnHover(false);
              }}
            >
              <Image
                src={
                  btnHover
                    ? "/assets/icons/play-black.svg"
                    : "/assets/icons/play.svg"
                }
                alt="play btn"
                width={24}
                height={24}
                className=" w-4 sm:w-5 md:w-6"
              />
              Play trailer
            </button>
          </div>
        </div>

        {/* banner nft pic */}
        <div className="w-[300px] md:w-[440px] lg:w-[580px] 2xl:w-[680px] absolute bottom-0 lg:-top-12 2xl:-top-[86px] left-[27%] 2xl:left-[30%]">
          <Image
            src={"/assets/images/nft/bannerNft.png"}
            alt="banner"
            width={807}
            height={675}
            className="object-fill hidden sm:block"
          />
        </div>

        {/* right texts */}
        <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 sm:flex justify-end items-end flex-col gap-1 md:gap-2 2xl:gap-4 hidden">
          <p className="uppercase text-white font-bold text-[8px] sm:text-[10px] lg:text-xs 2xl:text-xl">
            Game with
          </p>
          <h3 className="text-[#F9C306] font-bold uppercase text-right text-sm sm:text-base lg:text-2xl 2xl:text-5xl">
            Magic <br /> Rewards
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Banner;
