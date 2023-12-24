"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { Link } from "react-scroll";

import SearchMobile from "./SearchMobile";

import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width : 1300px)",
  });

  useEffect(()=> {
    const handleScroll = () => {
      if (window.scrollY>40){
        setHeader(true);
      }else{
        setHeader(false);
      }
    }
    windows.addEventListener()
  });

  return <div>Header</div>;
}
