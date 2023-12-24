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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque
        in metus vel suscipit. Proin tempor cursus nibh a scelerisque. Sed
        convallis libero massa, eu tristique nisl dictum eu. Ut nunc ex,
        vulputate molestie ornare et, elementum ac quam. Nunc sollicitudin ex
        ante, ut faucibus enim faucibus vitae. Quisque consectetur nisi vitae
        sollicitudin volutpat. Etiam auctor eros eleifend, pulvinar magna at,
        tempus arcu. Morbi consectetur vehicula neque, id venenatis lacus varius
      </div>
    </section>
  );
}
