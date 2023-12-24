"use client";

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "@/app/context/Search";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      {searchActive ? (
        <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="">
          <Search />
        </div>
      )}
    </section>
  );
}
