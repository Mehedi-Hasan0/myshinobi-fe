import Image from "next/image";

const CarouselCard = ({ title, bgImage, discount, discountType, nftImage }) => {
  return (
    <div
      className="w-full min-h-[280px] relative rounded-xl flex flex-col"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h4 className="m-4 2xl:m-5 text-[#30373F] text-xl 2xl:text-2xl font-bold">
        {title}
      </h4>

      <div>
        <Image
          src={nftImage}
          alt={title}
          width={354}
          height={516}
          className="absolute bottom-0 w-[270px]"
        />
      </div>

      <div className="absolute bottom-5 right-5 flex flex-col gap-2 2xl:gap-5">
        <span className="flex flex-col items-center justify-center 2xl:gap-3">
          <h3 className="text-white text-4xl font-bold">{discount}</h3>
          <p className="text-[#30373F] text-xs lg:text-sm font-medium">
            {discountType}
          </p>
        </span>

        <button className="rounded-md px-3 py-1 bg-[#30373F] hover:bg-[#252a30] transition duration-200 ease-in uppercase text-white">
          Get bonus
        </button>
      </div>
    </div>
  );
};

export default CarouselCard;
