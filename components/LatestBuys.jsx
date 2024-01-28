import { latestBuysData } from "@/data/card";
import Image from "next/image";

const LatestBuys = () => {
  return (
    <>
      {/* this will be pginated that's why carousel is not used */}
      <section>
        <div className="flex justify-between px-5 mt-16 mb-5 md:px-0 border-b border-[#30373F] pb-6">
          <div className="flex items-center gap-5 ">
            <span className="text-[#F9C306] font-medium text-base 2xl:text-xl uppercase cursor-pointer">
              Latest Buys
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="button-navigate latestBuys-prev">
              <ArrowRight />
              {/* next */}
            </button>
            <button className="button-navigate latestBuys-next">
              <ArrowLeft />
              {/* prev */}
            </button>
          </div>
        </div>
        {/* buying data */}
        <div className="flex flex-col gap-5 bg-[#30373F66] rounded-2xl px-6 py-5">
          {/* header */}
          <div className="px-6 py-3 bg-[#F9C306] flex items-center justify-between gap-5 rounded-lg">
            <p className="text-[#30373F] uppercase text-xs font-medium w-1/5 lg:text-base">
              Wallet Address
            </p>
            <p className="text-[#30373F] uppercase text-xs lg:text-base font-medium">
              buyer Name
            </p>
            <p className="text-[#30373F] uppercase text-xs lg:text-base font-medium w-1/5">
              Collection name
            </p>
            <p className="text-[#30373F] uppercase text-xs lg:text-base font-medium">
              Price
            </p>
            <p className="text-[#30373F] uppercase text-xs lg:text-base font-medium min-w-[70px]">
              Time
            </p>
          </div>
          {/* data */}
          {latestBuysData.map((data) => (
            <div
              key={data.id}
              className="text-[#E4E4E4] px-6 py-3 bg-[#0E0C15] flex items-center justify-between gap-5 rounded-lg"
            >
              <p className="w-1/5 text-wrap text-xs lg:text-base">{data.id}</p>
              <p className="flex items-center gap-2 text-xs lg:text-base">
                <Image
                  src="/assets/images/buyer.png"
                  alt="buyer"
                  width={24}
                  height={24}
                />
                {data.name}
              </p>
              <p className="w-1/5 text-xs lg:text-base">
                {data.collectionName}
              </p>
              <p className=" text-xs lg:text-base">{data.price}</p>
              <p className=" text-xs lg:text-base">{data.time}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LatestBuys;

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
