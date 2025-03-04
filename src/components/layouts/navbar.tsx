import React from "react";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import { NavbarData } from "@/constant/layouts-data/navbar-data";
import Button from "../buttons/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="grid  border-4 border-pink-800 py-3">
      <div className="flex  justify-around items-center w-full border  ">
        <div>
          <Image src={logo} alt="logo" width={150} height={100} />
        </div>
        <div className="flex gap-x-4 ">
          <Button text="Sell a property" isOutline />

          {NavbarData.map((item, i) => (
            <div key={i} className="flex hover:border-b items-center">
              <Link href={item.link}>
                <Image
                  src={item.icon}
                  alt="icon"
                  width={20}
                  height={10}
                  className="flex w-full  "
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Second section border  */}
      <div className="border-blue-600 border-b"></div>
    </nav>
  );
};

export default Navbar;
