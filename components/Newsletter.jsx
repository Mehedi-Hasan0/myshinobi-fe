import Image from "next/image";

const Newsletter = () => {
  return (
    <section className=" mt-28 pb-20 bg-gradient-to-b from-transparent to-[#110e198b]">
      <div className="min-h-[210px] relative rounded-2xl">
        <Image
          src="/assets/images/newsletterBg.png"
          alt="banner"
          width={409}
          height={208}
          className="w-full h-[210px] object-cover rounded-2xl absolute top-0 left-0 z-10"
        />
        <div className="newsletter-overlay absolute top-0 left-0 w-full h-full z-20 rounded-2xl"></div>

        <div className="absolute bottom-0 left-10 z-10">
          <Image
            src="/assets/images/nft/crNft3.png"
            alt="nft"
            width={409}
            height={385}
            className="w-[340px]"
          />
        </div>
        {/* overlay */}
        <div className=" bg-gradient-to-b from-transparent to-[#0c0c1586] absolute w-full h-full bottom-0 left-0 z-20"></div>
        {/* overlay */}

        <div className="flex justify-center items-center relative z-40 top-16 left-16">
          <div className="flex flex-col items-center gap-3">
            <p className="text-[#E4E4E4] text-base lg:text-lg xl:text-xl font-medium uppercase">
              Don’t miss our latest News
            </p>

            <label
              htmlFor="newsLetter"
              className="bg-[#0E0C15D4] rounded-md p-2 min-w-[200px] lg:min-w-[500px] flex items-stretch gap-5 cursor-pointer"
            >
              <input
                type="text"
                name="newsLetter"
                id="newsLetter"
                className="w-full focus-visible:outline-none bg-transparent cursor-pointer text-white px-4"
              />

              <button className="uppercase text-[#30373F] text-xs font-bold px-3 py-[6px] rounded-md bg-[#F9C306]">
                subscribe
              </button>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
