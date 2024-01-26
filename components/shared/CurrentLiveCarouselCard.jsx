import Image from "next/image";
import { IoIosHeart } from "react-icons/io";

const CurrentLiveCarouselCard = ({
  id,
  title,
  description,
  price,
  sold,
  nftImgae,
}) => {
  const svgSize = window.innerWidth < 1444 ? 20 : 24;
  return (
    <>
      <div className="min-h-[229px] lg:min-h-[250px] 2xl:min-h-[309px] rounded-tl-2xl rounded-tr-2xl bg-gradient-conic relative p-2 2xl:p-5">
        <div className="absolute bottom-0 z-10 left-0">
          <Image
            src={nftImgae}
            alt={title}
            width={410}
            height={309}
            className="aspect-[410/309] object-cover w-[300px] 2xl:w-[400px]"
          />
        </div>

        {/* overlay */}
        <div className="bg-gradient-to-b from-transparent to-[#0e0c158b] absolute z-20 w-full h-1/2 bottom-0 left-0"></div>
        {/* overlay */}

        <div className="flex flex-col justify-between relative z-30 h-[210px] lg:h-[230px] 2xl:h-[290px]">
          <div className="flex items-center justify-between gap-5">
            <span className="px-3 py-[6px] 2xl:px-4 2xl:py-2 rounded-full bg-[#15131D] uppercase text-xs 2xl:text-base text-white">
              new
            </span>

            <span className="p-2 2xl:p-4 rounded-full bg-[#15131D] cursor-pointer">
              <IoIosHeart size={svgSize} fill="#F9C306" />
            </span>
          </div>

          {/* btn */}
          <div className="flex justify-end">
            <button className="bg-[#F9C306] rounded-md px-3 py-2 2xl:px-5 2xl:py-2 text-[#30373F] font-bold uppercase text-sm 2xl:text-base">
              mint now!
            </button>
          </div>
        </div>
      </div>

      <div className=" my-3 2xl:my-6 flex flex-col gap-4 md:gap-6 2xl:gap-8">
        <span className="flex flex-col gap-1 md:gap-2 2xl:gap-3">
          <h4 className="text-white font-bold text-base 2xl:text-2xl">
            {title}
          </h4>
          <p className="text-xs md:text-sm 2xl:text-base text-[#D0D4EA]">
            {description}
          </p>
        </span>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm 2xl:text-base text-white">Price:</p>
            <p className="text-[#F9C306] text-base 2xl:text-lg font-semibold text-nowrap">
              {price}
            </p>
          </div>
          {/* divider */}
          <div className=" h-10 w-[1px] bg-[#30373F]"></div>
          {/* divider */}
          <div className="flex flex-col gap-1">
            <p className="text-sm 2xl:text-base text-white">Sold/Total:</p>
            <p className="text-[#F9C306] text-base 2xl:text-lg font-semibold">
              {sold}
            </p>
          </div>
          {/* divider */}
          <div className=" h-10 w-[1px] bg-[#30373F]"></div>
          {/* divider */}
          <div className="flex flex-col justify-center items-center gap-1">
            <Image
              src="/assets/icons/etherium.svg"
              alt="etherium"
              width={20}
              height={20}
            />
            <p className="text-[#F9C306] text-base 2xl:text-lg font-semibold">
              Ethereum
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentLiveCarouselCard;
