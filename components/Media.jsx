import { mediaData } from "@/data/card";
import Image from "next/image";

const Media = () => {
  return (
    <section className="mt-8 sm:mt-16 flex flex-col gap-10">
      {/* header */}
      <div className="flex flex-col sm:flex-row items-end justify-between gap-10">
        <div className="flex flex-col gap-2 md:gap-3">
          <h4 className="text-white font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
            Media
          </h4>
          <p className="font-medium text-sm lg:text-base 2xl:text-lg text-[#e4e4e4cb]">
            Unleash strategic brilliance in the interstellar battlefield of
            StarCraft 2023, where every decision shapes the fate of <br />{" "}
            galaxies. Engage, conquer, thrive! where every decision shapes the
            fate of galaxies.
          </p>
        </div>

        <button className="underline underline-offset-4 capitalize text-[#F9C306] font-medium text-sm md:text-base lg:text-lg 2xl:text-xl">
          see all
        </button>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-5 lg:gap-6">
        {mediaData.map((mediaItem, i) => (
          <div
            key={i}
            className="relative flex flex-col gap-3 md:gap-4 lg:gap-5 cursor-pointer"
          >
            <div className="relative">
              <Image
                src={mediaItem.imgPath}
                alt="media 1"
                width={564}
                height={372}
                className=" rounded-2xl w-full h-full"
              />
              <div className="absolute inset-0 flex justify-center items-center z-30">
                <Image
                  src={mediaItem.playSvg}
                  alt="play"
                  width={94}
                  height={94}
                />
              </div>
              {/* overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-20  rounded-2xl"></div>
            </div>
            {/* text */}
            <div className="flex flex-col gap-2 lg:gap-3">
              <h4 className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-medium">
                {mediaItem.mediaName}
              </h4>
              <p className="text-[#e4e4e4cb] font-medium text-xs lg:text-sm 2xl:text-base">
                {mediaItem.mediaDesc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;
