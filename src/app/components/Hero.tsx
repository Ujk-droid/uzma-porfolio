"use client";
import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import Typewriter from 'typewriter-effect';

export default function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="pink"
      />
     
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="purple" />
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D/400x400"
              style={{ width: '400px', height: '350px' }} // Manually set the size
            />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-5xl mb-4 text-gray-300 font-bold">
        Uzma Khan
      </h1>
      <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-600 to-purple-500 ">
              <Typewriter
                options={{
                  strings: ['Data Analysis', 'Web Developer', 'Web Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
    
    
    </div>
  </div>
</section>

    </div>
  );
}
