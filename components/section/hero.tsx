import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-background min-h-[85vh] h-full flex justify-center items-center flex-col">
      <div className="w-full h-full max-w-6xl mx-auto  p-4 grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 py-8">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
            Expert <span className="text-primary"> House Care</span>
            {"  "}You Can Trust
          </h1>
          <p className="text-sm md:text-base">
            From routine maintenance to stunning renovations, we&apos;ve got you
            covered—every step of the way
          </p>
          <a href="#contact">
            <button className="bg-transparent text-sm md:text-base shadow-none flex flex-row gap-4 items-center text-blck px-8 py-6 w-fit rounded-md">
              Get Free Quote
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="29" height="29" rx="14.5" fill="#065C62" />
                <path
                  d="M21.5525 15.5505C21.8565 15.2453 21.8556 14.7515 21.5505 14.4474L16.5775 9.49264C16.2723 9.18859 15.7785 9.18949 15.4744 9.49466C15.1704 9.79983 15.1713 10.2937 15.4764 10.5977L19.8969 15.002L15.4926 19.4224C15.1886 19.7276 15.1895 20.2215 15.4946 20.5255C15.7998 20.8296 16.2937 20.8286 16.5977 20.5235L21.5525 15.5505ZM8.00143 15.8038L21.0014 15.78L20.9985 14.22L7.99857 14.2438L8.00143 15.8038Z"
                  fill="white"
                />
              </svg>
            </button>
          </a>
        </div>
        <div>
          <Image src={"/hero.svg"} alt="hero" width={477} height={514} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
