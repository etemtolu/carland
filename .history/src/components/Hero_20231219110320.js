"use client";

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "@/app/context/Search";

export default function Hero() {
  const {sear} = useContext(SearchContext);
  return (
    <div>
      <Search />
    </div>
  );
}
