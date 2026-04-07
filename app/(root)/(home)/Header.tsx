import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-15 w-full flex-row items-center border-b border-gray-200">
      {/* Content */}
      <div className="flex mx-80 w-auto h-full ">
        {/* Left Section */}
        <div className="flex items-center max-h-full ">
          <Image
            src={"/logo.png"}
            alt={"logo image"}
            width={512}
            height={512}
            className="w-16 h-16 mr-4"
          ></Image>
          <p className="font-bold text-2xl">Typewriter</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
