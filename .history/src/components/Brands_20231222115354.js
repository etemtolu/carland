"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

export default function Brands() {
  return (
    <section className="xl:pt-16 xl: h-[-200px] bg-white flex flex-col justify-center">
      <div className="containe mx-auto">
        <div>
          <div>
            <Image
              src={"icons/brands/ford.svg"}
              width={85}
              height={32}
              alt=""
            />
          </div>
          <div>
            <Image
              src={"icons/brands/mercedes.svg"}
              width={85}
              height={32}
              alt=""
            />
          </div>
          <div>
            <Image
              src={"icons/brands/audi.svg"}
              width={85}
              height={32}
              alt=""
            />
          </div>
          <div>
            <Image src={"icons/brands/bmw.svg"} width={60} height={60} alt="" />
          </div>
          <div>
            <Image src={"icons/brands/vw.svg"} width={60} height={60} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
