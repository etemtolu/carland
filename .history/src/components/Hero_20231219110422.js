"use client";

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "@/app/context/Search";

export default function Hero() {
  const {searchActive} = useContext(SearchContext);
  return (
    {
      searchActive ? <div></div> : 
    }
    <div>
      <Search />
    </div>
  );
}
