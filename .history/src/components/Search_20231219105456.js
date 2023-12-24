"use client"

import { SearchContext } from "@/app/context/Search";
import { useContext } from "react";

export default function Search() {
  const {searchActive} = useContext(SearchContext);

  return <div className={`${searchActive ? 'bg-white' : 'bg-transparent'}`}>Search</div>;
}
