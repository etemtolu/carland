"use client";

import Image from "next/image";

import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <div>
            <Image
              className="rounded-[20px]"
              src={"/images/about/car01.png"}
              width={500}
              height={448}
              alt=""
            />
          </div>
          <div>
            <div>
                <h2>Car Services Simplified.</h2>
                <p>Rent,choose and repair with ease.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
