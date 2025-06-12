import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  link: string;
  blank?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", style, link, blank }) => (
  <Link
    to={link}
    className={`relative overflow-hidden rounded-full font-calluna text-base text-white shadow transition focus:outline-none flex justify-center items-center group ${className}`}
    style={style}
    target={blank ? '_blank' : '_parent'}
  >
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-8 transition-opacity duration-300 pointer-events-none z-0" />

    <div className="flex justify-center items-center w-full h-full z-10 relative transform transition-transform duration-300 group-hover:scale-120">
      {children}
    </div>
  </Link>
);

export default Button;
