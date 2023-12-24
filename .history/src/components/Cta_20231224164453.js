"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

export default function Cta() {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10"
      id="contact"
    >
      <div className="container mx-auto">
        <div>
          <div>
            <h2>Download our App now and hit the road</h2>
          </div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1 flex justify-center order-1 md:order-none"
        >
          <Image
            src={"/images/cta/phone.svg"}
            width={320}
            height={640}
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
}
