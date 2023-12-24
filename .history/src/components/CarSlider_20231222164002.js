"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: "images/carSlider/car01.svg",
    info: [
      {
        icons: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icons: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icons: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icons: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icons: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Carolla",
    price: 25,
    stars: 5,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icons: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icons: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icons: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icons: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icons: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icons: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icons: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icons: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icons: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icons: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icons: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icons: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icons: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icons: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icons: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
];

export default function CarSlider() {
  return (
    <div className="container mx-auto">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w[385px] mx-auto sm:mx-0 bg-gray-100 ">
                <Image src={car.image} width={380} height={284} alt="" />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3>{car.name}</h3>
                    <h3>{car.price}/day</h3>
                  </div>
                  <div>stars</div>
                </div>
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center">
                          <Image
                            src={item.icons}
                            width={24}
                            height={24}
                            alt=""
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See Details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
