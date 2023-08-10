"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  rightIcon,
  textStyles,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      disabled={isDisabled || false}
      className={`custom-btn ${containerStyles} ${
        isDisabled ? "bg-gray-500 text-white" : ""
      }`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image
            src={`${rightIcon}`}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
