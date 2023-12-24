"use client"

import { SearchContext } from "@/app/context/Search";
import { useContext } from "react";

export default function Search() {
  const {searchActive} = useContext(SearchContext);

  return <div className={`${searchActive ? 'bg-white rounded-none xl:h-[80px]' : 'bg-white'}`}>Search</div>;
}
