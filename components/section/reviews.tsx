import React from "react";
import { Title } from "./services";
import { IoIosStar } from "react-icons/io";

const Reviews = () => {
  return (
    <div className="max-w-6xl mx-auto w-full p-4 flex justify-center items-center flex-col gap-4 py-10 md:py-20">
      <div className="max-w-2xl text-center space-y-4 mx-auto">
        <Title
          title="Customer Experiences That 
Speak for Themselves"
        />
        <p className="text-sm">
          Discover why homeowners rely on us for their maintenance needs— from
          quick fixes to complete home transformations
        </p>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="p-4 border border-input rounded-lg flex flex-col gap-4"
          >
            <div className="flex gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full bg-yellow-950"></div>
                <h4 className="font-semibold text-lg">John Doe</h4>
              </div>
              <div className="flex gap-0.5">
                <div className="bg-primary text-white w-fit p-0.5 rounded">
                  <IoIosStar className="h-4 w-4" />
                </div>
                <div className="bg-primary text-white w-fit p-0.5 rounded">
                  <IoIosStar className="h-4 w-4" />
                </div>
                <div className="bg-primary text-white w-fit p-0.5 rounded">
                  <IoIosStar className="h-4 w-4" />
                </div>
                <div className="bg-primary text-white w-fit p-0.5 rounded">
                  <IoIosStar className="h-4 w-4" />
                </div>
              </div>
            </div>
            <p className="text-sm md:text-base">
              Solution Broker has been fantastic! They completed our plumbing
              repairs quickly and professionally. Highly recommend them for any
              home maintenance needs.
            </p>

            <div className="px-4 py-2 text-sm rounded-3xl border w-fit">
              Plumbing
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
