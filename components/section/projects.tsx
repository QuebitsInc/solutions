"use client";
import React from "react";
import { Headline, Title } from "./services";

const Projects = () => {
  const images = [
    "https://framerusercontent.com/images/mK0lZ0IwPXRFFd1zNzmG6OMevNM.webp",
    "https://framerusercontent.com/images/StqlPmRounqvvqhKDv44Rjph79A.webp?scale-down-to=512",
    "https://framerusercontent.com/images/m0pXJJrErdHvQj2cZnBEtJPc4.webp?scale-down-to=512",
    "https://framerusercontent.com/images/m8sbtrFIDuiGDSstNlhnh6zW88.webp?scale-down-to=512",
    "https://framerusercontent.com/images/m8sbtrFIDuiGDSstNlhnh6zW88.webp?scale-down-to=512",
  ];

  return (
    <div className="py-10 md:py-20 bg-background">
      <div className="max-w-3xl mx-auto p-4 w-full flex flex-col justify-center items-center  gap-4">
        <Headline title="Recent Works" />
        <Title title="Our Work Speaks for Itself" />
        <p className="text-sm md:text-base text-center">
          From renovations to installations, we focus on providing reliable
          solutions that meet your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full md:h-[500px]">
          <div className="md:col-span-2 h-full  relative rounded-sm overflow-hidden ">
            <img
              src={images[0]}
              alt="Main property view"
              className="w-full  object-cover h-full aspect-[4/3] rounded-sm"
            />
          </div>
          <div className="md:col-span-2 h-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative w-full rounded-sm overflow-hidden cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Property view ${index + 2}`}
                  className="w-full h-full object-cover rounded-sm hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
