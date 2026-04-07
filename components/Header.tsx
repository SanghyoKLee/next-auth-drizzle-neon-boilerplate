"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <header className="h-15 w-full flex-row items-center border-b border-gray-200 sticky top-0 z-1 ">
      {/* Content */}
      <div className="flex mx-80 w-auto h-full ">
        {/* Left Section */}
        <div className="flex items-center max-h-full gap-6">
          <div className="flex items-center mr-4">
            <Link href={"/dashboard"}>
              <Image
                src={"/logo.png"}
                alt={"logo image"}
                width={512}
                height={512}
                className="w-16 h-16 mr-3"
              ></Image>
            </Link>

            <Link href={"/dashboard"}>
              <p className="font-bold text-xl">Typewriter</p>
            </Link>
          </div>

          {/* Navigation Buttons */}
          <Link href={"/dashboard"} className="">
            My Decks
          </Link>
          <Link href={"/create"} className="">
            Create
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center ml-auto gap-6">
          <ModeToggle />
          <Link href={"/account"} className="">
            Account
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/signin" })}
            className=""
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
