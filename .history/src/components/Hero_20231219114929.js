"use client";

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "@/app/context/Search";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <div>
      {searchActive ? (
        <div className="fixed top-[80px] ">
          <Search />
        </div>
      ) : (
        <div>
          <Search />
        </div>
      )}
    </div>
  );
}
