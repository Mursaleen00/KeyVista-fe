import { ButtonInterface } from "@/interfaces/button-interface";
import Image from "next/image";
import React from "react";

const Button = ({
  type,
  isOutline,
  onclick,
  className,
  icon,
  text,
}: ButtonInterface) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`${
        isOutline
          ? "border border-[#25D7D2] text-primary bg-white shadow-sm shadow-[#25D7D2]"
          : "bg-[#25D7D2] text-white shadow-sm shadow-[#25D7D2] hover:bg-[#5ceee9]"
      } ${className} rounded-lg items-center justify-center w-fit  px-13 h-11 text-lg hover:transition hover:duration-150 hover:ease-in-out  `}
    >
      {icon && <Image src={icon} alt="icon" height={15} width={20} />}
      {text}
    </button>
  );
};

export default Button;
