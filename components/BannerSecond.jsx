import Image from "next/image";

const BannerSecond = () => {
  return (
    <section className="py-6 relative">
      <div className=" p-8 md:p-10 xl:p-14 text-white relative min-h-[100px] sm:min-h-[160px] md:min-h-[200px] lg:min-h-[280px] 2xl:min-h-[320px] rounded-2xl">
        {/* banner image */}
        <div className="w-full h-full">
          <Image
            src={"/assets/images/bannerPic.png"}
            alt="banner"
            fill={true}
            className="object-fill"
          />
        </div>

        <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 flex flex-col md:gap-2 z-30">
          <h2 className="uppercase text-white text-base md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl">
            mining
          </h2>
          <h1 className="uppercase text-[#F9C306] font-bold text-lg md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl">
            KATANA INU
          </h1>
        </div>
        <div className="absolute top-4 right-4 md:top-10 md:right-10 flex flex-col items-end md:gap-2 z-30">
          <h5 className="uppercase text-white text-[10px] sm:text-xs md:text-sm 2xl:text-xl">
            let's start
          </h5>
          <h4
            className="uppercase text-[#F9C306] font-bold text-base md:text-lg lg:text-3xl 
          2xl:text-4xl"
          >
            mining
          </h4>
        </div>
        {/* banner nft pic */}
        <div className="w-[300px] sm:w-[450px] md:w-[600px] lg:w-[800px] 2xl:w-[920px] absolute bottom-0 left-5 sm:left-16 md:left-20 lg:left-[14%] xl:left-[21%] 2xl:left-[24%]">
          <Image
            src={"/assets/images/nft/bannerNft2.png"}
            alt="banner"
            width={1000}
            height={675}
            className="object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSecond;
