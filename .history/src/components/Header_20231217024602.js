"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { Link } from "react-scroll";

import {BiMenuAltRight , BiX } from "react-icons/bi"

import SearchMobile from "./SearchMobile";

import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width : 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300   `}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between ">
        <div className="flex justify-between items-center px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={"/icons/logo.svg"} width={194} height={64} alt="" />
          </Link>
          {/* Açılır kapanır menü */}
          <div>
            {nav }
          </div>
        </div>
      </div>
    </header>
  );
}
