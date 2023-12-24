"use client"

import { SearchContext } from "@/app/context/Search";
import { useContext } from "react";

export default function Search() {
  const {searchActive} = useContext(SearchContext);

  return <div className={`${searchActive ? 'bg-white rounded-none xl:h-[80px]' : 'bg-white rounden-[20px] py-6 xl:pr-4 xl'}`}>Search</div>;
}
