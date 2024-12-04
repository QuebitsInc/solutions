import React from "react";
import Logo from "./logo";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white p-4 pt-8 pb-4">
      <div className="max-w-6xl mx-auto w-full p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4 flex-col ">
            <Logo />
            <p className="text-sm md:text-base">
              We specialize in home maintenance, renovations, and installations,
              delivering quality solutions
            </p>
            <div className="flex gap-4 text-primary items-center">
              <a href="#">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#">
                <FaXTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-lg md:text-xl mb-2">Quick Links</h4>
            <ul className="space-y-4">
              <li className="capitalize text-sm md:text-base">home</li>
              <li className="capitalize text-sm md:text-base">about</li>
              <li className="capitalize text-sm md:text-base">services</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
