"use client"

import { SearchContext } from "@/app/context/Search";
import { useContext } from "react";

export default function Search() {
  const {searchAcrive} = useContext(SearchContext);

  return <div>Search</div>;
}
