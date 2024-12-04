import React from "react";
import { Title } from "./services";
import Image from "next/image";

const Howitworks = () => {
  const data = [
    {
      name: "Let us know what you need",
      desc: "From quick fixes to major renovations, we’re here to help with projects big and small",
      image: "/one.svg",
    },
    {
      name: "Get personalized solutions",
      desc: "Receive tailored recommendations and book services instantly. Compare quotes to find the perfect match.",
      image: "/Solution.svg",
    },
    {
      name: "We’re with you every step of the way",
      desc: "Enjoy expert support and peace of mind knowing your home is in trusted hands.",
      image: "/Vector.svg",
    },
  ];
  return (
    <div className="bg-primary py-10 md:py-20 text-white">
      <div className="max-w-6xl mx-auto w-full p-4 space-y-12 md:space-y-20">
        <Title title="How It Works" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-4  items-start  ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={65}
                  height={65}
                  //   className="w-16 h-16 md:w-24 md:h-24"
                />
                <div className="flex flex-col gap-4">
                  <h3 className="text-base md:text-xl font-medium">
                    {item.name}
                  </h3>
                  <p className="text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
