"use client";
import React from "react";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import { NavbarIconData } from "@/constant/layouts-data/navbar-icon-data";
import Button from "../buttons/button";
import Link from "next/link";
import { NavbarPagesData } from "@/constant/layouts-data/navbar-pages-data";
import { HiMenuAlt3 } from "react-icons/hi";
import { urls } from "@/constant/urls-data";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex lg:flex-col py-3 justify-center items-center ">
      <div className="flex  justify-around items-center w-full">
        <div className="cursor-pointer">
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={100}
            onClick={() => router.push(urls.home)}
          />
        </div>
        <div className=" lg:flex hidden gap-x-4 cursor-pointer">
          <Button text="Sell a property" isOutline />

          {NavbarIconData.map((item, i) => (
            <div key={i} className="flex hover:border-b items-center">
              <Link href={item.link}>
                <Image
                  src={item.icon}
                  alt="icon"
                  width={30}
                  height={10}
                  className="flex   "
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Second section border  */}
      <div className="flex   border-black pt-3"></div>
      {/* 3rd pages section */}
      <div className="lg:flex hidden justify-center gap-6 cursor-pointer ">
        {NavbarPagesData.map((item, i) => (
          <div key={i} className="flex  ">
            <Link href={item.link} className="flex gap-x-1 ">
              <Image
                src={item.icon ?? ""}
                alt=""
                width={30}
                height={10}
                className="flex "
              />
              <p className="flex text-xl"> {item.name} </p>
            </Link>
          </div>
        ))}
      </div>
      {/* side bar */}
      <div data-aos="fade-right">
        <HiMenuAlt3
          size={30}
          className="lg:hidden cursor-pointer"
          // onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
