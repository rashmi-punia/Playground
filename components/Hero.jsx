"use client"

import { ImageList, ImageListItem } from '@mui/material';
import React, { useRef } from 'react'
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import Scrolls from './Eg';


// const itemData = [
//   {
//     img: "https://assets.playgroundai.com/87d75239-2fe6-4dca-848e-67a7a79fe56c.jpg",
//     title: "Bed",
//   },
//   {
//     img: "https://images.playground.com/0253ecaf73a14485be8cc8c252ecf07a.jpeg",
//     title: "Books",
//   },
//   {
//     img: "https://images.playground.com/4a7a548964794bbaa23037f124eea5f3.jpeg",
//     title: "Sink",
//   },
//   {
//     img: "https://images.playground.com/e5ab71ed3c4c40168a07787b2f427392.jpeg",
//     title: "Kitchen",
//   },
//   {
//     img: "https://images.playground.com/f02bdc0bbf604441993843ce05e6a4a4.jpeg",
//     title: "Blinds",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
//     title: "Chairs",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
//     title: "Laptop",
//   },
//   //   {
//   //     img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
//   //     title: "Doors",
//   //   },
//   //   {
//   //     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//   //     title: 'Coffee',
//   //   },
// ];

const Hero = () => {

  return (
    <main className="fle mx-16 text-center ">
      <div className=' *:py-2 pt-16'>
        <h1 className="font-h1Font text-wrap">
          Unleash Your{" "}
          <span className="create text-8xl bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-pink-100 to-cyan-300">
            Creativity
          </span>{" "}
          with{" "}
          <span className="text-8xl bg-clip-text text-transparent bg-gradient-to-tr from-cyan-200 to-pink-300">
            AI
          </span>
          -Powered Image Generation
          <span className="border-2 ml-3 animate-ping duration-300 " />{" "}
        </h1>
        <h3 className='max-w-xl mx-auto'>
          Transform your ideas into stunning visuals with our cutting-edge image
          generation technology.
        </h3>
        <div className='space-x-12 mt-6'>
            <button className='button-gradient'>Get Started</button>
            <button> <SiGoogledisplayandvideo360 className='inline-flex size-5' /> Watch video</button>
        </div>
      </div> 
    </main>
  );
}

export default Hero
