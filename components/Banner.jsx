import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="my-6">
      <div
        className=" p-8 md:p-10 xl:p-14 text-white relative min-h-[390px] 2xl:min-h-[430px] rounded-2xl"
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

        <div className="absolute bottom-10 left-10 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 z-40">
          <span className="flex flex-col gap-4">
            <h1 className="uppercase font-bold text-4xl lg:text-6xl">
              Katana Inu
            </h1>
            <p className="uppercase text-[#7A7977] text-xl lg:text-3xl">
              minting nft items
            </p>
          </span>

          <div className="flex items-center gap-4">
            <button className="text-[#30373F] px-4 py-2 2xl:py-4 2xl:px-6 bg-[#F9C306] uppercase text-lg rounded-md 2xl:rounded-lg">
              mint <span className="font-bold">arena nft</span>
            </button>
            <button className="flex items-center gap-2 text-[#F9C306] uppercase px-4 py-2 2xl:py-4 2xl:px-6 rounded-md 2xl:rounded-lg border border-[#F9C306]">
              <Image
                src="/assets/icons/play.svg"
                alt="play btn"
                width={24}
                height={24}
              />
              Play trailer
            </button>
          </div>
        </div>

        {/* banner nft pic */}
        <div className="lg:w-[580px] 2xl:w-[680px] absolute -top-12 2xl:-top-[86px] left-[27%] 2xl:left-[30%]">
          <Image
            src={"/assets/images/nft/bannerNft.png"}
            alt="banner"
            width={807}
            height={675}
            className="object-fill"
          />
        </div>

        {/* right texts */}
        <div className="absolute bottom-10 right-10 flex justify-end items-end flex-col gap-2 2xl:gap-4">
          <p className="uppercase text-white font-bold text-xs 2xl:text-xl">
            Game with
          </p>
          <h3 className="text-[#F9C306] font-bold uppercase text-right text-2xl 2xl:text-5xl">
            Magic <br /> Rewards
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Banner;
