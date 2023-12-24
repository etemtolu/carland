"use client"

import React,{useState} from 'react'

import {Menu} from "@headlessui/react"

import {FeMapMakerAlt} from "react-icons/fa"


const locations = [
  "Main Street 123, United States",
  "Business Avenue 456, Canada",
  "Park Roda 789, United Kingdom",
]

export default function LocationSelection() {
  const [location,setLocation] = useState('Select Location')
  return <Menu as='div' className="w-full ">LocationSelection</Menu>;
}
