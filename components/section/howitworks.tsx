import React from "react";
import { Title } from "./services";
import Image from "next/image";

const Howitworks = ({ items }: { items: any }) => {
  return (
    <div className="bg-primary py-10 md:py-20 text-white">
      <div className="max-w-6xl mx-auto w-full p-4 space-y-12 md:space-y-20">
        <Title title="How It Works" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {items.map((item: any, index: number) => (
            <div key={index} className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-4  items-start  ">
                <div className="h-16">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={65}
                    height={65}
                    //   className="w-16 h-16 md:w-24 md:h-24"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-base md:text-xl font-medium">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base">{item.description}</p>
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
