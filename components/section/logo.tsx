import React from "react";

const Logo = () => {
  return (
    <div>
      <img
        src={"/logo.svg"}
        alt="logo"
        className="h-20 md:h-28 object-contain"
      />
    </div>
  );
};

export default Logo;
