import React from "react";
import { Headline } from "./services";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-10 md:y-20 min-h-screen bg-background">
      <div className="max-w-3xl text-center mx-auto p-4 w-full flex flex-col justify-center items-center gap-4">
        <Image
          src="/who-are-we-section-image.png"
          alt="whoareyou"
          width={591}
          height={595}
        />
        <Headline title="Who Are We" />
        <h1 className="text-black  text-xl md:text-3xl lg:text-4xl font-medium">
          Your Home&apos;s{" "}
          <span className="text-primary">Trusted Partner </span>
          {"  "}
          in Care and Renovation
        </h1>

        <p className="text-sm md:text-base">
          At Solutions Broker, we specialize in providing exceptional home
          maintenance, renovation, and installation services. Our skilled team
          is dedicated to ensuring your home remains functional, beautiful, and
          secure—tailored to meet your unique needs. With a focus on quality and
          reliability, we&apos;re here to make your dream home a reality.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
