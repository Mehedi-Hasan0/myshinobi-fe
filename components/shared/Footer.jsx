"use client";

import { footerNeedhelp, footerProduct, footerSocialLink } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [btnHovered, setBtnHovered] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
  });

  const handleMouseHover = (btnName) => {
    setBtnHovered((prevBtnStates) => ({
      ...prevBtnStates,
      [btnName]: !prevBtnStates[btnName],
    }));
  };

  const handleMouseOut = (btnName) => {
    setBtnHovered((prevBtnStates) => ({
      ...prevBtnStates,
      [btnName]: !prevBtnStates[btnName],
    }));
  };

  return (
    <footer className="text-white">
      <section className="py-10 lg:py-16 flex flex-col justify-center items-center gap-4 lg:gap-8  container-padding">
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
          <button
            className="bg-[#F9C306] border border-[#F9C306] hover:bg-transparent hover:text-white transition duration-200 ease-in px-4 py-2 2xl:py-3 rounded-lg flex items-center gap-2 uppercase text-sm lg:text-base 2xl:text-lg text-[#30373F] font-semibold"
            onMouseEnter={() => {
              handleMouseHover("btn1");
            }}
            onMouseLeave={() => {
              handleMouseHover("btn1");
            }}
          >
            <p>play katanainu</p>
            <Image
              src={
                btnHovered.btn1
                  ? "/assets/icons/arrow-up-white.svg"
                  : "/assets/icons/arrow-up.svg"
              }
              alt="arrow"
              width={20}
              height={20}
            />
          </button>
          <button
            className="border border-[#F9C306] hover:bg-[#F9C306] hover:border-transparent hover:text-[#30373F] transition duration-200 ease-in px-4 py-2 2xl:py-3 rounded-lg flex items-center gap-2 uppercase text-sm lg:text-base 2xl:text-lg text-white font-semibold"
            onMouseEnter={() => {
              handleMouseHover("btn2");
            }}
            onMouseLeave={() => {
              handleMouseHover("btn2");
            }}
          >
            <p>Buy $kata token</p>
            <Image
              src={
                !btnHovered.btn2
                  ? "/assets/icons/arrow-up-white.svg"
                  : "/assets/icons/arrow-up.svg"
              }
              alt="arrow"
              width={20}
              height={20}
            />
          </button>
          <button
            className="border border-[#F9C306] hover:bg-[#F9C306] hover:border-transparent hover:text-[#30373F] transition duration-200 ease-in px-4 py-2 2xl:py-3 rounded-lg flex items-center gap-2 uppercase text-sm lg:text-base 2xl:text-lg text-white font-semibold"
            onMouseEnter={() => {
              handleMouseHover("btn3");
            }}
            onMouseLeave={() => {
              handleMouseHover("btn3");
            }}
          >
            <p>Go to kainu.io marketplace</p>
            <Image
              src={
                !btnHovered.btn3
                  ? "/assets/icons/arrow-up-white.svg"
                  : "/assets/icons/arrow-up.svg"
              }
              alt="arrow"
              width={20}
              height={20}
            />
          </button>
        </div>
      </section>

      <section
        className="relative bg-no-repeat bg-center container-padding"
        style={{ backgroundImage: "url('/assets/images/footerBg.png')" }}
      >
        {/* overlay */}
        <div className="absolute w-full h-full left-0 top-0 footer-overlay"></div>

        {/* content */}
        <div className="flex gap-8 justify-between flex-wrap md:flex-nowrap relative z-40 py-20">
          {/* logo and texts */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 flex-1">
            {/* images */}
            <Link href="/">
              <Image
                src="/assets/images/logo2.png"
                alt="logo"
                width={236}
                height={96}
                className="w-32"
              />
            </Link>
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

                <button
                  className="uppercase text-[#30373F] text-xs font-bold px-3 py-[6px] rounded-md bg-[#F9C306] border border-[#F9C306] hover:text-white hover:bg-transparent transition duration-200 ease-in flex items-center gap-2 min-w-[114px]"
                  onMouseEnter={() => {
                    handleMouseHover("btn4");
                  }}
                  onMouseLeave={() => {
                    handleMouseHover("btn4");
                  }}
                >
                  <p>subscribe</p>
                  <Image
                    src={
                      btnHovered.btn4
                        ? "/assets/icons/arrow-up-white.svg"
                        : "/assets/icons/arrow-up.svg"
                    }
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
              <h4 className="text-[#D0D4EA] text-xs md:text-sm 2xl:text-base">
                KATANA INU is a project from{" "}
                <span className="text-[#F9C306]"> CHAINVISION GAMES</span>
              </h4>

              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-[#7A7977] text-xs lg:text-sm">
                  Nothing on this website constitutes financial advice, and it
                  is always recommended to consult a qualified financial advisor
                  before participating in any token or NFT purchases.
                </p>
                <p className="text-[#7A7977] text-xs lg:text-sm">
                  Buy Katana Inu NFTs only from katanainu.com or kainu.io
                  subdomains to be safe. Check the website's address for on our
                  main website www.katanainu.com and go to the "Minting NFTs"
                  section to verify.
                  <span className="text-[#F9C306]">
                    {" "}
                    Ask in our telegram or discord channel for confirmation.
                    Avoid other websites!
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* products */}
          <div className="flex flex-col gap-2 lg:gap-4 mt-16 lg:flex-auto">
            <p className="text-sm lg:text-base 2xl:text-lg text-white font-bold">
              Products
            </p>

            {footerProduct.map((link) => (
              <Link
                href={link.path}
                key={link.label}
                className="px-3 py-2 cursor-pointer text-[#BEC1CE] text-xs lg:text-sm 2xl:text-base w-fit hover:text-primary transition duration-200 ease-in"
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* need help */}
          <div className="flex flex-col gap-2 lg:gap-4 mt-16 lg:flex-auto relative z-30">
            <p className="text-sm lg:text-base 2xl:text-lg text-white font-bold">
              Need Help?
            </p>

            {footerNeedhelp.map((link) => (
              <Link
                href={link.path}
                key={link.label}
                className="px-3 py-2 cursor-pointer text-[#BEC1CE] text-xs lg:text-sm 2xl:text-base w-fit hover:text-primary transition duration-200 ease-in"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex-1 min-w-[300px] xl:min-w-[400px] relative hidden lg:block z-10">
            <div className="">
              <Image
                src="/assets/images/glow1.png"
                alt="overlay glow"
                width={397}
                height={397}
                className="absolute z-30 top-0 left-0 w-[300px] xl:w-[390px]"
              />
              <Image
                src="/assets/images/glow2.png"
                alt="overlay glow"
                width={397}
                height={397}
                className="absolute z-30 top-0 left-0 w-[300px] xl:w-[390px]"
              />
              <Image
                src="/assets/images/glow3.png"
                alt="overlay glow"
                width={397}
                height={397}
                className="absolute z-30 top-0 left-0 w-[300px] xl:w-[390px]"
              />
              <Image
                src="/assets/images/glow4.png"
                alt="overlay glow"
                width={397}
                height={397}
                className="absolute z-30 top-0 left-0 w-[300px] xl:w-[390px]"
              />
            </div>
          </div>
          <Image
            src="/assets/images/nft/footerNft.png"
            alt="overlay glow"
            width={831}
            height={789}
            className="absolute z-20 bottom-0 -right-10 xl:right-0 w-[600px] hidden lg:block"
          />
        </div>
      </section>

      <section
        className="flex flex-row items-center md:justify-between justify-center gap-5 flex-wrap py-6 md:py-8 lg:py-10 2xl:py-11 border-t border-[#E4E4E41A] bg-black container-padding"
        // style={{ background: "black" }}
      >
        <p className="text-[#BEC1CE] text-xs lg:text-sm 2xl:text-base">
          © All Right Reserved, mint.katanainu.com
        </p>

        {/* social links */}
        <div className="flex items-center gap-2 lg:gap-4">
          {footerSocialLink.map((link) => (
            <Link
              href={link.path}
              key={link.label}
              className="p-2 rounded-lg bg-[#FFFFFF1A]"
            >
              <Image
                src={link.imgPath}
                alt={link.label}
                width={16}
                height={16}
              />
            </Link>
          ))}
        </div>

        {/* terms and others */}
        <div className="flex items-center">
          <Link
            href="/"
            className="px-3 py-2 text-[#BEC1CE] text-xs lg:text-sm 2xl:text-base"
          >
            Terms of Service
          </Link>
          <Link
            href="/"
            className="px-3 py-2 text-[#BEC1CE] text-xs lg:text-sm 2xl:text-base"
          >
            Cookies Policies
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
