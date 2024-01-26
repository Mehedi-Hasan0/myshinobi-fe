import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white container-padding">
      <section className="py-10 lg:py-16 flex flex-col justify-center items-center gap-4 lg:gap-8">
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-3 2xl:gap-4">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-center">
            Katana Inu is a
            <span className="uppercase text-[#F9C306]"> MMO NFT PC Game</span>
          </h2>
          <span className="flex flex-col justify-center items-center gap-2 lg:gap-4 2xl:gap-6">
            <p className="text-[#D0D4EA] text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-center">
              With focus on free2play and play2earn to attract web2 gamers.
            </p>
            <p className="text-[#D0D4EA] text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-center">
              Check for Katana Inu Ecosystem for Renting, Staking, our
              Marketplace or for purchasing our $Kata Token:
            </p>
          </span>
        </div>

        {/* btn */}
        <div className="flex items-center flex-wrap justify-center gap-3 lg:gap-4">
          <button className="bg-[#F9C306] px-4 py-2 2xl:py-3 rounded-lg flex items-center gap-2 uppercase text-sm lg:text-base 2xl:text-lg text-[#30373F] font-semibold">
            <p>play katanainu</p>
            <Image
              src="/assets/icons/arrow-up.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </button>
          <button className="border border-[#F9C306] px-4 py-2 2xl:py-3 rounded-lg flex items-center gap-2 uppercase text-sm lg:text-base 2xl:text-lg text-white font-semibold">
            <p>Buy $kata token</p>
            <Image
              src="/assets/icons/arrow-up-white.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </button>
          <button className="border border-[#F9C306] px-4 py-2 2xl:py-3 rounded-lg flex items-center gap-2 uppercase text-sm lg:text-base 2xl:text-lg text-white font-semibold">
            <p>Go to kainu.io marketplace</p>
            <Image
              src="/assets/icons/arrow-up-white.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </button>
        </div>
      </section>

      <section
        className="relative bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/assets/images/footerBg.png')" }}
      >
        {/* overlay */}
        <div className="absolute w-full h-full left-0 top-0 footer-overlay"></div>

        {/* content */}
        <div className="flex items-center flex-wrap gap-5 justify-between relative z-40 py-20">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            {/* images */}
            <Image
              src="/assets/images/logo2.png"
              alt="logo"
              width={236}
              height={96}
              className="w-32"
            />
            {/* subscribe to newsleteer */}
            <div className="flex flex-col gap-3">
              <p className="text-[#7A7977] text-base font-medium uppercase">
                Don’t miss our latest News
              </p>

              <label
                htmlFor="newsLetter"
                className="bg-[#30373F66] rounded-md p-2 min-w-[150px] lg:min-w-[350px] flex items-stretch gap-5 cursor-pointer"
              >
                <input
                  type="text"
                  name="newsLetter"
                  id="newsLetter"
                  className="w-full focus-visible:outline-none bg-transparent cursor-pointer text-white px-4"
                />

                <button className="uppercase text-[#30373F] text-xs font-bold px-3 py-[6px] rounded-md bg-[#F9C306] flex items-center gap-2 min-w-[114px]">
                  <p>subscribe</p>
                  <Image
                    src="/assets/icons/arrow-up.svg"
                    alt="arrow up"
                    width={18}
                    height={18}
                    className="w-[14px]"
                  />
                </button>
              </label>
            </div>
            {/* texts */}
            <div className="flex flex-col gap-3 lg:gap-5">
              <h4>
                KATANA INU is a project from{" "}
                <span className=""> CHAINVISION GAMES</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
