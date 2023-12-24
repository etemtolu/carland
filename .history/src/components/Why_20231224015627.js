"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

export default function Why() {
  return (
    <section className="section flex items-center bg-green-200" id="why">
      <div className="container mx-auto">
        <h2>Unmacted excellence and customer satisfaction</h2>
        <p>
          Our dedication to providing exceptional services sets us apart from
          the competition. From the moment you engage with us, we strive to
          exceed your expectations in every interaction.
        </p>
        <div>
          <Image src={"/images/why/car.svg"} width={1060} height={}/>
        </div>
      </div>
    </section>
  );
}
