"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

import { MdHandshake, MdKey , MdTrendingUp} from "react-icons/md";

export default function Why() {
  return (
    <section className="section flex items-center bg-green-200" id="why">
      <div className="container mx-auto">
        <h2>Unmacted excelliance</h2>
      </div>
    </section>
  );
}
