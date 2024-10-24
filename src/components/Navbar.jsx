//import React from 'react'

import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Navbar = () => {
    const navigate= useNavigate();
  return (
    <>
        <div className="w-full flex justify-between items-center font-semibold">
            <div className="flex items-center gap-2">
                <img onClick={()=> navigate(-1)} className="w-10 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
                <img onClick={()=> navigate(1)} className="w-10 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
            </div>
            <div className="flex items-center gap-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore Premium</p>
                <p className="bg-white text-black rounded-2xl cursor-pointer px-4 py-1">Install App</p>
                <p className="bg-purple-500 text-black rounded-full w-10 h-10 px-3 text-[25px] cursor-pointer justify-center">A</p>
            </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
            <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
            <p className="bg-black text-white px-4 py-1.5 rounded-2xl cursor-pointer">Music</p>
            <p className="bg-black text-white px-4 py-1.5 rounded-2xl cursor-pointer">Podcasts</p>
        </div>
    </>
  )
}

export default Navbar