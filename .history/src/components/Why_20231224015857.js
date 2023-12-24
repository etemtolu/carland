"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

export default function Why() {
  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <h2 className="h2 text-center">Unmacted excellence and customer satisfaction</h2>
        <p>
          Our dedication to providing exceptional services sets us apart from
          the competition. From the moment you engage with us, we strive to
          exceed your expectations in every interaction.
        </p>
        <div className="hidden md:flex justify-center mb-6 xl:mb-2">
          <Image src={"/images/why/car.svg"} width={1060} height={420} alt=""/>
        </div>
      </div>
    </section>
  );
}
