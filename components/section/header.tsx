"use client";

import React, { useState } from "react";
import Logo from "./logo";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { IoIosMenu } from "react-icons/io";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navData = ["Home", "About", "Services", "Contact"];

  return (
    <div className="flex max-w-6xl p-4 mx-auto justify-between items-center w-full">
      <div>
        <Logo />
      </div>
      <ul className="hidden md:flex items-center gap-6">
        {navData.map((e, i) => (
          <a
            key={i}
            className="text-base hover:text-primary hover:font-bold transition-all"
            href={`#${e.toLocaleLowerCase()}`}
          >
            <li className="py-2"> {e} </li>
          </a>
        ))}
      </ul>
      <Button className="md:hidden" onClick={() => setOpen(true)}>
        <IoIosMenu className="h-6 w-6" />
      </Button>
      <Sheet open={open} defaultOpen={open} onOpenChange={() => setOpen(!open)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <div>
            <ul className="flex-col flex items-start gap-6">
              {navData.map((e, i) => (
                <a
                  key={i}
                  className="text-base text-left hover:text-primary hover:font-bold transition-all"
                  href={`#${e.toLocaleLowerCase()}`}
                  onClick={() => setOpen(false)}
                >
                  <li className="py-2"> {e} </li>
                </a>
              ))}
            </ul>
            <br />
            <br />
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
