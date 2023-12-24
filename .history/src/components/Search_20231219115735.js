"use client";

import { SearchContext } from "@/app/context/Search";
import { useContext } from "react";
import LocationSelection from "./LocationSelection";

export default function Search() {
  const { searchActive } = useContext(SearchContext);

  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounden-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div className="xl:h-full flex items-center">
      <LocationSelection />
      </div>
    </div>
  );
}
