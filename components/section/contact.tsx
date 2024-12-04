import React from "react";
import { Input } from "../ui/input";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Textarea } from "../ui/textarea";
import { Title } from "./services";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="py-10 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto p-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 md:space-y-8">
          <Title title=" We're Here to Help" />
          <p className="text-sm md:text-base">
            Tell us about your needs, and we&apos;ll get back to you with a
            personalized quote. It&apos;s quick, simple, and hassle-free —just
            fill out the form to get started!
          </p>
          <Image
            src={"/contacthome.svg"}
            alt="contact.png"
            width={314}
            height={264}
          />
        </div>
        <div className="space-y-4 md:space-y-6">
          <Input className="py-6" placeholder="Full Name*" />
          <Input className="py-6" placeholder="Email*" />
          <Input className="py-6" placeholder="Phone Number*" />
          <Textarea className="p-4" placeholder="Description*" />
          <button className="w-full bg-primary text-white rounded-md">
            <div className="flex  p-4 justify-between text-base items-center gap-4 w-full">
              Get Free Quote
              <IoArrowForwardCircleOutline className="h-6 w-6" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
