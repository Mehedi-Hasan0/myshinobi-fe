"use client";

import Image from "next/image";
import { useState } from "react";

const NftMining = () => {
  const [miningNumber, setMiningNumber] = useState(823);
  const [minting, setMinting] = useState(1);

  const totalMiningNumber = 5555;
  const percentageOfMining = Math.ceil(
    (miningNumber * 100) / totalMiningNumber
  );

  return (
    <section className="mt-8 sm:mt-16">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-10 md:gap-32">
        {/* header */}
        <h2 className="text-[#E4E4E4] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold sm:flex-1">
          Champion Forging <br className="hidden sm:block" /> Collection Gen1
        </h2>
        <p className="text-[#D0D4EA] text-xs md:text-sm xl:text-base 2xl:text-xl sm:w-[400px] md:mt-5 sm:flex-1">
          Check for Katana Inu Ecosystem for Renting, Staking, our Marketplace
          or for purchasing our $Kata Token:
        </p>
      </div>

      {/* images and content */}
      <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-20 mt-6">
        {/* images */}
        <div className="w-full lg:min-w-[500px] min-h-[400px] sm:min-h-[580px] md:min-h-[530px] lg:min-h-[600px] 2xl:min-h-[670px] bg-gradient-conic pt-5 sm:px-6 sm:pt-10 rounded-2xl relative flex-1">
          <Image
            src="/assets/images/nft/miningNft.png"
            alt="nft"
            width={810}
            height={1113}
            className="absolute bottom-0"
          />
          {/* overlay */}
          <div className="absolute bg-gradient-to-b from-transparent to-[#00000078] top-0 left-0 w-full h-full rounded-2xl"></div>
        </div>

        {/* content */}
        <div className="flex flex-col gap-3 md:gap-8 2xl:gap-10 flex-1 mx-auto">
          {/* favourite * share * affiliate */}
          <div className="flex items-center gap-2 md:gap-3 xl:gap-4">
            {/* favourite */}
            <div className="py-2 pl-2 pr-5 bg-[#E4E4E41A] rounded-full flex items-center gap-2">
              <div className="p-2 rounded-full bg-[#E4E4E41A]">
                <Image
                  src="/assets/icons/favourite.svg"
                  alt="favourite"
                  width={16}
                  height={16}
                />
              </div>
              <p className="text-white text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                Favourite
              </p>
            </div>
            {/* share */}
            <div className="py-2 pl-2 pr-5 bg-[#E4E4E41A] rounded-full flex items-center gap-2">
              <div className="p-2 rounded-full bg-[#E4E4E41A]">
                <Image
                  src="/assets/icons/share.svg"
                  alt="favourite"
                  width={16}
                  height={16}
                />
              </div>
              <p className="text-white text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                Share
              </p>
            </div>
            {/* affiliate */}
            <div className="py-2 pl-2 pr-5 bg-[#E4E4E41A] rounded-full flex items-center gap-2">
              <div className="p-2 rounded-full bg-[#E4E4E41A]">
                <Image
                  src="/assets/icons/affiliate.svg"
                  alt="favourite"
                  width={16}
                  height={16}
                />
              </div>
              <p className="text-white text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                Affiliate
              </p>
            </div>
          </div>

          {/* progress and details */}
          <div className="flex items-center gap-20">
            <div className="flex flex-col gap-2 lg:gap-4">
              <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] text-[#D0D4EA]">
                Total Available (Sold/Total)
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-5xl text-white font-bold">
                <span className="text-[#F9C306]">{miningNumber}</span>/
                {totalMiningNumber}
              </p>
            </div>

            {/* radial progress */}
            <div className=" rounded-full bg-[#30373F]">
              <div
                className="radial-progress text-[#F9C306]"
                style={{ "--value": percentageOfMining }}
                role="progressbar"
              >
                <div className="bg-[#0e0c15] p-2 rounded-full">
                  <p className="rounded-full px-2 py-3 bg-[#30373F] text-white text-base">
                    {percentageOfMining}%
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* divider line */}
          <div className="w-full h-[1px] bg-[#30373F]"></div>

          {/* price & mint */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            {/* minting details */}
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5">
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  <span className="text-[#F9C306]">Print</span>/Mint:
                </p>

                {/* ethereum text */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/icons/etherium.svg"
                    alt="ethereum"
                    width={32}
                    height={32}
                  />

                  <p className="px-4 py-1 rounded-full bg-[#F9C306] text-[#15131D] capitalize">
                    ethereum
                  </p>
                </div>

                <h4 className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-[#F9C306]">
                  0.04 Ethereum{" "}
                  <span className="font-normal text-sm md:text-base lg:text-lg 2xl:text-2xl text-white">
                    (0.04 ETH)
                  </span>
                </h4>
              </div>
            </div>

            {/* minting btn */}
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
              {/* minting increase & decrease btn */}
              <div className="p-2 rounded-full bg-[#30373F] flex items-center gap-2 lg:gap-3">
                <button
                  onClick={() => {
                    setMinting((prev) => prev + 1);
                  }}
                >
                  <Image
                    src="/assets/icons/add-circle.svg"
                    width={28}
                    height={28}
                    alt="plus or increase btn"
                  />
                </button>
                <p className="min-w-[20px] text-[#F9C306] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center">
                  {minting}
                </p>
                <button
                  onClick={() => {
                    if (minting === 1) {
                      return;
                    } else {
                      setMinting((prev) => prev - 1);
                    }
                  }}
                >
                  <Image
                    src="/assets/icons/minus-sign-circle.svg"
                    width={28}
                    height={28}
                    alt="minus or decrease btn"
                  />
                </button>
              </div>

              {/* mint now btn */}
              <button className="min-w-[170px] text-[#30373F] bg-[#F9C306] border border-[#F9C306] hover:bg-transparent hover:text-white transition duration-200 ease-in text-center text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl uppercase rounded-md font-semibold py-2">
                mint now!
              </button>
            </div>

            {/* divider line */}
            <div className="w-full h-[1px] bg-[#30373F]"></div>

            {/* public sale */}
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
              <button className="px-3 py-2 md:px-4 lg:px-5 lg:py-3 2xl:px-6 2xl:py-4 bg-[#E4E4E41A] hover:bg-[#F9C306] hover:text-[#30373F] transition duration-200 ease-in uppercase rounded-md text-white font-medium w-fit">
                public sale
              </button>

              <div className="flex items-center gap-5 md:gap-8 lg:gap-10 2xl:gap-14">
                <p className="text-sm md:text-base lg:text-lg 2xl:text-2xl text-white uppercase">
                  <span className="text-[#F9C306] font-medium">Price:</span>{" "}
                  0.04 ETH
                </p>
                <p className="text-sm md:text-base lg:text-lg 2xl:text-2xl text-white uppercase">
                  <span className="text-[#F9C306] font-medium">Limit:</span> 75
                  NFTs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftMining;
