"use client";

import React, { useState } from "react";

import { Menu } from "@headlessui/react";

import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  "Main Street 123, United States",
  "Business Avenue 456, Canada",
  "Park Roda 789, United Kingdom",
];

export default function LocationSelection() {
  const [location, setLocation] = useState("Select Location");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="w-full h-16 xl:h-full justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row items-center">
                <FaMapMarkerAlt className="text-accent" /> Select Location
              </div>
              <div>{location}</div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items>Menu Items</Menu.Items>
      </div>
    </Menu>
  );
}
