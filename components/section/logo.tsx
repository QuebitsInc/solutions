import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={175}
        height={52}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
