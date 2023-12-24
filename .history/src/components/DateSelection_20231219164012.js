
"use client";

import React, { useState } from "react";

import { Menu } from "@headlessui/react";

import { FaMapMarkerAlt } from "react-icons/fa";


export default function DateSelection() {
  const [location, setLocation] = useState("Select Location");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="w-full h-16 xl:h-full justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y2-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent" />{" "}
                <div className="text-[15px] uppercase font-bold">
                  Select Date
                </div>
              </div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]">
          
        </Menu.Items>
      </div>
    </Menu>
  );
}

